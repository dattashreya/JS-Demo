const age = [1,2,3,5,7];
console.log('Age is: ',age);

const greaterAge = (age).map(grtArrayMethod);

function grtArrayMethod(age) {
    return age > 2;
}
console.log('greater than 2 (>2): ',greaterAge);
