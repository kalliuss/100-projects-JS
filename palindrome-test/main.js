const prompt = require('prompt-sync')({sigint: true});


let running = true;

while(running) {
    const input = prompt("Bir kelime veya cümle giriniz: ");

    function isPalindrome(input){
        const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversed = cleaned.split('').reverse().join('');
        if (cleaned === reversed) {
            console.log(`"${input}" bir palindromdur.`);
            running = false;
        } else {
            console.log(`"${input}" bir palindrom değildir. Lütfen tekrar deneyiniz.`);
            console.log("Örnek \"kayak\" kelimesi bir palindromdur.");
        }
    }
    isPalindrome(input);
}

