import { Table, Popconfirm, Space, Button } from 'antd';
import { FireTwoTone, ThunderboltTwoTone, EditOutlined, DeleteOutlined } from '@ant-design/icons';
const dataSource = [
    {
        id: 1,
        dayValue:  5.131,
        nightValue: 4.758,
        year: 2021,
        month: 9,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 2,
        dayValue: 5.131,
        nightValue: 4.758,
        year: 2021,
        month: 10,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 3,
        dayValue: 5.264,
        nightValue: 2.264,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 4,
        dayValue: 2.264,
        nightValue: 5.264,
        year: 2021,
        month: 12,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
        type: 'electricity'
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
        title: 'Day value',
        dataIndex: 'dayValue',
        key: 'dayValue',
        render: text => <a>{text}</a>
    },
    {
        title: 'Night value',
        dataIndex: 'nightValue',
        key: 'nightValue',
        render: text => <a>{text}</a>
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (type, record) => {
            return <Space size="large">
                <ThunderboltTwoTone twoToneColor="#fde047" />
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

export default function ElectricityList() {
    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
}