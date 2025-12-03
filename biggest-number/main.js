const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin, // kullanıcıdan gelen veri
    output: process.stdout // ekrana yazılan veri
});

// arrow function
// rl.question("Lütfen sayılar araında boşluk bırakarak bir dizi sayı gir: " , (number) => {
//     const numbers = number.split(' ').map(Number);
//     const biggestNumber = Math.max(...numbers);
//     console.log(`Girilen sayılar arasında en büyük sayı: ${biggestNumber}`);
//     rl.close();
// });

// normal fonksiyon mantığında
rl.question("Lütfen sayılar araında boşluk bırakarak bir dizi sayı gir: " , function(number) {
    const numbers = number.split(' ').map(Number);
    const biggestNumber = Math.max(...numbers);
    console.log(`Girilen sayılar arasında en büyük sayı: ${biggestNumber}`);
    rl.close();
});