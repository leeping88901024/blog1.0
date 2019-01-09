import Head from 'next/head'

export default class MultiboxMenu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div>
				<Head>
					<title>博客 | 首页</title>
					<link rel="stylesheet" type="text/css" href="css/multiboxmenu-base.css" />
				</Head>
				<svg className="hidden">
					<symbol id="icon-arrow" viewBox="0 0 24 24">
						<title>arrow</title>
						<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
					</symbol>
					<symbol id="icon-drop" viewBox="0 0 24 24">
						<title>drop</title>
						<path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
					</symbol>
					<svg id="icon-github" viewBox="0 0 33 33">
						<title>github</title>
						<path d="M16.608.455C7.614.455.32 7.748.32 16.745c0 7.197 4.667 13.302 11.14 15.456.815.15 1.112-.353 1.112-.785 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353.148-1.052.569-1.77 1.034-2.177-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.233 1.677-4.371-.168-.412-.727-2.069.16-4.311 0 0 1.367-.438 4.479 1.67a15.602 15.602 0 0 1 4.078-.549 15.62 15.62 0 0 1 4.078.549c3.11-2.108 4.475-1.67 4.475-1.67.889 2.242.33 3.899.163 4.311C26.37 12.66 27 14.115 27 15.893c0 6.258-3.809 7.635-7.437 8.038.584.503 1.105 1.497 1.105 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.294.943 1.12.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29"></path>
					</svg>
					<symbol id="icon-menu" viewBox="0 0 119 25">
						<title>menu</title>
						<path d="M36,8 L36,0 L100,0 L100,8 L36,8 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z M0,28 L0,20 L71,20 L71,28 L0,28 Z"/>
					</symbol>
					<symbol id="icon-close" viewBox="0 0 24 24">
						<title>close</title>
						<path d="M24 1.485L22.515 0 12 10.515 1.485 0 0 1.485 10.515 12 0 22.515 1.485 24 12 13.484 22.515 24 24 22.515 13.484 12z"/>
					</symbol>
				</svg>

				<div className="frame">
					<header className="codrops-header">
						<h1 className="codrops-header__title">博文</h1>
					</header>
					<p className="info">12 &mdash; 24 五月 2019 &middot; Ping &middot; 昆明 &middot; 云南</p>
					<a className="github" href="https://github.com/leeping88901024/blog1.0" title="在github上查看该项目"><svg className="icon icon--github"><use href="#icon-github"></use></svg></a>
				</div>

				<div className="content">
				    <div className="background"></div>
					{ this.props.children }
				</div>
				<nav className="menu">
					<div className="menu__item menu__item--1" data-direction="bt">
						<div className="menu__item-inner">
							<div className="mainmenu">
								<a href="#" className="mainmenu__item">故事</a>
								<a href="#" className="mainmenu__item">编年史</a>
								<a href="#" className="mainmenu__item">足迹</a>
								<a href="#" className="mainmenu__item">联系我</a>
							</div>
							<p className="label label--topleft label--vert-mirror">至关重要的东西</p>
							<p className="label label--bottomright label--vert">中国制造</p>
						</div>
					</div>
					<div className="menu__item menu__item--2" data-direction="lr">
						<div className="menu__item-inner">
							<div className="menu__item-map"></div>
							<a href="#" className="menu__item-hoverlink">那个地方</a>
						</div>
					</div>
					<div className="menu__item menu__item--3" data-direction="bt">
						<div className="menu__item-inner">
							<div className="sidemenu">
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">游戏玩法</span></a>
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">关于LARP</span></a>
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">规则</span></a>
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">历史</span></a>
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">人文</span></a>
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">加入</span></a>
								<a href="#" className="sidemenu__item"><span className="sidemenu__item-inner">...</span></a>
							</div>
						</div>
					</div>
					<div className="menu__item menu__item--4" data-direction="rl">
						<div className="menu__item-inner">
							<p className="label label--topleft label--line">即刻加入我们</p>
							<a href="#" className="menu__item-link">如何 <br/> 加入</a>
						</div>
					</div>
					<div className="menu__item menu__item--5" data-direction="tb">
						<div className="menu__item-inner">
							<p className="quote">在软件开发中，技术变化如此之快，你花费了大量时间学习技术和工具，一旦这些技术被取代，你的知识将变得毫无价值，因为它们大部分都是实施的细节。</p>
						</div>
					</div>
					<button className="action action--menu"><svg className="icon icon--menu"><use href="#icon-menu"></use></svg></button>
					<button className="action action--close"><svg className="icon icon--close"><use href="#icon-close"></use></svg></button>
				</nav>
			</div>
		)
	}
}

<script src="demo.js"></script>