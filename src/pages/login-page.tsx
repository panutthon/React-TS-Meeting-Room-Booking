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
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormInput } from "../app-types/login-form-input.type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from '@chakra-ui/react'

export default function LoginPage() {

  // toast
  const toast = useToast();

  // schema validation
  const schema = yup.object().shape({
    email: yup.string().required('ป้อนข้อมูลอีเมลล์ด้วย').email('รูปแบบอีเมลล์ไม่ถูกต้อง'),
    password: yup.string().required('ป้อนข้อมูลรหัสผ่านด้วย').min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
    mode : 'onSubmit'
  });
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);
    toast({
      title: "เข้าสู่ระบบสำเร็จ",
      // description: JSON.stringify(data),
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right"
    });
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

              <FormControl id="password" isInvalid={errors.password ? true : false}>
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
