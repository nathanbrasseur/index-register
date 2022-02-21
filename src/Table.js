import ElectricityTable from './tables/ElectricityTable';
import ElectricityAddButton from './buttons/ElectricityAddButton';
import WaterTable from './tables/WaterTable';
import WaterAddButton from './buttons/WaterAddButton';
import { Tabs, Space } from 'antd';
const { TabPane } = Tabs;

export default function Table() {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab='Electricité' key="1">
                <Space direction='vertical'>
                    <ElectricityAddButton />
                    <ElectricityTable />
                </Space>
            </TabPane>
            <TabPane tab='Eau' key="2">
                <Space direction='vertical'>
                    <WaterAddButton />
                    <WaterTable />
                </Space>
            </TabPane>
        </Tabs>
    );
}