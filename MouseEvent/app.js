let box = document.getElementById("kutucuk");
// Yontem-1:ID'si sonuç olanı al!
// let sonuc = document.getElementById("sonuc");
// Yontem-2:
let sonuc = document.querySelector("#sonuc");

// İşlem-1: Farenin Kutuya Girme İşlemi
box.addEventListener("mouseenter",() => {
    // Konsol Ekranında Kodun Çalışıp Çalışmadığını Denemek:
    // console.log("Deneme: Çalıştı mı?");

    // sonuc.innerText
    // sonuc.textContent
    sonuc.innerHTML = `<strong>Fare Kutuya Girdi!</strong>`;
});

// İşlem-2: Farenin Kutudan Çıkma İşlemi
box.addEventListener("mouseout",() => {
    sonuc.innerHTML = `<strong>Fare Kutudan Çıktı!</strong>`;
});

// İşlem-3: Farenin Kutu Sol Click Yapma İşlemi
box.addEventListener("click",() => {
    sonuc.innerHTML = `<strong>Fare ile Kutuya Sol Click Yapıldı!</strong>`;
});

// İşlem-4: Fare ile Kutuya Sağ Click yapıldığı zaman ekranda Sağ Click Yapıldı ama Varsayılan OLarak gelen menu gösterilmesin
box.addEventListener("contextmenu", (e) => {
    // Menunun cıkma durumu == Varsayılan
    // O zaman bizim varsayılan durumu engellememiz lazım
    // Varsayılan durumu engellemek için:
    e.preventDefault();

    sonuc.innerHTML = `<strong>Fare ile Kutuya Sağ Click Yapıldı</strong>`;
});