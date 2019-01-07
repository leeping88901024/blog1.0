import Link from 'next/link'
import Head from 'next/head'
import 'bulma/css/bulma.css'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>主页</a></Link> |
        <Link href='/about'><a>关于我</a></Link> |
        <Link href='/contact'><a>联系我</a></Link>
      </nav>
    </header>

    { children }

    <a className="button is-primary">Primary</a>
    <a className="button is-link">Link</a>
    <a className="button is-info">Info</a>
    <a className="button is-success">Success</a>
    <a className="button is-warning">Warning</a>
    <a className="button is-danger">Danger</a>
    <footer>
      {'我要待在这里'}
    </footer>
  </div>
)