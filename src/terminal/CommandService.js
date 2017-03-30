export default class CommandService {
  /**
   * Run a command and get output.
   * @param {string} command
   */
  run(command) {
    // Unknown command.
    //
    // Usage:
    // --lorem
    // --ipsum
    // --dolor
    return {
      name: command,
      description: "Unknown command.",
      example: "<command>",
      usageTitle: "Commands",
      usage: [
        "help",
        "zen",
        "updates",
        "github",
        "ls"
      ]
    }
  }
}
