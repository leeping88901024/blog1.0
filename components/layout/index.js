import Link from 'next/link'
import Head from 'next/head'
// import 'bulma/css/bulma.css'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css" />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>主页</a></Link> |
        <Link href='/about'><a>关于我</a></Link> |
        <Link href='/contact'><a>联系我</a></Link> |
        <Link href='/login'><a>登录</a></Link>
      </nav>
      <nav className='navbar has-shadow'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzzFrb4FLMHRZtqshSqoTdOk75ziPTviKoLhZuDGzDSem56fdiQ' />
          </a>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <div className='navbar-item'>
              <small>发布技术博文</small>
            </div>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <div className='navbar-link'>
                是我
              </div>
              <div className='navbar-dropdown'>
                <a className='navbar-item'>
                  <div>
                    <span className='icon is-small'>
                      <i className='fa fa-user-circle-o'></i>
                    </span>
                    自我介绍
                  </div>
                </a>
                <a className='navbar-item'>
                  <div>
                    <span className='icon is-small'>
                      <i className='fa fa-bug'></i>
                    </span>
                    项目报告
                  </div>
                </a>
                <a className='navbar-item'>
                  <div>
                    <span className='icon is-small'>
                      <i className='fa fa-sign-out'></i>
                    </span>
                    退出
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    { children }

    <footer>
      {'我要待在这里'}
    </footer>
  </div>
)