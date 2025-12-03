const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Lütfen faktoriyelini hesaplamak istediğiniz sayıyı girin: ", function(number) {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
        console.log("Lütfen geçerli bir pozitif tam sayı girin.");
        rl.close();
        return;
    }
    let factorial = 1;  // 0 ın faktoriyeli 1 dir o yüzden 1 de başlatıyoruz
    for(let i = 2; i <= num; i++){
        factorial *= i;
    }
    console.log(`${num} sayısının faktoriyeli: ${factorial}`);
    rl.close();
});