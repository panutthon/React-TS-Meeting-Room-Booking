import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, CardBody } from "@chakra-ui/react";
import successpage from "../styles/successpage.module.css";
import { useNavigate } from "react-router-dom";

export default function Successpage() {
  const navigate = useNavigate();
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgColor={"#1D262E"}
    >
      <Box>
        <Card className={successpage.centericon}>
          <CardBody>
            <Flex justify="center">
              <CheckCircleIcon boxSize={"143px"} color={"#4bad4b"} margin={5} />
            </Flex>
            <Text className={successpage.textstyle}>บันทึกสำเร็จ</Text>
            <Flex justify="center"> {/* Add this line */}
              <Button
                className={successpage.buttonstyle}
                style={{ backgroundColor: "#FFD004" }}
                onClick={() => navigate("/dashboard")}
              >
                ตกลง
              </Button>
            </Flex> {/* Add this line */}
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
}
