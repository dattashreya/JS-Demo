outer(mid());
function outer() {
    console.log('outer')   
    callback() ;
}
function mid() {
    console.log('mid')
}
function inner() {
    console.log('inner')
}
