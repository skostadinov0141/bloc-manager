import {AddParams} from "../interfaces/addParams";

export function addExec(params: AddParams){
  switch (params.type){
    case "rep":
      addRep(params);
      break;
    // case "uc":
    //   addUC(params);
    //   break;
    // case "bloc":
    //   addBloc(params);
    //   break;
  }
}

function addRep(params: AddParams){
  if (!params.location) params.location = "./src/repositories";
  //display the absolute path to the file

}