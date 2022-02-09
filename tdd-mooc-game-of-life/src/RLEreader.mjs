import fs from "fs";

export function readFile(fileName) {
  // Read the file
  fs.readFile(".\\patterns\\" + fileName, "utf8" , (err, data) => {
    if (err) console.log(err);

    let result = [];

    const fileRows = data.split("\n");

    let x, y;
    let sizeRow; // is this needed?
    let rleRow;

    for (let i = 0; i <= fileRows.length; i++) {
      const row = fileRows[i];
      if (row.startsWith("x")) {
        sizeRow = row;
        // Find the actual RLE from it (ends with !)
        rleRow = fileRows[i + 1].trim().replace("!", "");
        break;
      }
    }

    const rleSplitted = rleRow.split("$");

    // Decode

    const decoded = [] ; // array of strings

    // Convert the chars to integers: b -> 0, o -> 1
    for (let i = 0; i < rleSplitted.length; i++) {
      let s = rleSplitted[i];
      s = decode(s);
      s = s.replace(/b/g, 0);
      s = s.replace (/o/g, 1);
      decoded.push(s);
    }
    // Place the integers into 2-dimensional array (result)
    for (let i = 0; i < decoded.length; i++) {
      result.push(Array.from(decoded[i]));

    }
    return result;
  });
  return [];
}

// Helper functions by DeepBSD - source: https://bit.ly/3rE2kRk
export const decode = (text) => {
  return text.replace(/(\d+)([ \w])/g, (_, count, chr) => chr.repeat(count));
};

// Helper functions by DeepBSD - source: https://bit.ly/3rE2kRk
export const encode = (text) => {
  return text.replace(/([ \w])\1+/g, (group, chr) => group.length + chr );
};


/*
#N Glider
#O Richard K. Guy
#C The smallest, most common, ..
#C www.conwaylife.com/wiki/index.php?title=Glider
x = 3, y = 3, rule = B3/S23
bob$2bo$3o!

#C [b,o,b]
#C [b,b,o]
#C [o,o,o]

#C [0,1,0]
#C [0,0,1]
#C [1,1,1]
*/