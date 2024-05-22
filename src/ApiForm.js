import React, { useState } from "react";

import { Form, Input, Button } from "antd";

import axios from "axios";

// const onFinish = (values) => {
//     console.log("Success:", values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

function ApiForm() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      console.log("values:", values);

      const response = await axios.post(
        "https://v1.tenants.authnull.com/createtenant",
        values
      );
      console.log("Response:", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const currentDate = new Date();
  const datetime = `${currentDate.getDate()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getFullYear()).padStart(
    2,
    "0"
  )}  ${String(currentDate.getHours()).padStart(2, "0")}:${String(
    currentDate.getMinutes()
  ).padStart(2, "0")} ${currentDate.getHours() < 12 ? "AM" : "PM"}`;

  const initialValues = {
    url: ".dev.authnull.com",
    createdby: datetime,
  };

  return (
    <div
      style={{
        border: "2px solid #f5f5f5",
        width: "1000px",
        marginLeft: "250px",
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Form
        name="basic"
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          textAlign: "center",
          marginTop: "100px",
          display: "grid",
          gridTemplateColumns: "500px 600px ",
          gridTemplateRows: "100px 100px",
          marginLeft: "50px",
        }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name={"tenantname"}
          label="Tenant Name "
          rules={[
            {
              required: true,
              message: "Please input your Tenant Name !",
            },
          ]}
        >
          <Input placeholder="Tenant Name" />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter your E-mail!",
            },
          ]}
        >
          <Input placeholder="E-Mail" />
        </Form.Item>
        <Form.Item
          label="URL"
          name={"url"}
          rules={[
            {
              required: true,
              message: "Please enter your URL !",
            },
          ]}
        >
          <Input placeholder="URL" />
        </Form.Item>

        <Form.Item
          label="Authentication Method"
          name="authenticationmethod"
          rules={[
            {
              required: true,
              message: "Please enter your Authentication Method !",
            },
          ]}
        >
          <Input placeholder="Authentication Method" />
        </Form.Item>

        <Form.Item
          label="Created By"
          name={"createdby"}
          rules={[
            {
              required: true,
              message: "Please enter your Created By !",
            },
          ]}
        >
          <Input disabled placeholder="Created By" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>

        <Button
          style={{
            width: "80px",
            marginLeft: "700px",
            marginBottom: "60px",
          }}
          type="default"
        >
          Cancel
        </Button>
        <Button
          style={{
            width: "80px",
            marginLeft: "300px",
            marginBottom: "60px",
          }}
          type="primary"
          htmlType="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default ApiForm;
