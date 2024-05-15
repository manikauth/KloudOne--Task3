import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const ApiIntegrationTable = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.post('https://prod.tenants.authnull.com/getTenantDetail', {
          email: 'muthu@authnull.com',
          tenantId: 3,
          orgId: 89
        });

        const data = response.data;
        setDataSource([data.data]); // Assuming response is an object, convert it to an array if response is an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Organization Name',
      dataIndex: 'organizationName',
      key: 'organizationName'
    },
    {
      title: 'Tenant Name',
      dataIndex: 'tenantname',
      key: 'tenantname'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url'
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
    />
  );
};

export default ApiIntegrationTable;
