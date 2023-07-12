const { log } = require("console");
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }

  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
    }

    const second = result;

    log(first, second);

    writeFile(
      "./content/result-async.text",
      `Here is the result: ${first} , ${second}`,
      (err, result) => {
        if (err) {
          log(err);
        }
      }
    );
  });
});
