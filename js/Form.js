document.getElementById("buton-gonder").addEventListener("click", function () {
  event.preventDefault();

  let hataMesaji = "";

  const ad = document.getElementById("ad_").value;
  const email = document.getElementById("email_").value;
  const sifre = document.getElementById("sifre_").value;
  const mesaj = document.getElementById("mesaj_").value;
  const cinsiyetler = document.querySelectorAll('input[name="cinsiyet"]:checked');
  const ilgiler = document.querySelectorAll('input[name="ilgi"]:checked');
  const renk = document.getElementById("renk_").value;
  const dosya = document.getElementById("dosya_").files[0];

  if (ad == "") hataMesaji += "Ad boş olamaz<br>";
  if (email == "" || !/^\S+@\S+\.\S+$/.test(email)) hataMesaji += "Geçerli bir e-posta girin <br>";
  if (sifre.length < 6) hataMesaji += "Şifre en az 6 karakter olmalıdır <br>";
  if (mesaj.length < 15) hataMesaji += "Mesaj en az 15 karakter olmalıdır <br>";
  if (cinsiyetler.length == 0) hataMesaji += "insiyet seçilmelidir<br>";
  if (ilgiler.length == 0) hataMesaji += "En az bir ilgi alanı seçilmelidir <br>";
  if (!renk) hataMesaji += "Renk seçilmelidir<br>";
  if (!dosya) {
    hataMesaji += "- Dosya seçilmelidir<br>";
  } else {
    const kabul = ["image/png", "image/jpeg", "image/gif"];
    if (!kabul.includes(dosya.type)) {
      hataMesaji += "Sadece PNG, JPEG veya GIF dosyası kabul edilir<br>";
    }
  }
  
  const sonuc = document.getElementById("sonuc");

  if (hataMesaji !== "") {
    sonuc.innerHTML = hataMesaji.split("<br>")[0];
    sonuc.style.color = "red";
  } else{
    sonuc.innerHTML = "";
    document.getElementById("form").submit();
  }
});

document.getElementById("form").addEventListener("reset", function () {
    document.getElementById("sonuc").innerHTML = "";
});