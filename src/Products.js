import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { MoreOutlined } from '@ant-design/icons';

import axios from "axios";

function Products() {
  const [columns, setColumns] = useState([
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Admin Email",
      dataIndex: "ademail",
      render: ademail =>{
        return <Tag color="green">{ademail}</Tag>
      }
    },
    {
      title: "Tenant URL",
      dataIndex: "URL",
      render: url =>{
        return <a href="">{url}</a>
      },
    },
    {
      title: "Authentication Method",
      dataIndex: "auth",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Created At",
      dataIndex: "createdat",
    },
    {
      title: "Modified At",
      dataIndex: "modifiedat",
    },
    {
      title: "Action",
      dataIndex: 'action',
      render : action => {
        return <div><MoreOutlined /></div>
      }
    },
  ]);

  const [dataSource, setDatasource] = useState([]);

  // const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => setDatasource(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default Products;
