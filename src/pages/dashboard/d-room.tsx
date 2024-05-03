import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import droompage from "../../styles/droompage.module.css";
import { FaSave } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
// import { UploadOutlined } from "@ant-design/icons";
// import type { UploadProps } from "antd";
// import { Button, Upload } from "antd";

function DRoom() {
  // const navigate = useNavigate();

  // const props: UploadProps = {
  //   action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  //   onChange({ file, fileList }) {
  //     if (file.status !== "uploading") {
  //       console.log(file, fileList);
  //     }
  //   },
  //   defaultFileList: [
  //     {
  //       uid: "1",
  //       name: "xxx.png",
  //       status: "uploading",
  //       url: "http://www.baidu.com/xxx.png",
  //       percent: 33,
  //     },
  //     {
  //       uid: "2",
  //       name: "yyy.png",
  //       status: "done",
  //       url: "http://www.baidu.com/yyy.png",
  //     },
  //     {
  //       uid: "3",
  //       name: "zzz.png",
  //       status: "error",
  //       response: "Server Error 500", // custom error message to show
  //       url: "http://www.baidu.com/zzz.png",
  //     },
  //   ],
  // };

  return (
    <div>
      <Card minH="40vh" marginLeft="1%">
        <CardHeader>
          <div className={droompage.titleStyles1}>
            <Text fontWeight="bold" fontSize="20px" marginLeft={4}>
              1. แบบสอบถามหัวข้อที่ 1
            </Text>
          </div>
        </CardHeader>
        <CardBody marginLeft={7}>
          <Text>1.1 แบบสอบถามเพื่อประเมินความพึงพอใจของผู้ใช้บริการ</Text>
          <Text className={droompage.title}>choice 1</Text>
          <Text className={droompage.title}>choice 2</Text>
          <Text className={droompage.title}>choice 3</Text>
          <Text className={droompage.title}>choice 4</Text>
        </CardBody>
      </Card>

      <Card marginLeft="1%" marginTop="0.1%" minH="34vh">
        <Flex>
          <Box>
            <CardHeader>
              <div className={droompage.test033}>
                <Text fontWeight="bold" fontSize="20px" marginLeft={4}>
                  ผลการดำเนินงาน 50% รอตรวจสอบ
                </Text>
              </div>
            </CardHeader>
            <CardBody marginLeft={7}>
              <Text className={droompage.title}>แนบไฟล์</Text>
              <Text className={droompage.title}>ไฟล์ที่แนบอยู่</Text>
              <Text className={droompage.title}>
                filename : survey_PDPA.pdf 2
              </Text>
            </CardBody>
          </Box>

          <Spacer />

          <Box className={droompage.test055}>
            <CardHeader>
              <div className={droompage.test044}>
                <Text fontWeight="bold" fontSize="20px" marginLeft={4}>
                  ผลการดำเนินงาน 20% อนุมัติ
                </Text>
              </div>
            </CardHeader>
            <CardBody marginLeft={7}>
              <Text className={droompage.title}>ข้อเสนอแนะจาก Admin</Text>
              <Text className={droompage.title}>ทดสอบข้อเสนอแนะจาก Admin</Text>
            </CardBody>
          </Box>
        </Flex>

        <Box margin={5}> 
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"center"}
          >
            <Button
              w={"160px"}
              bg={"#FFD004"}
              borderRadius="50px"
              fontWeight={"bold"}
              color={"Black"}
              _hover={{
                bg: "#EABE00",
              }}
            >
              <div className={droompage.test066}>
                <FaSave />
              </div>
              บันทึก
            </Button>
          </Stack>
        </Box>
      </Card>
    </div>
  );
}

export default DRoom;
