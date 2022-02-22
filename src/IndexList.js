import ElectricityList from './lists/ElectricityList';
import ElectricityAddButton from './buttons/ElectricityAddButton';
import WaterList from './lists/WaterList';
import WaterAddButton from './buttons/WaterAddButton';
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;

export default function ListPage() {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab='Electricité' key="1">
                <Row gutter={[12, 12]}>
                    <Col className="gutter-row" span={23}>
                        <ElectricityAddButton />
                    </Col>
                    <Col className="gutter-row" span={23}>
                        <ElectricityList />
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='Eau' key="2">
                <Row gutter={[12, 12]}>
                    <Col className="gutter-row" span={23}>
                    <WaterAddButton />
                    </Col>
                    <Col className="gutter-row" span={23}>
                    <WaterList />
                    </Col>
                </Row>
            </TabPane>
        </Tabs>
    );
}