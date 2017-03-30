import CommandOutput from './CommandOutput';
import CommandService from './CommandService';

export default class Terminal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {history: [{"command": "", "commandOutput": "" }]};
    this.current = this.state.history[this.state.history.length - 1];
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.commandService = new CommandService();
  }

  // Lifecycles
  // componentDidMount()
  // componentWillUnmount()

  focusInput(e) {
    this.cmdInput.focus();
  }

  onChange(e) {
    let prev = this.current;
    let commands = this.state.history.slice();
    this.current = Object.assign(prev, { "command": e.target.value });
    this.setState({history: commands});
    // this.current = commands[commands.length - 1];
  }

  onKeyUp(e) {
    if (e.key === 'Enter') {
      this.submit();
    }
  }

  submit() {
    const output = this.commandService.run(this.current.command);
    const commands = this.state.history.slice();
    commands.push({ "command": "" , "commandOutput": output });
    this.current.command = "";
    this.setState({history: commands});
  }

  getOutputList() {
    // return this.state.history.map((current, i) => {
    //   return current.commandOutput && <CommandOutput key={i} output={current.commandOutput} />
    // });
    const cmd = this.state.history[this.state.history.length - 1];
    return cmd && cmd.commandOutput && <CommandOutput key={0} output={cmd.commandOutput} />
  }

  render() {
    const commandOutputList = this.getOutputList();
    return (
      <div className="container" onClick={this.focusInput}>
        <div className="vertical-center">
          <div className="terminal--output">
            { commandOutputList }
          </div>
          <div className="terminal--input">
            <input type="text" autoFocus
              ref={(input) => { this.cmdInput = input; }}
              value={this.current.command}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp} />
            <span className="command">{this.current.command}</span>
            <span className="caret"></span>
          </div>
        </div>
      </div>
    );
  }
}
