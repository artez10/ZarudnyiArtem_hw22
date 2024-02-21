// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const length = +prompt('Enter the Number of Array Elements:');
let storageArr = []; 

for (let i = 0; i < length; i++) {
    const arrElements = prompt('What is your Element?');
    storageArr.push(arrElements);
}
console.log(storageArr); 

storageArr.sort((a,b) => a - b);
console.log('Array after sorting ', storageArr);

storageArr.splice(1,3);
console.log('Array after deleting Elements from 2 till 4', storageArr);