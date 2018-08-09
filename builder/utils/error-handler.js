export function errorHandler(error) {
  if (!error) {
    return;
  }
  if(error.plugin) {
    console.log(`\x1B[31m[${error.plugin}] [${error.name}] ${error.fileName} : ${error.message}\x1B[39m`);
  } else {
    console.log(`\x1B[31m${error.toString()}\x1B[39m`);
  }
}