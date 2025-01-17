export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return ("Ryan2");
  }

  if (query.toLowerCase().includes("largest")) {
    const queryLen = query.length;
    const int1 = parseInt(query.substr(queryLen - 11, queryLen - 10));
    const int2 = parseInt(query.substr(queryLen - 7, queryLen - 6));
    const int3 = parseInt(query.substr(queryLen - 3, queryLen - 2));

    // const int1 = query.split(" ");
    // const int2 = query.split(" ");
    // const int3 = query.split(" ");

    return (Math.max(int1, int2, int3)).toString();
  }

  if (query.toLowerCase().includes("plus")) {
    const queryLen = query.length;
    const int1 = parseInt(query.substr(queryLen - 11, queryLen - 10));
    const int2 = parseInt(query.substr(queryLen - 3, queryLen - 2));
    return (int1+int2).toString();
  }

  if (query.toLowerCase().includes("cube")) {
    const numlist = query.split(" ");
    const returnArr:number[] = [];
    for (let i = 12; i < 18; i++) {
      if (Math.sqrt(parseInt(numlist[i])) % 1 === 0) {
        if (Math.cbrt(parseInt(numlist[i])) % 1 === 0) {
          returnArr.push();
        }
      }
    }
    return returnArr.toString();
  }

  if (query.toLowerCase().includes("multi")) {
    const numlist = query.split(" ");
    const int1 = parseInt(numlist[2]);
    const int2 = parseInt(numlist[5]);
    return (int1 * int2).toString();
  }

  if (query.toLowerCase().includes("minus")) {
    const numlist = query.split(" ");
    const int1 = parseInt(numlist[2]);
    const int2 = parseInt(numlist[4]);
    return (int1 - int2).toString();
  }

  return "";
}



