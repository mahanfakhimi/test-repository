const userAges = [1, 55, 56, 18, 25, 36, 45, 48, 13, 18];

const sumAges = userAges.reduce((acc, age) => acc + age * 2, 0);

console.log(sumAges);
