const Kontrol = () => {
  React.useEffect(() => {
    var btn = document.getElementById("buton-test");
    if (!btn) return;

    function kontrolEt() {
      var form = document.getElementById("form");
      var sonuc = document.getElementById("sonuc");
      var hata = "";

      var ad = form.ad_.value.trim();
      var email = form.email_.value.trim();
      var sifre = form.sifre_.value;
      var mesaj = form.mesaj_.value;
      var cinsiyet = form.querySelector('input[name="cinsiyet"]:checked');
      var ilgiler = form.querySelectorAll('input[name="ilgi"]:checked');
      var dosya = form.dosya_.files[0];

      if (!ad) {
        hata = "Ad eksik!";
      } else if (!email.includes("@")) {
        hata = "Eposta hatalı!";
      } else if (sifre.length < 6) {
        hata = "Şifre kısa!";
      } else if (!mesaj || mesaj.length < 10) {
        hata = "Mesaj yeterli uzunlukta değil!";
      } else if (!cinsiyet) {
        hata = "Cinsiyet seçilmedi!";
      } else if (ilgiler.length < 1) {
        hata = "İlgi seçilmeli!";
      } else if (!dosya) {
        hata = "Dosya yok!";
      }

      if (hata) {
        sonuc.innerText = hata;
        sonuc.style.color = "red";
      } else {
        sonuc.innerText = "";
        alert("Form Doğru!");
      }
    }

    btn.addEventListener("click", kontrolEt);
  }, []);

  return null;
};

ReactDOM.createRoot(document.createElement("div")).render(React.createElement(Kontrol));
