import { Table, Popconfirm, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import getMonthName from "../Utils"
import { BsSunFill, BsMoon } from 'react-icons/bs';

function getDayNightValue(text, index) {
    if (index % 2 === 0) {
        return <Space size="large">
            <BsSunFill style={{ color: 'yellow' }} />
            <a>{text}</a>
        </Space>
    }
    else {
        return <Space size="large">
            <BsMoon />
            <a>{text}</a>
        </Space>
    }
}
const dataSource = [
    {
        id: 1,
        value: 4.758,
        year: 2021,
        month: 9,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 1,
        value: 5.131,
        year: 2021,
        month: 9,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 1,
        value: 5.131,
        year: 2021,
        month: 10,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 1,
        value: 5.131,
        year: 2021,
        month: 10,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 1,
        value: 5.131,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 2,
        value: 5.131,
        year: 2021,
        month: 11,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 3,
        value: 5.131,
        year: 2021,
        month: 12,
        statementDate: new Date(2021, 12, 2),
        isSimulated: false,
        type: 'electricity'
    },
    {
        id: 4,
        value: 5.131,
        year: 2021,
        month: 12,
        statementDate: new Date(2022, 1, 2),
        isSimulated: false,
        type: 'electricity'
    }
];
const columns = [
    {
        title: '',
        dataIndex: 'month',
        key: 'month',
        render: (text, index) => {
            return <b>{getMonthName(text)}</b>
        },
        onCell: (_, index) => {
            if (index % 2 === 0) {
                return { rowSpan: 2 }
            }
            return { rowSpan: 0 };
        }
    },
    {
        title: '2020',
        dataIndex: 'value',
        key: 'value',
        render: (text, _, index) => {
            return getDayNightValue(text, index);
        },
    },
    {
        title: '2021',
        dataIndex: 'value',
        key: 'value',
        render: (text, _, index) => {
            return getDayNightValue(text, index);
        },
    },
    {
        title: '2022',
        dataIndex: 'value',
        key: 'value',
        render: (text, _, index) => {
            return getDayNightValue(text, index);
        },
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

export default function ElectricityTable() {
    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
}