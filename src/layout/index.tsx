import { Layout } from '@arco-design/web-react';
import Head from './header'
import Menu from './menu'
import Render from './renderRoute'
const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;
export default () => {
    return <Layout style={{ height: '100vh' }}>
        <Header><Head /></Header>
        <Layout>
            <Sider><Menu /></Sider>
            <Content><Render /></Content>
        </Layout>
    </Layout>
}