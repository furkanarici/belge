
// Yazdırılacak Alan Ayarları
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

// word dosytası olarak indirme...
function exportHTML(belgeAdi) {
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title><style>body{font-size: 12px;font-family: Helvetica, sans-serif;}</style></head><body>";

    var footer = "</body></html>";
    var sourceHTML = header + document.getElementById(belgeAdi).innerHTML + footer;

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'ARICI_belge.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

function yaziyla(yazitl) {
    var sayi = yazitl.split(".");
    var sayisol = sayi[0];
    var sayisag = sayi[1];
    var i9;
    var i8;
    var i7;
    var i6;
    var i5;
    var i4;
    var i3;
    var i2;
    var i1;
    var r2;
    var r1;
    //DOKUZLAR
    if (sayisol.length == 9) {
        i = Math.floor(sayisol / 100000000);
        if (i == 1) { i9 = 'YÜZ' }
        if (i == 2) { i9 = 'IKIYÜZ' }
        if (i == 3) { i9 = 'ÜCYÜZ' }
        if (i == 4) { i9 = 'DÖRTYÜZ' }
        if (i == 5) { i9 = 'BEŞYÜZ' }
        if (i == 6) { i9 = 'ALTIYÜZ' }
        if (i == 7) { i9 = 'YEDIYÜZ' }
        if (i == 8) { i9 = 'SEKIZYÜZ' }
        if (i == 9) { i9 = 'DOKUZYÜZ' }
        if (i == 0) { i9 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i9 = '' }
    //SEKIZLER
    if (sayisol.length == 8) {
        i = Math.floor(sayisol / 10000000);
        if (i == 1) { i8 = 'ON' }
        if (i == 2) { i8 = 'YIRMI' }
        if (i == 3) { i8 = 'OTUZ' }
        if (i == 4) { i8 = 'KIRK' }
        if (i == 5) { i8 = 'ELLI' }
        if (i == 6) { i8 = 'ATMIŞ' }
        if (i == 7) { i8 = 'YETMIŞ' }
        if (i == 8) { i8 = 'SEKSEN' }
        if (i == 9) { i8 = 'DOKSAN' }
        if (i == 0) { i8 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i8 = '' }
    //YEDILER
    if (sayisol.length == 7) {
        i = Math.floor(sayisol / 1000000);
        if (i == 1) {
            if (i !== '') {
                i7 = 'BIRMILYON';
            } else { i7 = 'MILYON'; }
        }
        if (i == 2) { i7 = 'IKIMILYON' }
        if (i == 3) { i7 = 'ÜCMILYON' }
        if (i == 4) { i7 = 'DÖRTMILYON' }
        if (i == 5) { i7 = 'BEŞMILYON' }
        if (i == 6) { i7 = 'ALTIMILYON' }
        if (i == 7) { i7 = 'YEDIMILYON' }
        if (i == 8) { i7 = 'SEKIZMILYON' }
        if (i == 9) { i7 = 'DOKUZMILYON' }
        if (i == 0) {
            if (i7 !== '') { i7 = 'MILYON' }
            else { i7 = '' }
        }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i7 = '' }
    //ALTILAR
    if (sayisol.length == 6) {
        i = Math.floor(sayisol / 100000);
        if (i == 1) { i6 = 'YÜZ' }
        if (i == 2) { i6 = 'IKIYÜZ' }
        if (i == 3) { i6 = 'ÜCYÜZ' }
        if (i == 4) { i6 = 'DÖRTYÜZ' }
        if (i == 5) { i6 = 'BESYÜZ' }
        if (i == 6) { i6 = 'ALTIYÜZ' }
        if (i == 7) { i6 = 'YEDIYÜZ' }
        if (i == 8) { i6 = 'SEKIZYÜZ' }
        if (i == 9) { i6 = 'DOKUZYÜZ' }
        if (i == 0) { i6 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i6 = '' }
    //BEŞLER
    if (sayisol.length == 5) {
        i = Math.floor(sayisol / 10000);
        if (i == 1) { i5 = 'ON' }
        if (i == 2) { i5 = 'YIRMI' }
        if (i == 3) { i5 = 'OTUZ' }
        if (i == 4) { i5 = 'KIRK' }
        if (i == 5) { i5 = 'ELLI' }
        if (i == 6) { i5 = 'ATMIS' }
        if (i == 7) { i5 = 'YETMIS' }
        if (i == 8) { i5 = 'SEKSEN' }
        if (i == 9) { i5 = 'DOKSAN' }
        if (i == 0) { i5 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i5 = '' }
    //DÖRTLER
    if (sayisol.length == 4) {
        i = Math.floor(sayisol / 1000);
        if (i == 1) {
            if (i !== '') {
                i4 = 'BİRBİN';
            } else { i4 = 'BİN'; }
        }
        if (i == 2) { i4 = 'IKIBIN' }
        if (i == 3) { i4 = 'ÜCBIN' }
        if (i == 4) { i4 = 'DÖRTBIN' }
        if (i == 5) { i4 = 'BESBIN' }
        if (i == 6) { i4 = 'ALTIBIN' }
        if (i == 7) { i4 = 'YEDIBIN' }
        if (i == 8) { i4 = 'SEKIZBIN' }
        if (i == 9) { i4 = 'DOKUZBIN' }
        if (i == 0) {
            if (i4 !== '') { i4 = 'BIN' }
            else { i4 = '' }
        }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i4 = '' }
    //ÜCLER
    if (sayisol.length == 3) {
        i = Math.floor(sayisol / 100);
        if (i == 1) { i3 = 'YÜZ' }
        if (i == 2) { i3 = 'IKIYÜZ' }
        if (i == 3) { i3 = 'ÜCYÜZ' }
        if (i == 4) { i3 = 'DÖRTYÜZ' }
        if (i == 5) { i3 = 'BESYÜZ' }
        if (i == 6) { i3 = 'ALTIYÜZ' }
        if (i == 7) { i3 = 'YEDIYÜZ' }
        if (i == 8) { i3 = 'SEKIZYÜZ' }
        if (i == 9) { i3 = 'DOKUZYÜZ' }
        if (i == 0) { i3 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i3 = '' }
    //IKILERR
    if (sayisol.length == 2) {
        i = Math.floor(sayisol / 10);
        if (i == 1) { i2 = 'ON' }
        if (i == 2) { i2 = 'YIRMI' }
        if (i == 3) { i2 = 'OTUZ' }
        if (i == 4) { i2 = 'KIRK' }
        if (i == 5) { i2 = 'ELLI' }
        if (i == 6) { i2 = 'ATMIS' }
        if (i == 7) { i2 = 'YETMIS' }
        if (i == 8) { i2 = 'SEKSEN' }
        if (i == 9) { i2 = 'DOKSAN' }
        if (i == 0) { i2 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i2 = '' }
    //BIRLER
    if (sayisol.length == 1) {
        i = Math.floor(sayisol / 1);
        if (i == 1) { i1 = 'BIR' }
        if (i == 2) { i1 = 'IKI' }
        if (i == 3) { i1 = 'ÜC' }
        if (i == 4) { i1 = 'DÖRT' }
        if (i == 5) { i1 = 'BES' }
        if (i == 6) { i1 = 'ALTI' }
        if (i == 7) { i1 = 'YEDI' }
        if (i == 8) { i1 = 'SEKIZ' }
        if (i == 9) { i1 = 'DOKUZ' }
        if (i == 0) { i1 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i1 = '' }
    //SAĞ IKI
    if (sayisag !== undefined) {
        if (sayisag.length == 2) {
            i = Math.floor(sayisag / 10);
            if (i == 1) { r2 = 'ON' }
            if (i == 2) { r2 = 'YIRMI' }
            if (i == 3) { r2 = 'OTUZ' }
            if (i == 4) { r2 = 'KIRK' }
            if (i == 5) { r2 = 'ELLI' }
            if (i == 6) { r2 = 'ATMIS' }
            if (i == 7) { r2 = 'YETMIS' }
            if (i == 8) { r2 = 'SEKSEN' }
            if (i == 9) { r2 = 'DOKSAN' }
            if (i == 0) { r2 = '' }
            sayisag = sayisag.substr(1, sayisag - 1);
        }
        //SAĞ BIR
        if (sayisag.length == 1) {
            i = Math.floor(sayisag / 1);
            if (i == 1) { r1 = 'BIR' }
            if (i == 2) { r1 = 'IKI' }
            if (i == 3) { r1 = 'ÜC' }
            if (i == 4) { r1 = 'DÖRT' }
            if (i == 1) { r1 = 'BES' }
            if (i == 6) { r1 = 'ALTI' }
            if (i == 7) { r1 = 'YEDI' }
            if (i == 8) { r1 = 'SEKIZ' }
            if (i == 9) { r1 = 'DOKUZ' }
            if (i == 0) { r1 = '' }
            sayisag = sayisag.substr(1, sayisag - 1);
        }
    } else { r2 = ''; r1 = 'SIFIR'; }
    return i9 + i8 + i7 + i6 + i5 + i4 + i3 + i2 + i1 + ' TÜRKLIRASI ' + r2 + r1 + ' KURUS';
};
// Para Formatı Çevirme
function formatMoney(n) {
    return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').replace(/\.(\d+)$/, ',$1');
}

const parca = (metin, ilkKelime, sonKelime) => {
    let ilk = metin.search(ilkKelime);
    ilk += ilkKelime.length;
    let son = metin.search(sonKelime);
    let parca = metin.slice(ilk, son);
    return parca;
  };

const mersisAyristir = (mersisText) => {
    let unvan = parca(mersisText, "Unvan", "Kuruluş Tarihi").trim();
    let kurulusT = parca(mersisText, "Kuruluş Tarihi", "Firma Durumu").trim();
    let mersisNo = parca(mersisText, "Mersis No", "Vergi Dairesi").trim();
    let vergiDairesi = parca(mersisText, "Vergi Dairesi / No", "VERGİ DAİRESİ").trim();
    let vergiNo = parca(mersisText, "DAİRESİ /", "Ticaret Sicil No").trim();
    let sicilNo = parca(mersisText, "Dosya No", "Firma Türü").trim();
    let sicilMudurlugu = parca(mersisText, "Müdürlüğü", "Şehir").trim();
    let adres = parca(mersisText, "Adres Bilgisi", "Elektronik Tebligat Adresi").trim();
    return {
        unvan: unvan,
        kurulusT: kurulusT,
        mersisNo: mersisNo,
        vergiDairesi: vergiDairesi,
        vergiNo: vergiNo,
        sicilNo: sicilNo,
        sicilMudurlugu: sicilMudurlugu,
        adres: adres
    }
}

module.exports = { mersisAyristir }