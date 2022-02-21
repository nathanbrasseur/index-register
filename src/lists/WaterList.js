import { useState, useEffect } from 'react';
import { Table, Popconfirm, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as Utils from "../Utils"
const columns = [
    {
        title: 'Mois',
        dataIndex: 'month',
        key: 'month',
        render: text => {return <b>{Utils.getMonthName(text)}</b>}
    },
    {
        title: 'Année',
        dataIndex: 'year',
        key: 'year'
    },
    {
        title: 'Relevé',
        dataIndex: 'value',
        key: 'value',
        render: text => <a>{text}</a>
    },
    {
        title: 'Actions',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary" shape="circle" icon={<EditOutlined />}/>
                <Popconfirm title="Are you sure delete this index?" okText="Yes" cancelText="No">
                    <Button type="danger" shape="circle" icon={<DeleteOutlined />}/>
                </Popconfirm>
            </Space>
        ),
    },
];

export default function WaterList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getData();
        
        async function getData() {
          const response = await fetch(Utils.API_GET_WATER);
          const results = await response.json();
          setData(results) ;
        }
      }, []);
    return (
        <Table dataSource={data} columns={columns} pagination={false} />
    );
}