const prompt = require("prompt-sync")({sigint: true});

const n = Number(prompt("Fibonacci dizisinin kaç terimini görmek istersiniz? "));

const fib = [];
function fibonacci(n){
    let a = 0;
    let b =1;

    for (let i= 0; i < n ; i++){
        fib.push(a); // mevcut sayıyı ekle
        const next = a + b; // yeni  sayı
        a = b; // bir ileri kay
        b = next; // sonraki sayıya geç
    }
}
fibonacci(n);
console.log(`${n} terimli Fibonacci dizisi: ${fib.join(", ")}`);