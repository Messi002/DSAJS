// const nemo=["nemo"];
// const large = new Array(1000).fill("nemo")
const everyone =["dory","bruce","marlin",'nemo','gill','bloat','nigle',
'squirt','darla','hank'];

// function findNemo(array) {
//     let t0= performance.now();
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]=== "nemo") {
//             console.log("found Nemo!");
//         }       
//     }
//     let t1= performance.now();
//     console.log("Call to find took " + (t1-t0)+ "milliseconds");

// }

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log("running...");
//         if(array[i]=== "nemo") {
//             console.log("found Nemo!");
//         }       
//     }
// }

// findNemo(everyone);

// function findNemo(array) {
//         for (let i = 0; i < array.length; i++) {
//             if(array[i]=== "nemo") {
//                 console.log("found Nemo!");
//             }       
//         }
   
    
//     }
    
//     findNemo(large);

//O(1) constant time
//O(n) linear time

// boxes =[0,1,2,3,4,5,6]

// function logFirstTwoBoxes(boxes) {
    // console.log(boxes[0]); //O(1)
    // console.log(boxes[1]); //O(1) Constant time 

// }

// logFirstTwoBoxes(boxes);

//Big O Rule...
//Rule 1:worst case
//Rule 2: remove constatns
//Rule 3: different terms for input
//Rule 4: drop non dominants terms

//O(n^2)  Quadratic Time

// O(1) Constant no loops
// O(log N) logarithmic usually searching alogrithms have log(n) if they are sorted (binary search) (not on hash maps though)
// O(n) Linear = for loops while loops
// O(n*log(n)) log linear = sorting operations usually
// O(n^2) Quadratic- every element in a collection needs to be compared to every other element. Two nested loops
// O(2^n) Exponential- recursive algorithms that solve a problem of size 
// O(n!)- you are adding a loop for every element.

// What can cause time in a function?

// Operations()
// Comparisons
// Looping
// Outside function call (function())



//developer.mozilla.org/javascript

//Data structures are ways of storing data and algorithms are functions or ways to use DS to write 
//our prograrm

// function booo(n) {
//     for (let i = 0; i < n.length; i++) {
// console.log("booo!");        
//     }
    
// }

// function arrayofHi(n) {
//     let hiArray = [];
//     for (let i = 0; i < n; i++) {
//         hiArray[i] = 'hi'        
//     }
// return hiArray;
// }

// console.log(arrayofHi(9));


//forEach doesn't uses index of the array but a variable 
// const findNemo2 = array => {
//    let t0= performance.now()
//     array.forEach(fish =>{
//         if(fish == "nemo"){
//             console.log("found Nemo");
//         }
//     })
//     let t1= performance.now();
//  console.log(`It took ${t1-t0}`);
// }

// findNemo2(everyone);

//Similar to forIn in dart 
// const findNemo3 = array => {
//     for(let fish of array){
//         if(fish == "nemo"){
//             console.log("found Nemo");
//         }
//     }
// }
// findNemo3(everyone);


const array1 =["a","b","y","d"];
const array2 = ["w","x","m","z","r","t"];


function CommonItems(arr1, arr2) {
    //loop through first array and create object 
    //where properties === items in the array
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            // const item = arr1[i];
            map[arr1[i]] = "yam ";
        }   
          
    }
    console.log(map);  
    //loop through second array and check if item 
    //in second array exists on created object.

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }        
    }

    return false;
}

console.log(CommonItems(array1,array2));