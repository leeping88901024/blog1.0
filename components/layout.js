import Link from 'next/link'
import Head from 'next/head'
import { Calendar } from 'antd'
export default ({ children, title = '这是默认标题' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>主页</a></Link> |
        <Link href='/about'><a>关于</a></Link> |
        <Link href='/contact'><a>联系</a></Link>
      </nav>
    </header>

    { children }
    <Calendar />
    <footer>
      {'我要待在这里'}
    </footer>
  </div>
)