import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined, TableOutlined, BarChartOutlined, UnorderedListOutlined } from '@ant-design/icons';

export default function MenuNav(){
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to="/">
                <span>Accueil</span>
            </Link>
        </Menu.Item>
        <Menu.Item key='list' icon={<UnorderedListOutlined />}>
            <Link to="/list">
                <span>Liste des relevés</span>
            </Link>
        </Menu.Item>
        <Menu.Item key='table' icon={<TableOutlined />}>
            <Link to="/table">
                <span>Tableau des relevés</span>
            </Link>
        </Menu.Item>
        <Menu.Item key='statistics' icon={<BarChartOutlined />}>
            <Link to="/statistics">
                <span>Statistiques</span>
            </Link>
        </Menu.Item>
    </Menu>
    );
}