// dizi ortalaması ve min max bulma olanı bulma

const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin, // kullanıcıdan gelen veri
    output: process.stdout // ekrana yazılan veri
});





rl.question("Lütfen sayılar arasında bir boşluk bırakarak dizi gir: (Bitince bitti yazmanı kafi); ", function(input) {
        
    const array = input.split(' ').map(Number);
    const biggestNumber = Math.max(...array);
    const smallestNumber = Math.min(...array);

    let toplam = 0;
    for (a of array){
        toplam = toplam + a;
    }
    const average = toplam / array.length;
    // yerine yazılabilir;
    // const reduce = array.reduce((acc, val) => acc + val, 0);


    console.log("=====Hesaplamalar=====")
    console.log("Max: " , biggestNumber);
    console.log("Min: " , smallestNumber);
    console.log("Ortalama: " , average);
    rl.close();
});
   



