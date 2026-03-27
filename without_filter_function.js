const arr = [
    {id: 1, name: 'pizza', price: 50},
    {id: 2, name: 'burger', price: 60},
    {id: 3, name: 'sandwitch', price: 150}
];
for(const i of arr) {
    if(i.price > 100) {
        console.log(i.name + " " + i.price);
    }
}
