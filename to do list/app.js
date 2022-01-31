// let choice;
// let list = [];
// let count = 0;
// let del;
// while (choice !== 'quit') {
//     choice = prompt("Enter choice :");
//     if (choice === "new") {
//         list[count] = prompt("enter your todo :");
//     }
//     else if (choice === 'list') {
//         for (i = 0; i < list.length; i++) {
//             console.log(`${i}: ${list[i]}`);
//         }
//     }
//     else if (choice === 'delete') {
//         del = prompt('enter your delete index');
//         list.splice(del, 1);
//     }
//     count++;
// }
// function lastElement(a) {
//     let len = a.length;
//     let c = a[len];
//     return c;
// }
// lastElement([3, 4, 4]);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16];
let filt = numbers.filter(n => (
    n < 10
));
filt;