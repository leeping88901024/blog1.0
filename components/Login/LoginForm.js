import Logo from '../../assets/logo-bis.png'

export default () => (
    <form className="box">
        <div className="field has-text-centered">
            <img src={Logo} width="167"/>
        </div>
        <div className="field">
        <label className="label">邮箱</label>
            <div className="control has-icons-left">
                <input className="input" type="email" placeholder="e.g. alexjohnson@gmail.com" required/>
                <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
                </span>
            </div>
        </div>
        <div className="field">
        <label className="label">密码</label>
            <div className="control has-icons-left">
                <input className="input" type="password" placeholder="********" required/>
                <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
                </span>
            </div>
        </div>
        <div className="field">
            <label className="checkbox">
                <input type="checkbox" required/>
                记住我
            </label>
        </div>
        <div className="field">
            <button className="button is-success">
                登录
            </button>
        </div>
    </form>
)