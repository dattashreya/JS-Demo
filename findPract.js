const ageName = [25,26,27];
console.log("Details : ", ageName);

const grtArr = (ageName).find(greatArrMethod)

function greatArrMethod(age) {
  return age > 25;
}

console.log('>25 : ',grtArr);