const arr = [10, 20, 30, 40, 50];

let i = arr.length - 1;
// while (i < arr.length) {
//     let index = arr[i];
//     console.log(i, index);
//     i++;
// }

while (i >= 0) {
    let index = arr[i];
    console.log(i, index);
    i--;
}