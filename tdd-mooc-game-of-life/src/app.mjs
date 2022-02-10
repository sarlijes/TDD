import { gameOfLife } from "./gameOfLife.mjs";

function main() {
  const args = process.argv.slice(2);
  console.log(args);
  if (args.length === 0 || args.includes("help") || args.includes("man")) {
    console.log("Usage: give pattern name and iteration count as parameters");
    console.log("Example:");
    console.log("node app.mjs glider.rle 1");
  } else {
    const result = gameOfLife(args[0], args[1]);
    console.log(result);
  }

  // args["name"]; //joe

  console.log(args[0]);
}

main();