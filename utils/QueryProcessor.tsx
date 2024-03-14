export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "My andrew id is tevinw."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "rq"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const values = query.match(/\d+/g);
    var sum = 0;
    for (const value : values.map(Number)) {
      sum += value;
    }
    return sum.toString();
  }

  if (query.toLowerCase().includes("following numbers is the largest")) {
    const values = query.match(/\d+/g);
    return Math.max(...values.map(Number)).toString();
  }

  return "";
}
