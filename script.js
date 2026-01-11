function showProduct(type) {
    const resultBox = document.getElementById('recommendation');
    resultBox.style.display = 'block';
    
    let title, text, link, img;

    if(type === 'pro') {
        title = "ASUS ROG Swift OLED PG27 (2026 Edition)";
        text = "Das Non-Plus-Ultra für Shooter-Spieler. Mit 4K Auflösung und 240Hz OLED-Panel hast du keine Ausreden mehr. Reaktionszeiten im Mikrosekunden-Bereich machen den Unterschied.";
        link = "#"; // HIER DEINEN AMAZON LINK EINTRAGEN
        img = "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600";
    } else if(type === 'allrounder') {
        title = "LG UltraGear 27'' OLED";
        text = "Unsere Empfehlung für Story-Gamer. Perfektes Schwarz, HDR in Perfektion und 144Hz+ sorgen für das immersivste Erlebnis, das man aktuell kaufen kann.";
        link = "#"; // HIER DEINEN AMAZON LINK EINTRAGEN
        img = "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600";
    } else {
        title = "AOC Gaming 27G-Serie";
        text = "Maximale Leistung für den schmalen Geldbeutel. 165Hz und ein IPS-Panel bieten alles, was man für kompetitives Gaming braucht, ohne die Miete zu opfern.";
        link = "#"; // HIER DEINEN AMAZON LINK EINTRAGEN
        img = "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=600";
    }

    resultBox.innerHTML = `
        <img src="${img}" alt="${title}">
        <h2>${title}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 30px;">${text}</p>
        <a href="${link}" class="buy-btn" target="_blank">Preis auf Amazon prüfen*</a>
    `;
    
    // Automatisch zum Ergebnis scrollen
    resultBox.scrollIntoView({behavior: "smooth"});
}
