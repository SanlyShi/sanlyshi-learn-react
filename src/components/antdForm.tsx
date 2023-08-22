import { Form, Input, Select } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Option } = Select;
function AntdForm() {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    console.log("value", value);
    switch (value) {
      case "male":
        form.setFieldsValue({ name: "Hi, 男人!" });
        break;
      case "female":
        form.setFieldsValue({ name: "Hi, 女人!" });
        break;
      case "other":
        form.setFieldsValue({ name: "Hi 其他人!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="form_d">
      <Form {...layout} form={form} onFinish={onFinish}>
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item name="gender" label="性别" rules={[{ required: true }]}>
          <Select
            placeholder="请设置性别"
            onChange={onGenderChange}
            allowClear
            labelInValue
          >
            <Option value="male">男</Option>
            <Option value="female">女</Option>
            <Option value="other">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender").value === "other" ? (
              <Form.Item
                name="customizeGender"
                label="自定义性别"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
      </Form>
    </div>
  );
}
export default AntdForm;
