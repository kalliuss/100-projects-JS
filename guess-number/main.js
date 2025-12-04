const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin, // kullanıcıdan gelen veri
    output: process.stdout // ekrana yazılan veri
});

function ask() {

    rl.question("1 ile 100 arasında bir sayı tahmin edin: " , (guess) => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const userGuess = Number(guess);

        if(userGuess === randomNumber) {
            console.log(`Tebrikler! Doğru tahmin ettiniz: ${randomNumber}`);
            rl.close();
        } else {
            console.log(`Maalesef yanlış tahmin. Doğru sayı: ${randomNumber}. Tekrar deneyin.`);
            ask(); // tekrar sor
        }
        });
}

ask();