<?php

    $mail = $_POST['email_'];
    $sifre = $_POST['sifre_'];
    
    if($mail == "b241210086@sakarya.edu.tr" && $sifre == "b241210086"){
        readfile("GirisEksik.html");
        echo "
            <div class='container-md text-center shadow'>
                <div class='row text-center'>
                    <h3 class='Rubik' style='width:400px; margin-left: auto; margin-right: auto;'> Hoşgeldin $sifre </h3>
                </div>
            </div>
            <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js' integrity='sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO' crossorigin='anonymous'></script>
        </body>


        </html>";
    }else{
        readfile("GirisEksik.html");
        echo "
            <div class='container-md text-center shadow'>
                <div class='row text-center'>
                    <h3 class='Rubik' style='width:400px; margin-left: auto; margin-right: auto;'> Yanlış kullanıcı adı veya şifre! </h3>
                </div>
            </div>
            <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js' integrity='sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO' crossorigin='anonymous'></script>
        </body>


        </html>";
    }
?>