import MultiboxMenu from '../components/MultiboxMenu'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MultiboxMenu>
          <h2 className="content__title">Lee的学习log</h2>
          <p className="content__tagline">呈现不一样的内容</p>
      </MultiboxMenu>
    )
  }
}