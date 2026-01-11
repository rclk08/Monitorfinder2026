/**
 * MonitorFinder 2026 - Interaktive Logik (Lokale Bilder)
 */

function showProduct(type) {
    const resultBox = document.getElementById('recommendation');
    
    // Box sichtbar machen
    resultBox.style.display = 'block';
    
    let title, text, link, img;

    if (type === 'pro') {
        title = "High-End: ASUS ROG Swift OLED (PG27UCDM)";
        text = "Das Non-Plus-Ultra für E-Sport. Mit 240Hz, OLED-Panel und einer Reaktionszeit von 0.03ms hast du den ultimativen Vorteil in schnellen Shootern.";
        link = "https://amzn.to/49xJVdA"; 
        img = "pro.png"; // Deine Datei im Ordner
    } 
    else if (type === 'allrounder') {
        title = "Allrounder: LG UltraGear OLED (27GR95QE)";
        text = "Die perfekte Wahl für Story-Games und Grafik-Genuss. Dank OLED-Technologie erlebst du echtes Schwarz und extrem lebendige Farben.";
        link = "https://amzn.to/4aT0pzx"; 
        img = "allrounder.png"; // Deine Datei im Ordner
    } 
    else if (type === 'budget') {
        title = "Preis-Leistung: AOC Gaming (27G2SP)";
        text = "Unschlagbar günstig und trotzdem schnell. 165Hz und ein IPS-Panel bieten alles, was man für flüssiges Gaming braucht, ohne das Budget zu sprengen.";
        link = "https://amzn.to/4jCoCMD"; 
        img = "budget.png"; // Deine Datei im Ordner
    }

    // HTML in die Ergebnis-Box schreiben
    resultBox.innerHTML = `
        <div class="result-content">
            <img src="${img}" alt="${title}" style="max-width: 100%; height: auto; border-radius: 15px; margin-bottom: 20px;">
            <h2>${title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 25px; color: #94a3b8;">${text}</p>
            <a href="${link}" class="buy-btn" target="_blank" rel="nofollow">Verfügbarkeit auf Amazon prüfen*</a>
        </div>
    `;
    
    // Sanftes Scrollen zum Ergebnis
    resultBox.scrollIntoView({ behavior: "smooth" });
}
