import Layout from '../components/layout'
// import 'bulma/css/bulma.css'

export default () => (
  <Layout>
      <div className='columns'>
          {/* 第一列 */}
          <div className='column'></div>
          {/* 第二列 */}
          <div className='column'></div>
          {/* 第三列 */}
          <div className='column'></div>

          {/* 按钮 */}
          <a className='button is-primary is-large is-outlined'>
              保存更改
          </a>

          {/* 组件 */}
          <div className='card'>
              <header className='card-header'>
                  这是头
              </header>

              <div className='card-content'>
                  <div className='card-image'>
                      <img src='https://bulma.io/images/css-book/css-in-44-minutes-book-cover.png' />
                  </div>
              </div>

              <footer className='card-footer'>
              hhhhhhh
              </footer>
          </div>
      </div>
      <div>到第四十页面</div>
  </Layout>
)