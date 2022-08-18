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
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i)%
        this.data.length        
    }
    return hash;
}

set(keys, value) {
  let address = this._hash(keys);
    if (!this.data[address]) {
    this.data[address]=[];
    }
    this.data[address].push([keys, value]);
    return this.data
}
}

const myHashTable = new HashTable(50);
// console.log(myHashTable._hash("grapes"));
myHashTable.set('grapes',10000);
// myHashTable.set('mangoes',400);
// myHashTable.set('apples',100);
// myHashTable.get('grapes');