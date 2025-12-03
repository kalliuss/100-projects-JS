const prompt = require("prompt-sync")({sigint: true});

let running = true;

while (running) {

    const password = prompt("Lütfen bir paralo oluşturunuz: ");


    function passwordCheck(password){
        const minLength = password.length >= 8;
        const hasUpper = /[A-Z]/.test(password);
        // en az 1 büyük harf var mı bak.
        const hasLower = /[a-z]/.test(password);
        // en az 1 küçük harf var mı bak
        const hasNumber = /[0-9]/.test(password);
        // en az bir rakam var mı bak
        const hasSymbol = /[!@#$%^&*]/.test(password);
        // sembol var mı bak

        if(minLength && hasUpper && hasLower && hasNumber && hasSymbol) {
            const confirmation = prompt(`${password} olarak kabul edilecektir, onaylıyor musunuz ? (Evet / Hayır) `).toLowerCase();
            if (confirmation === "evet") {
                console.log("Parolanız geçerli.");
                running = false;
            } else {
                console.log("Parola oluşturma işlemi iptal edildi.");
            }
        } else if (!minLength) {
            console.log("Parola en az 8 karakter uzunluğunda olmalıdır.");
        } else if (!hasUpper) {
            console.log("Parola en az bir büyük harf içermelidir.");
        } else if (!hasLower) {
            console.log("Parola en az bir küçük harf içermelidir.");
        } else if (!hasNumber) {
            console.log("Parola en az bir rakam içermelidir.");
        } else if (!hasSymbol) {
            console.log("Parola en az bir sembol içermelidir.");
        }

    }

    passwordCheck(password);
}
