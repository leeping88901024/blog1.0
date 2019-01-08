import Logo from '../../../assets/logo.png'
import Link from 'next/link'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_active: false
        }
    }

    handleClick() {
        this.setState({is_active: !this.state.is_active})
    }

    render () {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://www.macdull.top">
                    <img src={Logo} />
                    </a>

                    <a role="button" className={this.state.is_active ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick.bind(this)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={this.state.is_active ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-start">
                    <a className="navbar-item">
                        主页
                    </a>

                    <a className="navbar-item">
                        文档
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        更多
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                关于我
                            </a>
                            <a className="navbar-item">
                                工作经历
                            </a>
                            <a className="navbar-item">
                                联系我
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                反馈BUG
                            </a>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-primary">
                            <strong>注册</strong>
                        </a>
                        <Link href='/login'>
                            <a className="button is-light">
                                登录
                            </a>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
} 