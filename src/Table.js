import ElectricityTable from './tables/ElectricityTable';
import ElectricityAddButton from './buttons/ElectricityAddButton';
import WaterTable from './tables/WaterTable';
import WaterAddButton from './buttons/WaterAddButton';
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;

export default function Table() {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab='Electricité' key="1">
                <Row gutter={[12, 12]}>
                    <Col className="gutter-row" span={23}>
                        <ElectricityAddButton />
                    </Col>
                    <Col className="gutter-row" span={23}>
                        <ElectricityTable />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='Eau' key="2">
                <Row gutter={[12, 12]}>
                    <Col className="gutter-row" span={23}>
                        <WaterAddButton />
                    </Col>
                    <Col className="gutter-row" span={23}>
                        <WaterTable />
                    </Col>
                </Row>
            </TabPane>
        </Tabs>
    );
}