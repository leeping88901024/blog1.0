import { Layout, Menu, Icon } from 'antd'
import Link from 'next/link'
import Head from 'next/head'
import { DatePicker } from 'antd'
import './layout.css'
const {
    Header, Content, Footer, Sider
} = Layout

export default ({ children, title = '这是默认标题' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => {console.log(broken)}}
          onCollapse={(collapsed, type) => {console.log(collapsed, type)}}
        >
          <div className='logo' />
          
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              { children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
    </Layout>
  </div>
)