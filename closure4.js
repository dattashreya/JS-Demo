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
    console.log('inner.....',inner());
}
outer();
outer();

// c:  1
// c:  2
// inner..... undefined
// c:  1
// c:  2
// inner..... undefined
