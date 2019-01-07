import Layout from '../components/layout'

export default () => (
    <Layout title='登录'>
        <section className='hero is-primary is-fullheight'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-5-table is-4-desktop is-3-widescreen'>
                            <form className='box'>
                                <div className='field has-text-centered'>
                                    <img src='data:image/png;base64,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' width='167' />
                                </div>
                                <div className='field'>
                                    <label className='label'>邮箱</label>
                                    <div className='control has-icons-left'>
                                        <input className='input' type='email' placeholder='e.g. alexjohnson@gmail.com' required />
                                        <span className='icon is-small is-left'>
                                            <i className='fa fa-envelope'></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label'>密码</label>
                                    <div className='control has-icons-left'>
                                        <input className='input' type='password' placeholder='********' required />
                                        <span className='icon is-small is-left'>
                                            <i className='fa fa-lock'></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='checkbox'>
                                        <input type='checkbox' />
                                        记住我
                                    </label>
                                </div>
                                <div className='field'>
                                    <button className='button is-success'>
                                        登录
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)