// const nemo=["nemo"];
// const large = new Array(1000).fill("nemo")
// const everyone =["dory","bruce","marlin",'nemo','gill','bloat','nigle',
// 'squirt','darla','hank'];

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
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nestted loops
// O(2^n) Exponential- recursive algorithms that solve a problem of size 
// O(n!)- you are adding a loop for every element.

// What can cause time in a function?

// Operations()
// Comparisons
// Looping
// Outside function call (function())



//developer.mozilla.org/javascript
