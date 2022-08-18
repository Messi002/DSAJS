// let user = {
//     name: "kylie",
//     color: ['blue','red']

// }
// console.log(user);
// user.age=20;
// console.log(user);
// console.log(user.color[1]);


// class HashTable{
//     constructor(size){
//         this.data = new Array(size);
//     }

// _hash(key){
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//         hash = (hash + key.charCodeAt(i) * i)%
//         this.data.length        
//     }
//     return hash;
// }

// set(keys, value) {
//   let address = this._hash(keys);
//     if (!this.data[address]) {
//     this.data[address]=[];
//     }
//     this.data[address].push([keys, value]);
//     return this.data
// }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable._hash("grapes"));
// console.log(
// myHashTable.set('grapes',10000)
// );
// myHashTable.set('mangoes',400);
// myHashTable.set('apples',100);
// myHashTable.get('grapes');

const Array = [2,5,6,9,50,5]

function FirstCharacterRecursion(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i]===arr[j]) {
                return arr[i];
            }            
        }
        
    }
    return undefined;
}

function FirstCharacterRecursionV2(arr) {
    let map = {};

    for (let i = 0; i< arr.length; i++) {
            if (!map[arr[i]]) {
                map[arr[i]] =arr[i];
            } else {
                return map[arr[i]];
            }        
    }

    return undefined;    
}

console.log(FirstCharacterRecursionV2(Array));