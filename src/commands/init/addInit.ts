import {Argument, Command} from "commander";
import {addExec} from "../exec/addExec";

export function initAdd(program: Command){
  program
    .command("add")
    .description("Add a new BLOC")
    .addArgument(new Argument("<type>","The type of element to add").choices(["rep","uc","bloc"]))
    .argument("<name>","The name of the element to add")
    .option("-l, --location <location>","The location to add the element to")
    .option("-p, --prefix <prefix>","The prefix to add to the element File name")
    .option("-s, --suffix <suffix>","The suffix to append to the element File name")
    .action((type,name,options) => {
      addExec({
        type,
        name,
        location: options.location,
        prefix: options.prefix,
        suffix: options.suffix
      })
    });
}