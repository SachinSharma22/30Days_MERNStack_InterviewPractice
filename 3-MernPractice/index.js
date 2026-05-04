// const abc = {};
// abc.key = "rasra";
// const abc3 = {...abc};
// abc3.key = "sss";

// console.log(abc.key);

const arr = [15,20, 35, 60, 30];
let target = 125;

function targetSum(arr, target) {
    let start = 0;
    let end = 2;
    for(let i = 0; i < arr.length-2; i++) {
        for(let j = start; j<end; j++) {
            let sum = arr[j] + arr[j+1] + arr[j+3]
        }
    }
}