import { Table, Popconfirm, Space, Button } from 'antd';
import { FireTwoTone, ThunderboltTwoTone, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function getMonthName(monthNumber) {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return monthNames[monthNumber - 1];
}
