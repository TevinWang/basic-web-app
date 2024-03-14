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
    if (values != null) {
      const numValues = [...values.map(Number)]
      numValues.forEach((value) => sum += value);
      return sum.toString();
    } else {
      return "0";
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const values = query.match(/\d+/g);
    var sum = 1;
    if (values != null) {
      const numValues = [...values.map(Number)]
      numValues.forEach((value) => sum *= value);
      return sum.toString();
    } else {
      return "0";
    }
  }

   if (query.toLowerCase().includes("minus")) {
    const values = query.match(/\d+/g);
    var sum = 1;
    if (values != null) {
      const numValues = [...values.map(Number)]
      sum = numValues[0] - numValues[1];
      return sum.toString();
    } else {
      return "0";
    }
  }

   if (query.toLowerCase().includes("primes")) {
    const values = query.match(/\d+/g);
    var sum = 1;
    if (values != null) {
      const numValues = [...values.map(Number)]
      numValues.forEach((value) => {
        const isPrime = true;
        if (value < 2) {
          return false;
        }

        for (let i = 2; i <= Math.sqrt(value); i++) {
          if (value % i === 0) {
              return false;
          }
        }

        if (isPrime) {
          sum = value;
        }
      });
      return sum.toString();
    } else {
      return "0";
    }
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const values = query.match(/\d+/g);
    var sum = 0;
    if (values != null) {
      const numValues = [...values.map(Number)]
      numValues.forEach((value) => {
         if (Number.isInteger(Math.sqrt(value)) && Number.isInteger(Math.cbrt(value))) {
           sum = value;
         }
      });
      return sum.toString();
    } else {
      return "0";
    }
  }


  if (query.toLowerCase().includes("following numbers is the largest")) {
    const values = query.match(/\d+/g);
    if (values != null) {
      return Math.max(...values.map(Number)).toString();
    } else {
      return "0";
    }
  }

  return "";
}
