import { Table, Popconfirm, Space, Button, Typography } from 'antd';
import { useState, useEffect } from 'react';
import * as Utils from "../Utils"
import EditElectricityButton from '../buttons/ElectricityEditButton';
import RemoveElectricityButton from '../buttons/ElectricityRemoveButton';
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
        title: 'Relevé jour',
        dataIndex: 'dayValue',
        key: 'dayValue',
        render: text => <a>{text}</a>
    },
    {
        title: 'Relevé nuit',
        dataIndex: 'nightValue',
        key: 'nightValue',
        render: text => <a>{text}</a>
    },
    {
        title: 'Conso. jour',
        dataIndex: 'dayUsage',
        key: 'dayUsage',
        render: text => <a>{text}</a>
    },
    {
        title: 'Conso. nuit',
        dataIndex: 'nightUsage',
        key: 'nightUsage',
        render: text => <a>{text}</a>
    },
    {
        title: '',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <EditElectricityButton />
                <RemoveElectricityButton />
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

                pageData.forEach(({ dayUsage, nightUsage }) => {
                    totalDayValues += dayUsage;
                    totalNightValues += nightUsage;
                });
                console.log('pageData.length : ' + pageData.length)
                const averageDay = (totalDayValues / pageData.length).toFixed(3);
                const averageNight = (totalNightValues / pageData.length).toFixed(3);

                return (
                    <>
                        <Table.Summary.Row>
                            <Table.Summary.Cell><Text italic strong type='secondary'>Moyenne</Text></Table.Summary.Cell>
                            <Table.Summary.Cell></Table.Summary.Cell>
                            <Table.Summary.Cell></Table.Summary.Cell>
                            <Table.Summary.Cell></Table.Summary.Cell>
                            <Table.Summary.Cell>
                                <Text italic strong type='secondary'>{averageDay}</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell>
                                <Text italic strong type='secondary'>{averageNight}</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell></Table.Summary.Cell>
                        </Table.Summary.Row>
                    </>
                );
            }}
        />
    );
}