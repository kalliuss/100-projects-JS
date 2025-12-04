const date = new Date();
console.log(date.toString());


const day = String(date.getDate()).padStart(2, '0');  // padstart - toplam uzunluk 2 olsun 0 ile başlasın 
const month = String(date.getMonth() + 1).padStart(2, '0'); // 0 dan başlıyor
const year = date.getFullYear();
const hours = String(date.getHours()).padStart(2, '0');   // 24 saat formatı
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
console.log(formattedDate);

switch(month){
    case '01':
        console.log("Ocak ayındasınız.");
        break;
    case '02':
        console.log("Şubat ayındasınız.");
        break;
    case '03':
        console.log("Mart ayındasınız.");
        break;
    default:
        console.log("Diğer aydasınız.");
}

const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
console.log("Bugün günlerden: " + days[date.getDay()]);

