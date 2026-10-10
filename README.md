<div align="center">

# ⭐ Der Stern von Afrika

**Der Brettspielklassiker als Browserspiel, mit echter Reliefkarte, Kamerafahrten, 3D-Würfel, Sound und viel Glitzer.**

### [▶ Jetzt spielen](https://schneipp.github.io/stern-von-afrika/)

2–5 Spieler · am selben Gerät oder gegen den Computer · keine Installation

<img src="docs/spielbrett.jpg" alt="Spielbrett: Reliefkarte von Nordafrika mit Städten, Wegen, Spielfiguren und Expeditionspult" width="100%">

</div>

## Worum geht's?

Irgendwo zwischen Tanger und Kapstadt liegt unter einem von 46 Plättchen der **Stern von Afrika**, der größte Diamant der Welt. Alle starten mit £ 300 in Kairo oder Tanger und reisen über Wüstenpisten, Seewege und Fluglinien durch den Kontinent. Unterwegs gibt es Rubine, Smaragde und Topase zu finden, und Räuber, die einem die Reisekasse leeren.

Wer den Stern findet, muss ihn heim nach Kairo oder Tanger bringen. Sobald er aber gefunden ist, kann ihn noch jeder schlagen, der ein **Hufeisen** besitzt und zuerst ankommt.

<table>
<tr>
<td width="50%"><img src="docs/stern.jpg" alt="Der Stern von Afrika wird aufgedeckt: großer Diamant mit Lichtstrahlen"></td>
<td width="50%"><img src="docs/raeuber.jpg" alt="Ein Räuber wird aufgedeckt: rote Lichtstrahlen, minus 200 Pfund"></td>
</tr>
<tr>
<td align="center"><sub>Fanfare, Konfetti, Funkenregen: der Stern ist gefunden</sub></td>
<td align="center"><sub>Pech gehabt: der Räuber nimmt alles mit</sub></td>
</tr>
</table>

## Das steckt drin

- 🗺️ **Echte Reliefkarte von Afrika** auf Basis von Natural Earth, farblich angepasst, mit 48 Städten und den echten Küstenlinien
- 🎥 **Kamera fährt mit:** zoomt nach dem Würfeln auf die Ziele, folgt der hüpfenden Figur und fährt beim Aufdecken nah ran. Selbst steuern geht mit Ziehen, Mausrad, zwei Fingern oder über die Minimap
- 🎲 **3D-Würfel**, der aufs Brett fällt und ausrollt
- 💎 **Große Funde:** jedes Plättchen dreht sich mitten im Bild um, mit Lichtstrahlen, Partikeln und hochzählendem Gewinn
- ✈️ **Flugzeug und Schiff:** Flüge als animierter Bogen mit Schatten, auf See sitzt die Figur im Boot
- 🔊 **Sound und Musik**, komplett im Browser erzeugt: Würfelklappern, Schritte, Schiffshorn, Fanfaren und Kalimba-Musik im Hintergrund
- 🤖 **Computergegner** für beliebig viele Plätze
- 💾 **Spielstand bleibt erhalten**, auch nach einem Neuladen

<img src="docs/seeweg.jpg" alt="Seewege von Tanger zu den Kanarischen Inseln, Fluglinie in Rot" width="100%">

## Regeln in Kürze

| | |
|---|---|
| **Start** | £ 300, wahlweise in Kairo oder Tanger |
| **Reisen** | Würfeln und genau so weit ziehen. Eine Stadt mit verdecktem Plättchen beendet den Zug. |
| **Kosten** | Landwege frei · Seewege £ 100 pro Zug · Flug £ 300 (von Städten mit rotem Ring) |
| **Aufdecken** | Sofort für £ 100, oder im nächsten Zug würfeln: bei 4, 5 oder 6 gratis |
| **Plättchen** | 1 Stern · 5 Hufeisen · 3 Räuber · 3 Rubine (£ 1000) · 4 Smaragde (£ 600) · 6 Topase (£ 300) · Rest leer |
| **Sieg** | Stern nach Kairo oder Tanger bringen, oder nach dem Fund mit einem Hufeisen zuerst dort sein |
| **Inselregel** | Wer pleite auf einer Insel festsitzt, fährt kostenlos mit dem Schiff weiter |

**Tastatur:** Leertaste oder Enter löst die Hauptaktion aus (Würfeln, Aufdecken …).

<div align="center"><img src="docs/sieg.jpg" alt="Siegerbildschirm mit Rangliste" width="70%"></div>

## Selbst starten

Kein Build, keine Abhängigkeiten, alles steckt in einer HTML-Datei.

```bash
git clone https://github.com/schneipp/stern-von-afrika.git
cd stern-von-afrika
xdg-open stern-von-afrika-v2.html   # macOS: open, Windows: start
```

| Datei | Inhalt |
|---|---|
| `stern-von-afrika-v2.html` | Das Spiel (aktuelle Version) |
| `stern-von-afrika-relief.jpg` | Die Reliefkarte, muss neben der HTML-Datei liegen |
| `stern-von-afrika.html` | Version 1 mit gezeichneter Karte, schlicht und schnell |
| `index.html` | Startseite für GitHub Pages, leitet auf v2 weiter |

## Hinweise

Eine Fan-Umsetzung von *Afrikan tähti* (Kari Mannerla, 1951). Städte, Wege und Plättchenverteilung sind an das Original angelehnt, aber frei gestaltet. Kein offizielles Produkt.

Kartendaten: [Natural Earth](https://www.naturalearthdata.com/), gemeinfrei. Schriften: Alfa Slab One, Archivo und Archivo Narrow über Google Fonts.
