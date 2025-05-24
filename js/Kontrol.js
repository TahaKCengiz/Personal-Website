const Kontrol = () => {
  React.useEffect(() => {
    var btn = document.getElementById("test");
    if (!btn) return;

    function kontrolEt() {
      var form = document.getElementById("form");
      var sonuc = document.getElementById("sonuc");
      var hata = "";

      var ad = form.ad.value.trim();
      var email = form.email.value.trim();
      var sifre = form.sifre.value;
      var mesaj = form.mesaj.value;
      var cinsiyet = form.querySelector('input[name="cinsiyet"]:checked');
      var ilgiler = form.querySelectorAll('input[name="ilgi"]:checked');
      var renk = form.renk.value;
      var dosya = form.dosya.files[0];

      if (!ad) {
        hata = "Ad eksik";
      } else if (!email.includes("@")) {
        hata = "E-posta hatalı";
      } else if (sifre.length < 6) {
        hata = "Şifre kısa";
      } else if (!mesaj || mesaj.length < 10) {
        hata = "Mesaj yeterli değil";
      } else if (!cinsiyet) {
        hata = "Cinsiyet seçilmeli";
      } else if (ilgiler.length < 1) {
        hata = "İlgi seçilmeli";
      } else if (!renk) {
        hata = "Renk girilmedi";
      } else if (!dosya) {
        hata = "Dosya yok";
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
