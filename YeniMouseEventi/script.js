let kutu = document.getElementById("kutu");
let koordinatlar = document.querySelector(".koordinatlar");

// mouseover -> kutu üzerinde mouse ile gezindikçe sürekli tetiklenir
kutu.addEventListener("mouseover",() => {
    // kutu.innerHTML
    // kutu.innerText
    kutu.textContent = "Over Çalışıyor!!";
    kutu.style.backgroundColor = "red";
});
kutu.addEventListener("mouseout",() => {
    kutu.textContent = "Hover Ol veya Tıkla!";
    kutu.style.backgroundColor = "lightseagreen";
});

// 3.Yazı 'Üzerine Tıklandı!' olarak değişsin, arka plan rengi sarı olsun 
kutu.addEventListener("click", () => {
    kutu.textContent = "Tıklandı!";
    kutu.style.backgroundColor = "yellow";
});

kutu.addEventListener("mousemove", (e) => {
    // console.log(e);

    // Sayfa üzerindeki kordinatlar: 
    //     ClientX - ClientY
    // Etiket(Element) üzerindeki kordinatlar: 
    //     offsetX - offsetY

    let x = e.offsetX;
    let y = e.offsetY;

    koordinatlar.textContent = `Mouse kordinatlar: (x:${x}, y:${y})`;
});