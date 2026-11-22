// closure

// inner function has access to the variable of outer function
// makes encapsulation easy , used in angular vue react

function outer() {
    let c=0;
    function inner() {
        c++;
        console.log('c: ',c);
    }
    inner();
    inner();
}
outer();
// output c: 1
// output c: 2
