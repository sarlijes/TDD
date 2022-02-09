export function readFile(fileName) {

  let result = [];

  return result;

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

#C [0,1,0]
#C [0,0,1]
#C [1,1,1]
*/