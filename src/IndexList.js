import ElectricityList from './lists/ElectricityList';
import ElectricityAddButton from './buttons/ElectricityAddButton';
import WaterList from './lists/WaterList';
import WaterAddButton from './buttons/WaterAddButton';
import { Space } from 'antd';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function ListPage() {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab='Electricité' key="1">
                <Space direction='vertical'>
                    <ElectricityAddButton />
                    <ElectricityList />
                </Space>
            </TabPane>
            <TabPane tab='Eau' key="2">
                <Space direction='vertical'>
                    <WaterAddButton />
                    <WaterList />
                </Space>
            </TabPane>
        </Tabs>
    );
}