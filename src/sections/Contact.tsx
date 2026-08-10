import { Form, Input, message } from "antd";
import { MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form] = Form.useForm<ContactValues>();
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = (values: ContactValues) => {
    // Wire this up to your email service or backend of choice.
    console.log("Contact form submitted:", values);
    messageApi.success("Thanks for reaching out — I'll get back to you soon.");
    form.resetFields();
  };

  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Let's Build Something">
      {contextHolder}
      <div className="contact-panel">
        <div>
          <p>
            Have a project in mind or just want to say hello? My inbox is open — I try to reply
            within a day or two.
          </p>
          <div className="contact-detail-row">
            <MailOutlined />
            <span>mjhermac@ndkc.edu.ph</span>
          </div>
          <div className="contact-detail-row">
            <EnvironmentOutlined />
            <span>Kipawan City, Philippines</span>
          </div>
        </div>

        <Form form={form} layout="vertical" className="contact-form" onFinish={handleFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input placeholder="Jane Doe" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="jane@example.com" size="large" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please write a short message" }]}
          >
            <Input.TextArea placeholder="Tell me about your project..." rows={4} />
          </Form.Item>
          <Button variant="signal" htmlType="submit" style={{ width: "100%" }}>
            Send Message
          </Button>
        </Form>
      </div>
    </SectionWrapper>
  );
}
