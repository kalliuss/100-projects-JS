// main.js  (UTF-8)
// Basit Hesap Makinesi – Node.js (prompt-sync ile)

const prompt = require("prompt-sync")({ sigint: true });

let running = true;

while (running) {
  console.log("******** Calculator ********");
  console.log("Lutfen yapmak istediginiz islemi seciniz:");
  console.log("1. Toplama");
  console.log("2. Cikarma");
  console.log("3. Carpma");
  console.log("4. Bolme");
  console.log("5. Cikis");

  const choose = prompt("Seciminiz (1-5): ").trim();

  const readNumber = (msg) => {
    const val = Number(prompt(msg).trim().replace(",", "."));
    if (Number.isNaN(val)) {
      console.log("Gecersiz sayi girdiniz. Tekrar deneyin.\n");
      return null;
    }
    return val;
  };

  switch (choose) {
    case "1": {
      const a = readNumber("Birinci sayiyi giriniz: ");
      if (a === null) break;
      const b = readNumber("Ikinci sayiyi giriniz: ");
      if (b === null) break;
      console.log(`Sonuc: ${a} + ${b} = ${a + b}\n`);
      break;
    }
    case "2": {
      const a = readNumber("Birinci sayiyi giriniz: ");
      if (a === null) break;
      const b = readNumber("Ikinci sayiyi giriniz: ");
      if (b === null) break;
      console.log(`Sonuc: ${a} - ${b} = ${a - b}\n`);
      break;
    }
    case "3": {
      const a = readNumber("Birinci sayiyi giriniz: ");
      if (a === null) break;
      const b = readNumber("Ikinci sayiyi giriniz: ");
      if (b === null) break;
      console.log(`Sonuc: ${a} * ${b} = ${a * b}\n`);
      break;
    }
    case "4": {
      const a = readNumber("Birinci sayiyi giriniz: ");
      if (a === null) break;
      const b = readNumber("Ikinci sayiyi giriniz: ");
      if (b === null) break;
      if (b === 0) {
        console.log("Hata: Bir sayi sifira bolunemez.\n");
      } else {
        console.log(`Sonuc: ${a} / ${b} = ${a / b}\n`);
      }
      break;
    }
    case "5":
      console.log("Cikis yapiliyor...");
      running = false;
      break;
    default:
      console.log("Gecersiz secim. Lutfen 1-5 arasinda bir deger girin.\n");
  }
}
