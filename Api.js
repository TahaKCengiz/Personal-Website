fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=5')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("Oyunlar");
        data.forEach(game => {
          const html = `
            <div class="ogeler col-3 shadow mb-1 rounded p-2" style="color:rgb(221, 221, 221); background-color: #f7f7f7;">
                <a href="https://store.steampowered.com/app/${game.steamAppID}" class="link" rel={noopener noreferrer} target="_blank">
                    <img src="${game.thumb} " alt="${game.title}" style="color: rgb(255, 255, 255);" width="100">
                </a>
                <h3>${game.title}</h3>
                <p><strong style="color: rgb(255, 255, 255);">Fiyat:</strong> $${game.salePrice}</p>
                <p><strong style="color: rgb(255, 255, 255);">Steam Yorumu:</strong> ${game.steamRatingText || 'Yok'}</p>
            </div>
          `;
          container.innerHTML += html;
        });
      })
      .catch(err => {
        console.error("Veri alınamadı :", err);
        document.getElementById("Oyunlar").innerText = "Hata oluştu!";
});