export default class Terminal extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="vertical-center">
          <input type="text" maxLength="128"/>
          <span className="command">{this.props.command}</span>
          <span className="caret"></span>
        </div>
      </div>
    );
  }
}