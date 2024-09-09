#!/usr/bin/env node
import inquirer from "inquirer";
import { Command } from "commander";
import {initCli} from "./cli";

run();

function run() {
  // Create a Command instance
  const program = new Command();
  initCli(program);
  program.parse(process.argv);
}

