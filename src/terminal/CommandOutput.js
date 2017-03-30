export default class CommandOutput extends React.Component {

  constructor(props) {
    super(props);
  }

  getUsageList() {
    return this.props
      .output
      .usage
      .map((u) => <li key={u}>{u}</li>);
  }

  render() {
    const usage = this.getUsageList();
    return (
      <div className="command--output">
        <div className="command--header">
          <span className="command-name">{this.props.output.name}</span>
          <span className="command-description">{this.props.output.description}</span>
        </div>
        <div className="command--usage">
          <div>
            <span>Usage: {this.props.output.example}</span>
          </div>
          <div>
            <span className="command--usage-title">{this.props.output.usageTitle}:</span>
            <ul>
              {usage}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
