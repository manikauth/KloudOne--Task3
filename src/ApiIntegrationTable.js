import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import axios from "axios";

const ApiIntegrationTable = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://prod.tenants.authnull.com/getTenantDetail",
          {
            email: "muthu@authnull.com",
            tenantId: 3,
            orgId: 89,
          }
        );

        const data = response.data;
        console.log(data);
        setDataSource([data.data]); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
 
    {
      title: "Organization Name",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Tenant Id",
      dataIndex: "tenantid",
      key: "    tenantid",
    },
    {
      title: "Tenant Name",
      dataIndex: "tenantname",
      key: "tenantname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => {
        return <Tag color="green">{email}</Tag>;
      },
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (url) => <a href={url}>{url}</a>,
    },
    {
      title: "Authentication Method",
      dataIndex: "authenticationmethod",
      key: "authenticationmethod",
    },
  ];

  return (
    <div>
      
      <Table dataSource={dataSource} columns={columns} loading={loading} />
    </div>
  );
};

export default ApiIntegrationTable;
