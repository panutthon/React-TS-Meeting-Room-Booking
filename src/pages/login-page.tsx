import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginFormInput } from "../app-types/login-form-input.type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch } from "../redux-toolkit/hooks";
import { loginThunk } from "../redux-toolkit/auth/auth-slice";
import { LoginErrorResponse } from "../app-types/login.type";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  // toast
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // schema validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("ป้อนข้อมูลอีเมลล์ด้วย")
      .email("รูปแบบอีเมลล์ไม่ถูกต้อง"),
    password: yup
      .string()
      .required("ป้อนข้อมูลรหัสผ่านด้วย")
      .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormInput) => {
    try {
      const result = await dispatch(loginThunk(data)).unwrap(); // global state
      // console.log(result.access_token);
      if (result.access_token) {
        // localStorage.setItem("token", JSON.stringify(result.access_token));
        navigate("/dashboard");
      }
      toast({
        title: "เข้าสู่ระบบสำเร็จ",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error: any) {
      let err: LoginErrorResponse = error;
      toast({
        title: "เข้าสู่ระบบไม่สำเร็จ",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Panutthon{" "}
              <Link
                color={"blue.400"}
                onClick={() => {
                  window.open("https://www.youtube.com/watch?v=JBAuRoIRAs8");
                }}
              >
                features
              </Link>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                id="password"
                isInvalid={errors.password ? true : false}
              >
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  isLoading={isSubmitting}
                  loadingText="กำลังเข้าสู่ระบบ..."
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Log In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}
