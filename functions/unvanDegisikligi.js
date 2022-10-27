const createPDF = require("../createPDF");
const fs = require("fs");
const { mersisAyristir } = require('../common')

const dilekceTemp = fs.readFileSync("../template/itoDilekce.html", "utf8");
const unvanDegisikligiTemp = fs.readFileSync("../template/unvanDegisikligi.html", "utf8");
const sgkDilekceTemp = fs.readFileSync("../template/unvanDegisikligiSGKDilekce.html", "utf8");

// const dilekce = require("../dilekce/index")

const data = {}

data.tarih = ""
data.kararNo = "2022/01"
data.konu = "Adres Değişikliği"

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


data.yeniUnvan = "zombi kombi limiteed şirketi"


data.sgkMudurluk = "İstanbul SGK Müdürlüğü"
data.sgkSicilNo = "123456789"

data.firma = mersisAyristir(mersis)
data.firma.mersisTalepNo = "5845393"
data.firma.yetkili = "Fırat Berkan Bağcı"
data.firma.yetkiliGSM = "‭+90 (535) 446 14 14"

data.toplantiBaskani = data.firma.yetkili


let kararTuru = "Ortaklar Kurulu Kararı"
if (data.firma.unvan.toLocaleLowerCase("tr").includes("anonim")) kararTuru = "Yönetim Kurulu Kararı"
data.kararTuru = kararTuru

data.yillar = ["2020", "2021"]
data.yonetimKuruluSecimi = true


data.toplantiyaKatilanlar = [
    {
        adSoyad: "Fırat Berkan Bağcı",
        tc: "20602007412",
    }
]





createPDF({ data, title: "Tescil Talep Dilekçesi", template: dilekceTemp, fileName: "itoDilekçe" });
createPDF({ data, title: kararTuru, template: unvanDegisikligiTemp, fileName: "unvanDegisikligiKarar" });
createPDF({ data, title: "SGK Dilekçesi", template: sgkDilekceTemp, fileName: "unvanDegisikligiSgkDilekce" });
