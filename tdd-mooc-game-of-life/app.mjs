import { gameOfLife } from "./src/gameOfLife.mjs";

function main() {

  // eslint-disable-next-line no-undef
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("help") || args.includes("man")) {

    console.log("Usage: give pattern name and iteration count as parameters");
    console.log("Example:");
    console.log("node app.mjs glider.rle 1");

  } else {

    console.log("The result is:");
    console.log("-----------------------------");
    gameOfLife(args[0], args[1])
      .then((result) =>  console.log(result,
        "\n-----------------------------"));
  }

}

main();