import {Command} from "commander";
import {initAdd} from "./commands/init/addInit";

export function initCli(program: Command) {
  program
    .name("bloc-manager-cli")
    .version("0.0.1")
    .description("A CLI tool used to easily manage a BLOC pattern in your Vue + Pinia project.")

  program
    .command("hello")
    .description("Say hello")
    .action(() => {
      console.log("Hello!");
    });

  initAdd(program);
}