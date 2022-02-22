import { Outlet, Routes, Route } from "react-router-dom";
import MenuNav from './Menu';
import IndexList from './IndexList';
import Home from './Home';
import Table from './Table';
import { Layout, Result } from 'antd';
import Statistics from "./Statistics";
const { Header, Footer, Content } = Layout;

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<ContentLayout />}>
                <Route index element={<Home />} />
                <Route path="list" element={<IndexList />} />
                <Route path="table" element={<Table />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    )
}
function ContentLayout() {
    return (
        <Layout className="layout">
            <Header>
                <MenuNav />
            </Header>
            <Content className="site-layout-content">
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by noobr</Footer>
        </Layout>
    );
}

function NoMatch() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
        />
    );
}