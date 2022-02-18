import ElectricityList from './lists/ElectricityList';
import ElectricityAddButton from './buttons/ElectricityAddButton';
import WaterList from './lists/WaterList';
import WaterAddButton from './buttons/WaterAddButton';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function ListPage() {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab='Electricité' key="1">
                <ElectricityAddButton />
                <ElectricityList />
            </TabPane>
            <TabPane tab='Eau' key="2">
                <WaterAddButton />
                <WaterList />
            </TabPane>
        </Tabs>
    );
}