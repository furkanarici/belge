const createPDF = require("../createPDF");
const fs = require("fs");
const { mersisAyristir } = require('../common')

const genelKurulTemp = fs.readFileSync("../template/genelKurulTemp.html", "utf8");
const dilekceTemp = fs.readFileSync("../template/itoDilekce.html", "utf8");
const yonetimKuruluTemp = fs.readFileSync("../template/yonetimKurulu.html", "utf8");
const hazirunCetveliTemp = fs.readFileSync("../template/hazirunCetveli.html", "utf8");

// const dilekce = require("../dilekce/index")

const data = {}

data.tarih = ""
data.kararNo = "2022/01"
data.yonetimKuruluKararNo = "2022/03"
data.yonetimKurulu = {}
data.yonetimKurulu.konu = "Temsil yetkisi verilmesi"
// if data.tarih null data.tarih current date string tr
if (!data.tarih) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    data.tarih = `${day}.${month}.${year}`;
}


const mersis = `Unvan
OMMETRICS BİLGİ TEKNOLOJİLERİ PAZARLAMA ANONİM ŞİRKETİKuruluş Tarihi
29-01-2020Firma Durumu
Aktif
Mersis No
0642082659100001Vergi Dairesi / No
KOZYATAĞI VERGİ DAİRESİ / 6420826591Ticaret Sicil No / Dosya No
232014-5
Firma Türü
TEK PAY SAHİPLİ ANONİM ŞİRKETTicaret Sicili Müdürlüğü
İSTANBUL TİCARET SİCİLİ MÜDÜRLÜĞÜŞehir
İSTANBUL
Toplam Sermaye
50000,00 TLFirma Adres Bilgisi
KÜÇÜKBAKKALKÖY MAH. ALİ AY SK. NO: 19 İÇ KAPI NO: 3 ATAŞEHİR / İSTANBULElektronik Tebligat Adresi
25919-75380-43749`

data.firma = mersisAyristir(mersis)

let kararTuru = "Ortaklar Kurulu Kararı"
if (data.firma.unvan.toLocaleLowerCase("tr").includes("anonim")) kararTuru = "Yönetim Kurulu Kararı"
data.kararTuru = kararTuru

data.firma.mersisTalepNo = "5845393"
data.firma.yetkili = "Fırat Berkan Bağcı"
data.firma.yetkiliGSM = "‭+90 (535) 446 14 14"

data.firma.sermaye = "50000,00 TL"
data.firma.sermayePay = "50"
data.toplantiBaskani = data.firma.yetkili

data.yillar = ["2020", "2021"]
data.yonetimKuruluSecimi = true
//  Yönetim Kurulu Başkanı
data.yeniYonetimKurulu = [
    {
        adSoyad: "Fırat Berkan Bağcı",
        tc: "20602007412",
        aders: "Suadiye Mah. Suadiye Camii Sok. No:36/14 Kadiköy İstanbul",
        gorev: "Yönetim Kurulu Başkanı",
        temsil: "Münferit",
    },
]

data.yonetimKuruluUyeler = data.yeniYonetimKurulu;
data.genelKurulUyeler = [
    {
        adSoyad: "Fırat Berkan Bağcı",
        tc: "20602007412",
        aders: "Suadiye Mah. Suadiye Camii Sok. No:36/14 Kadiköy İstanbul",
        uyruk: "T.C.",
        payToplamDeger: "50000,00 TL",
        payEdinmeTarihi: "29-01-2020",
        payEdinmeSekli: "Borsa Dışı",

    }
]

// huzur hakkı yoksa "0" yap
data.huzurHakki = "5.500,00 TL"

data.digerKararlar = []

data.icYonerge = true



createPDF({ data, title: "Tescil Talep Dilekçesi", template: dilekceTemp, fileName: "itoDilekçe" });
createPDF({ data, title: "Genel Kurul Toplantı Tutanağı", template: genelKurulTemp, fileName: "genelKurulTutanak" });
createPDF({ data, title: "Yönetim Kurulu Kararı", template: yonetimKuruluTemp, fileName: "yonetimKurulu", });
createPDF({ data, title: "Hazırun Cetveli", template: hazirunCetveliTemp, fileName: "hazirunCetveli", orientation: "landscape" });