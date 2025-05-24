document.getElementById("gonder_").addEventListener("click", function () {
  let hataMesaji = "";

  const ad = document.getElementById("ad").value;
  const email = document.getElementById("email").value;
  const sifre = document.getElementById("sifre").value;
  const mesaj = document.getElementById("mesaj").value;
  const cinsiyetler = document.querySelectorAll('input[name="cinsiyet"]:checked');
  const ilgiler = document.querySelectorAll('input[name="ilgi"]:checked');
  const renk = document.getElementById("renk").value;
  const dosya = document.getElementById("dosya").files[0];

  if (ad == "") hataMesaji += "Ad boş olamaz<br>";
  if (email == "" || !/^\S+@\S+\.\S+$/.test(email)) hataMesaji += "Geçerli bir e-posta girin <br>";
  if (sifre.length < 6) hataMesaji += "Şifre en az 6 karakter olmalı <br>";
  if (mesaj.length < 15) hataMesaji += "Mesaj en az 15 karakter olmalı <br>";
  if (cinsiyetler.length == 0) hataMesaji += "insiyet seçilmeli<br>";
  if (ilgiler.length == 0) hataMesaji += "En az bir ilgi alanı seçilmeli <br>";
  if (!renk) hataMesaji += "Renk seçilmeli<br>";
  if (!dosya) {
    hataMesaji += "- Dosya seçilmeli<br>";
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