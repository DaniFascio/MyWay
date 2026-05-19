# MyWay Tennis Academy — Sito Web

Sito istituzionale di **MyWay Tennis Academy**, accademia di tennis con sede a Montesilvano (PE). Progettato con un approccio mobile-first, senza framework o dipendenze esterne.

---

## Stack

- **HTML5** semantico
- **CSS3** puro (variabili CSS, Grid, Flexbox, animazioni)
- **JavaScript** vanilla
- Font: [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google Fonts

---

## Struttura del progetto

```
myway/
├── index.html          # Pagina principale
├── css/
│   └── style.css       # Foglio di stile completo
├── js/
│   └── main.js         # Script (navbar, form, animazioni)
└── assets/
    ├── myway logo.png
    ├── myway logo positivo.png
    ├── myway logo negativo.png
    ├── photo-coaches.jpg
    ├── photo-court-girls.jpg
    └── photo-indoor-court.jpg
```

---

## Sezioni del sito

| Sezione | Descrizione |
|---|---|
| Hero | Intestazione con CTA |
| Chi Siamo | Storia e statistiche dell'accademia |
| Programmi | Full Time, Part Time, Stage Intensivi |
| La Nostra Accademia | Gallery a puzzle con foto |
| Staff | Schede dei coach |
| Struttura | Campi, palestra, sala video, recovery |
| Contatti | Form di contatto + info dirette |

---

## Sviluppo locale

Non sono necessari build tool. Basta servire la cartella con qualsiasi server HTTP statico:

```bash
# Python
python3 -m http.server 3000

# Node (con npx)
npx serve .
```

Poi apri `http://localhost:3000` nel browser.

---

## Pagina Work in Progress

Il sito è attualmente in modalità **WIP**: `index.html` mostra una landing page temporanea mentre il vecchio contenuto è commentato.

### Ripristinare il sito completo

1. In `index.html`, decommentare il link al foglio di stile nel `<head>`:
   ```html
   <link rel="stylesheet" href="css/style.css">
   ```
2. Rimuovere la sezione WIP (il blocco tra i commenti `WORK IN PROGRESS`) e gli stili `.wip-*` nell'inline `<style>`.
3. Decommentare il blocco HTML del sito completo nel `<body>`.

---

## Contatti

- **Indirizzo:** Via Vestina 346, Montesilvano (PE)
- **Telefono:** +39 393 927 0855
- **Email:** mywayssd@gmail.com
- **Instagram:** [@mywaytennis](https://www.instagram.com/mywaytennis/)
