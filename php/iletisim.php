<?php
echo "Gönderilen Mesaj";
echo "Adınız: " . ($_POST["ad"]) . "<br>";
echo "E-posta: " . ($_POST["email"]) ."<br>";
echo "Şifre: " . ($_POST["sifre"]) . "<br>";
echo "Mesaj: " . ($_POST["mesaj"]) .  "<br>";
echo "Cinsiyet: " . ($_POST["cinsiyet"]) . "<br>";
$ilgiler = is_array($_POST["ilgi"]) ? $_POST["ilgi"] : [$_POST["ilgi"]];
echo "İlgi Alanları: " . implode(", ", $ilgiler) . "<br>";
echo "Renk: " . ($_POST["renk"]) . "<br>";
echo "Dosya seçildi.<br>";
?>
