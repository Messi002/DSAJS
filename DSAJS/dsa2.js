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

// const Array = [2,5,2,5,10,6,9,50,5]

// function FirstCharacterRecursion(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i]===arr[j]) {
//                 return arr[i];
//             }            
//         }
        
//     }
//     return undefined;
// }

// function FirstCharacterRecursionV2(arr) {
//     let map = {};

//     for (let i = 0; i< arr.length; i++) {
//             if (!map[arr[i]]) {
//                 map[arr[i]] =arr[i];
//             } else {
//                 return map[arr[i]];
//             }        
//     }

//     return undefined;    
// }

// console.log(FirstCharacterRecursionV2(Array));

//LinkedList


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value)
    {
        this.head= {
            value : value,
            next: null
        },
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(6)
myLinkedList.append(56)
// myLinkedList.prepend(1)
console.log(myLinkedList.printList());

// console.log(myLinkedList);


