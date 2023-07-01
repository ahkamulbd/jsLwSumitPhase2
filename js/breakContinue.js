// for (let i = 0; i < 20; i = i + 2) {
//     if (i === 10) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 0; i < 20; i++) {
    // if (i % 2 === 0) {
    //     continue;
    // }
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}