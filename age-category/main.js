// kullanıcı girişi almak adına npm paketini kullanıyoruz;
const prompt = require("prompt-sync")({ sigint: true });

//while çalışma bağlantısı
let running = true

// Kullanıcıdan yaşını istiyoruz
while(running){
    console.log("***** YAŞ KATEGORİLERİ *****")
    console.log("Yaşınız hangi kategoride öğrenmek istiyorsanız lütfen seçim yaparak ilerleyiniz.")
    console.log("1- Doğum tarihi üzerinden hesaplama")
    console.log("2- Direkt yaş girişi sağlayarak hesaplama")
    console.log("3- Çıkış")

    const choose = Number(prompt("Lütfen seçim yapınız: ").trim());

    switch(choose){
        case 1 : {
            const name = prompt("Lütfen isminizi giriniz: ");
            console.log(`Merhaba, ${name}!`);
            // tarih ve yıl almak
            const date = new Date();
            const yil = date.getFullYear();
            console.log(`Bulunduğumuz yıl: ${yil}`);


            let dtarih = prompt("Lütfen doğum tarihinizi giriniz: ")
            let age = yil - dtarih;
            console.log(`Yaşınız ${age}`)
            if (age <= 18){
                console.log("çocuk")
            }else if (age >= 19 && age <= 40) {
                console.log("genç")
            }else if (age >= 41 && age < 65 ) {
                console.log("yetişkin birey")
            }else if ( 65 <= age){
                console.log("yaşlı")
            }else{
                console.log("geçersiz yaş girimi")
            }
            break;
        }
        case 2 : {
            const name = prompt("Lütfen isminizi giriniz: ");
            console.log(`Merhaba, ${name}!`);
            const age = prompt("Lütfen yaşınızı giriniz: ");
            console.log(`Yaşınız ${age}`)
            if (age <= 18){
                console.log("çocuk")
            }else if (age >= 19 && age <= 40) {
                console.log("genç")
            }else if (age >= 41 && age < 65 ) {
                console.log("yetişkin birey")
            }else if ( 65 <= age){
                console.log("yaşlı")
            }else{
                console.log("geçersiz yaş girimi")
            }
            break;
        }
        case 3:
            console.log("Cikis yapiliyor...");
            running = false;
      break;
        default:
        console.log("Gecersiz secim. Lutfen 1-3 arasinda bir deger girin.\n");
  }
    
}

