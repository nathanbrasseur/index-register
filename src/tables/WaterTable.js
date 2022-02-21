import { Table, Popconfirm, Space, Button } from 'antd';
import { FireTwoTone, ThunderboltTwoTone, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as Utils from "../Utils"
const dataSource = [
    {
        id: 1,
        value: 4.758,
        year: 2021,
        month: 9,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'water'
    },
    {
        id: 2,
        value: 5.131,
        year: 2021,
        month: 10,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'water'
    },
    {
        id: 3,
        value: 5.264,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'water'
    },
    {
        id: 4,
        value: 2.264,
        year: 2021,
        month: 12,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
        type: 'water'
    }
];
const columns = [
    {
        title: 'Month',
        dataIndex: 'month',
        key: 'month',
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year'
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        render: text => <a>{text}</a>
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (type, record) => {
            return <Space size="large">
                <FireTwoTone twoToneColor="#93c5fd" />
            </Space>
        },
    },
    {
        title: 'Action',
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

export default function WaterTable() {
    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
}