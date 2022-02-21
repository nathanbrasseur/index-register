import { useState, useEffect } from 'react';
import { Table, Popconfirm, Space, Button, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as Utils from "../Utils"
const { Text } = Typography;
const columns = [
    {
        title: 'Mois',
        dataIndex: 'month',
        key: 'month',
        render: text => { return <b>{Utils.getMonthName(text)}</b> }
    },
    {
        title: 'Année',
        dataIndex: 'year',
        key: 'year'
    },
    {
        title: 'Jour',
        dataIndex: 'dayValue',
        key: 'dayValue',
        render: text => <a>{text}</a>
    },
    {
        title: 'Nuit',
        dataIndex: 'nightValue',
        key: 'nightValue',
        render: text => <a>{text}</a>
    },
    {
        title: 'Actions',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary" shape="circle" icon={<EditOutlined />} />
                <Popconfirm title="Are you sure delete this index?" okText="Yes" cancelText="No">
                    <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
                </Popconfirm>
            </Space>
        ),
    },
];

export default function ElectricityList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getData();

        async function getData() {
            const response = await fetch(Utils.API_GET_ELEC);
            const results = await response.json();
            setData(results);
        }
    }, []);
    return (
        <Table
            dataSource={data}
            columns={columns}
            pagination={false}
            
            summary={pageData => {
                let totalDayValues = 0;
                let totalNightValues = 0;
        
                pageData.forEach(({ dayValue, nightValue }) => {
                  totalDayValues += dayValue;
                  totalNightValues += nightValue;
                });
        
                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell><Text italic strong type='secondary'>Total</Text></Table.Summary.Cell>
                      <Table.Summary.Cell></Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Text italic strong type='secondary'>{totalDayValues/pageData.length}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Text italic strong type='secondary'>{totalNightValues/pageData.length}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell></Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
        />
    );
}