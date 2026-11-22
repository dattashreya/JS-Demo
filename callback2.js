outer();
function outer() {
    setTimeout(function() {
        console.log('outer')
    },1000);
    
}
inner()
function inner() {
    console.log('inner')
}


// using delay 1s
// inner
// outer
