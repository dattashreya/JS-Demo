sum(display,1,2);
function sum(callback,x,y) {
    let r=x+y;
    console.log('sum',r);
    callback(r);
}
function display(r) {
    console.log('display',r) ;
}
// sum 3
// display 3
