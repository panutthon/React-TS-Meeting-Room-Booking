import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormInput } from "../app-types/login-form-input.type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@chakra-ui/react";
import NavbarHeader from "../components/NavbarHeader";
// import LargeWithAppLinksAndSocial from "../components/Footer";
import loginpage from "../styles/loginpage.module.css";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  // toast
  const toast = useToast();
  const navigate = useNavigate();

  // schema validation
  const schema = yup.object().shape({
    username: yup.string().required("ป้อนข้อมูลชื่อผู้ใช้ด้วย"),
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
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    navigate("/dashboard");
    console.log(data);
    toast({
      title: "เข้าสู่ระบบสำเร็จ",
      //description: JSON.stringify(data),
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <NavbarHeader />

      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        bgColor={"#1D262E"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}></Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            w={"381px"}
          >
            <img
              className={loginpage.centericon}
              src="https://s3-alpha-sig.figma.com/img/5093/890e/a78330da48a36916f5f28f40132d7f66?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdeD9IsIYgtrYeaFy9~ELvWxhy~WU6c4FBBHvgkM10LFR01lIMS1zBi9FbrcVv-lJk87sO~sBi3gWb4Uspgtat~PeYk2~2I7Vrz5W0MPvZ~oy5q~mz~4ag1Hq1xNFNpWTk31MnoD48gb2pGrbH3Y4xPJB3L0CbpBZHERdW1oixNRD43CjxsqovR6Gq1xiGAsg5gZtdiKUSbS1xGA0PeCZX-DMDiEFkv95Haod0NTIMuZvfq6QFZoQOGtdnn-9njG3EpT4Qz4AMYFRIjJhuIm1dzrc2bitFGvAbypZL7Rwwp62LEOoGkMg0zhnSTCMMQMo7fV-P0dFLQfm0k5ThHAbg__"
              alt="Image"
            />
            <Stack align={"center"} margin={5}>
              <div className={loginpage.headlogin}>เข้าสู่ระบบ</div>
            </Stack>
            <Stack spacing={4}>
              <FormControl
                id="username"
                isInvalid={errors.username ? true : false}
              >
                <Input type="username" {...register("username")} placeholder='Username' />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                id="password"
                isInvalid={errors.password ? true : false}
              >
                <FormLabel></FormLabel>
                <Input type="password" {...register("password")} placeholder='Password' />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={4}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"right"}
                >
                  <Link color={"#FFD004"} >ลืมรหัสผ่าน?</Link>
                </Stack>
                <Button
                  isLoading={isSubmitting}
                  loadingText="กำลังเข้าสู่ระบบ..."
                  type="submit"
                  bg={"#FFD004"}
                  borderRadius="30px"
                  fontWeight={"bold"}
                  color={"Black"}
                  _hover={{
                    bg: "#EABE00",
                  }}
                >
                  เข้าสู่ระบบ
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {/* <LargeWithAppLinksAndSocial /> */}
    </form>
  );
}
