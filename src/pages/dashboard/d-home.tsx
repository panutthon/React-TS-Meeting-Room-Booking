import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

import { Table, Checkbox, Button } from "antd";
import type { CheckboxProps } from "antd";

import dhompage from "../../styles/dhome.module.css";

const { Column, ColumnGroup } = Table;
const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

interface DataType {
  key: React.Key;
  order: number;
  question: string;
  alreadyfinish: string;
  during: string;
  cannot: string;
  document: string;
  suggestions: string;
  status: string;
  buttonnone: string;
  criteria: string;
}

const data: DataType[] = [
  {
    key: "1",
    order: 1,
    question: "กล้องวงจรปิด มีการดำเนินการตาม ม.23 ",
    alreadyfinish: "",
    during: "",
    cannot: "",
    document: "",
    suggestions: "",
    status: "",
    buttonnone: "",
    criteria: "",
  },
  {
    key: "1.1",
    order: 1.1,
    question: "มีป้ายแจ้งเตือนการติดกล้องวงจรปิดหรือไม่",
    alreadyfinish: "alreadyfinish",
    during: "during",
    cannot: "cannot",
    document: "file:survey.pdf",
    suggestions: "ควรปรับปรุง",
    status: "เอกสารไม่ครบถ้วน/ส่งเอกสารใหม่",
    buttonnone: "buttonnone1",
    criteria: "FAIL",
  },
  // {
  //   key: "1.2",
  //   order: 1.2,
  //   question: "มีการติดป้ายแจ้งเตือนในตำแหน่งที่เห็นได้ชัดหรือไม่",
  //   alreadyfinish: "alreadyfinish",
  //   during: "during",
  //   cannot: "cannot",
  //   document: "file:survey.pdf",
  //   suggestions: "เอกสารไม่ครบถ้วน",
  //   status: "เอกสารไม่ครบถ้วน/ส่งเอกสารใหม่",
  //   buttonnone: "buttonnone1",
  //   criteria: "FAIL",
  // },
  // {
  //   key: "1.3",
  //   order: 1.3,
  //   question: "มีกำหนดวัตถุประสงค์ของการเก็บ รวบรวม ฐานทางกฎหมายหรือไม่",
  //   alreadyfinish: "alreadyfinish",
  //   during: "during",
  //   cannot: "cannot",
  //   document: "file:survey.pdf",
  //   suggestions: "เอกสารไม่ครบถ้วน",
  //   status: "เอกสารไม่ครบถ้วน/ส่งเอกสารใหม่",
  //   buttonnone: "buttonnone1",
  //   criteria: "FAIL",
  // },
];

// const navigate = useNavigate();

const DHome: React.FC = () => (
  <Card minH="85vh" marginLeft="1%">
    <CardHeader>
      <div className={dhompage.titleStyles}>
        <Text fontWeight="bold" fontSize="24px" marginLeft={4}>
          แบบสอบถาม
        </Text>
      </div>
    </CardHeader>

    <CardBody>
      <Table dataSource={data}>
        <Column title="ลำดับ" dataIndex="order" key="order" />
        <Column title="คำถาม" dataIndex="question" key="question" />
        <ColumnGroup title="การดำเนินการ">
          <Column
            title="แล้วเสร็จ"
            dataIndex="alreadyfinish"
            key="alreadyfinish"
            render={(record, _, rowIndex) =>
              rowIndex === 0 ? null : (
                <Checkbox
                  onChange={onChange}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {record.alreadyfinish}
                </Checkbox>
              )
            }
          />
          <Column
            title="ระหว่างดำเนินงาน"
            dataIndex="during"
            key="during"
            render={(record, _, rowIndex) =>
              rowIndex === 0 ? null : (
                <Checkbox
                  onChange={onChange}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {record.during}
                </Checkbox>
              )
            }
          />
          <Column
            title="ไม่ได้ดำเนินการ"
            dataIndex="cannot"
            key="cannot"
            render={(record, _, rowIndex) =>
              rowIndex === 0 ? null : (
                <Checkbox
                  onChange={onChange}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {record.cannot}
                </Checkbox>
              )
            }
          />
        </ColumnGroup>
        <Column title="เอกสารประกอบ" dataIndex="document" key="document" />
        <Column
          title="ข้อเสนอแนะจากแอดมิน"
          dataIndex="suggestions"
          key="suggestions"
        />
        <Column title="สถานะ" dataIndex="status" key="status" />
        <Column
          title="ปุ่ม"
          dataIndex="buttonnone"
          key="buttonnonet"
          render={(record, _, rowIndex) =>
            rowIndex === 0 ? null : (
              <Button
                type="primary"
                danger
                style={{ backgroundColor: "#47CEF8" }}
              >
                {record.buttonnone}
                บันทึก
              </Button>
            )
          }
        />
        <Column
          className={dhompage.test}
          title="เกณฑ์ที่ได้รับ"
          dataIndex="criteria"
          key="criteria"
        />
      </Table>
    </CardBody>
  </Card>
);

export default DHome;
