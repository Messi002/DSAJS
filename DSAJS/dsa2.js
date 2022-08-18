// let user = {
//     name: "kylie",
//     color: ['blue','red']

// }
// console.log(user);
// user.age=20;
// console.log(user);
// console.log(user.color[1]);


class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

_hash(key){
    let hash = 0;
    for (let i = 0; i < array.length; i++) {
        hash = (hash + key.charCodeAt(i) * i)%
        this.data.length        
    }
    return hash;
}
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash("grapes"));
myHashTable.set('grapes',10000);
myHashTable.get('grapes');