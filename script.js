let punteggio = 0;
let domandaCorrente = 0;
let domandePrecedenti = []; // Per tornare indietro

const messaggiPositivi = [
    "Grande!", "Fantastico!", "Sei un genio!", "Perfetto!", "Continua così!"
];
const messaggiNegativi = [
    "Ops, prova ancora!", "Quasi!", "Non proprio...", "Riprova!", "Tranquillo, puoi farcela!"
];

const domande = [
    // Vini Bianchi Svizzeri
    { tipo: "scelta_multipla", domanda: "Quale vitigno è presente nel Sasso Chierico Bianco DOC 2023?", opzioni: ["Merlot", "Pinot Grigio", "Cabernet Sauvignon", "Sangiovese"], risposta: "Merlot", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Carato Bianco DOC 2021 è prodotto da ___.", risposte: ["Delea"], immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino bianco è fatto solo con Sauvignon Blanc?", opzioni: ["Ronco Bain DOC", "Castello di Morcote DOC", "Gransegreto Bianco", "Sassi Grossi Bianco"], risposta: "Ronco Bain DOC", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vitigno NON è nel Sassi Grossi Bianco 2022?", opzioni: ["Chardonnay", "Pinot Nero", "Merlot", "Sauvignon Blanc"], risposta: "Merlot", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il vino bianchi più costoso è il Castello di Morcote DOC ___.", risposte: ["2021"], immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale produttore fa il Viognier SanZeno DOC 2022?", opzioni: ["Tamborini", "Guido Brivio", "Gialdi", "Valsangiacomo"], risposta: "Tamborini", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino bianco ha il prezzo più basso?", opzioni: ["Bianco Rovere DOC", "Sasso Chierico Bianco", "Ronco Bain DOC", "Galanthus"], risposta: "Bianco Rovere DOC", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Gransegreto Bianco 2020 è fatto con il vitigno ___.", risposte: ["Chardonnay"], immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale anno è associato al Galanthus?", opzioni: ["2020", "2021", "2022", "2023"], risposta: "2021", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino bianco include Pinot Nero?", opzioni: ["Sassi Grossi Bianco", "Carato Bianco DOC", "Ronco Bain DOC", "Bianco Rovere DOC"], risposta: "Sassi Grossi Bianco", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Vini Rossi Svizzeri
    { tipo: "scelta_multipla", domanda: "Quale vitigno è predominante nel Carato Riserva DOC 2020?", opzioni: ["Merlot", "Cabernet Sauvignon", "Divico", "Arinarnoa"], risposta: "Merlot", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Ronco dei Ciliegi 2019 è prodotto da Azienda ___.", risposte: ["Mondo"], immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino rosso include il vitigno Divico?", opzioni: ["Duae Rosso", "Sinfonia DOC", "Castello di Morcote DOC", "Ronco dei Ciliegi"], risposta: "Duae Rosso", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale anno è associato alla Sinfonia DOC?", opzioni: ["2018", "2019", "2020", "2021"], risposta: "2018", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Castello di Morcote DOC rosso è del ___.", risposte: ["2020"], immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Antipasti e Piatti da Condividere
    { tipo: "scelta_multipla", domanda: "Quale ingrediente NON è nel Guacamole Lago?", opzioni: ["Avocado", "Lime", "Basilico", "Coriandolo"], risposta: "Basilico", immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Le olive nel piatto da condividere sono ___.", risposte: ["marinate"], immagine: "https://images.unsplash.com/photo-1606915977479-5c1f596ae567?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Da dove provengono le alici Rozumar?", opzioni: ["Mar Cantabrico", "Oceano Pacifico", "Mar Mediterraneo", "Lago di Lugano"], risposta: "Mar Cantabrico", immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale allergene è probabilmente nella Tartare di manzo?", opzioni: ["Glutine", "Pesce", "Latticini", "Arachidi"], risposta: "Glutine", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Ceviche di capasanta include ___, un frutto tropicale.", risposte: ["mango"], immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Pasta e Risotto
    { tipo: "scelta_multipla", domanda: "Quale ingrediente piccante è negli Spaghetti all’astice?", opzioni: ["Peperoncino", "Pepe nero", "Zenzero", "Paprika"], risposta: "Peperoncino", immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Risotto Gran Riserva alle ciliegie ha carpaccio di ___.", risposte: ["gambero rosso"], immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale allergene è nei Ravioli di vitello con burrata?", opzioni: ["Latticini", "Pesce", "Soia", "Frutta a guscio"], risposta: "Latticini", immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale ingrediente marino NON è nella Calamarata allo scoglio?", opzioni: ["Cozze", "Vongole", "Tonno", "Gamberi"], risposta: "Tonno", immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "La Calamarata allo scoglio ha una salsa ai ___.", risposte: ["crostacei"], immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Carne alla Griglia
    { tipo: "scelta_multipla", domanda: "Da dove proviene il Chainsteak?", opzioni: ["Svizzera", "Italia", "Spagna", "Francia"], risposta: "Svizzera", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Lo Steak di vitello è della razza ___.", risposte: ["Simmental"], immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale piatto di carne è per due persone?", opzioni: ["Chateaubriand", "Filetto di manzo", "Secreto Ibérico", "Chainsteak"], risposta: "Chateaubriand", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale carne pesa 200g?", opzioni: ["Filetto di manzo", "Chateaubriand", "Steak di vitello", "Chainsteak"], risposta: "Filetto di manzo", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Secreto Ibérico è di origine ___.", risposte: ["Svizzera"], immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Contorni
    { tipo: "scelta_multipla", domanda: "Quale ingrediente NON è nello Spinacino fresco saltato?", opzioni: ["Pomodori secchi", "Fichi grigliati", "Noci macadamia", "Peperoncino"], risposta: "Peperoncino", immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Le Patatine fritte 'Lago' sono ___.", risposte: ["speziate"], immagine: "https://images.unsplash.com/photo-1518013431117-eb1468208c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale contorno può includere tartufo nero?", opzioni: ["Puré di patate", "Risotto al Parmigiano", "Melanzana arrostita", "Spinacino"], risposta: "Puré di patate", immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Pesce
    { tipo: "scelta_multipla", domanda: "Quale ingrediente verde è nel Merluzzo al pil pil?", opzioni: ["Edamame", "Basilico", "Spinaci", "Prezzemolo"], risposta: "Edamame", immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "La Sogliola farcita è ripiena di ___.", risposte: ["chorizo"], immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale spezia è nella Bouillabaisse?", opzioni: ["Zafferano", "Curcuma", "Pepe nero", "Cannella"], risposta: "Zafferano", immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Dolci
    { tipo: "scelta_multipla", domanda: "Quale sapore ha il gelato nel Giardino Dream?", opzioni: ["Cassis", "Vaniglia", "Cioccolato", "Caffè"], risposta: "Cassis", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "La Tarte Tatin di mele è fatta con ___ spezie.", risposte: ["5"], immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale ingrediente insolito è nella Variazione di pera?", opzioni: ["Pepe della Valle Maggia", "Cioccolato", "Miele", "Zenzero"], risposta: "Pepe della Valle Maggia", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale mini dolce è ripetuto nell’elenco?", opzioni: ["Mini Tiramisù", "Mini Panna Cotta", "Mini Cheesecake", "Mini Cioccolato"], risposta: "Mini Panna Cotta", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Gelati
    { tipo: "scelta_multipla", domanda: "Quale topping è nella Coupe Danemark?", opzioni: ["Panna montata", "Caramello", "Frutta fresca", "Noci"], risposta: "Panna montata", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "L’Affogato al Caffè è fatto con ___.", risposte: ["espresso"], immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale gusto NON è tra i gelati?", opzioni: ["Cioccolato", "Vaniglia", "Fragola", "Caffè"], risposta: "Fragola", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Traduzioni Italiano → Tedesco e Italiano → Inglese
    { tipo: "scelta_multipla", domanda: "Come si dice 'avocado' in tedesco?", opzioni: ["Avocado", "Apfel", "Birne", "Banane"], risposta: "Avocado", immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Come si dice 'lime' in inglese? Scrivi: ___", risposte: ["lime"], immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'ciliegie' in tedesco?", opzioni: ["Kirschen", "Äpfel", "Birnen", "Erdbeeren"], risposta: "Kirschen", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'basilico' in inglese?", opzioni: ["Basil", "Parsley", "Rosemary", "Sage"], risposta: "Basil", immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Come si dice 'gamberi' in tedesco? Scrivi: ___", risposte: ["Garnelen"], immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'tartufo' in inglese?", opzioni: ["Truffle", "Mushroom", "Garlic", "Onion"], risposta: "Truffle", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'mandorle' in tedesco?", opzioni: ["Mandeln", "Nüsse", "Pistazien", "Haselnüsse"], risposta: "Mandeln", immagine: "https://images.unsplash.com/photo-1606915977479-5c1f596ae567?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
];

caricaDomanda();

function caricaDomanda() {
    const d = domande[domandaCorrente];
    document.getElementById("current-question").innerText = domandaCorrente + 1;
    document.getElementById("question").innerHTML = d.domanda;
    const img = document.getElementById("question-image");
    img.src = d.immagine || "";
    img.style.display = d.immagine ? "block" : "none";
    const opzioniDiv = document.getElementById("options");
    opzioniDiv.innerHTML = "";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("back-btn").style.display = domandaCorrente > 0 ? "inline" : "none";

    if (d.tipo === "scelta_multipla") {
        d.opzioni.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = () => verificaRisposta(opt, d.risposta, btn);
            opzioniDiv.appendChild(btn);
        });
    } else if (d.tipo === "riempimento") {
        const input = document.createElement("input");
        input.type = "text";
        const submitBtn = document.createElement("button");
        submitBtn.innerText = "Invia";
        submitBtn.onclick = () => verificaRispostaRiempimento(input.value, d.risposte);
        opzioniDiv.appendChild(input);
        opzioniDiv.appendChild(submitBtn);
    }
}

function verificaRisposta(selezionato, corretto, btn) {
    const feedback = document.getElementById("feedback");
    if (selezionato === corretto) {
        punteggio += 10;
        document.getElementById("score-value").innerText = punteggio;
        btn.classList.add("correct");
        feedback.style.color = "#28a745";
        feedback.innerHTML = messaggiPositivi[Math.floor(Math.random() * messaggiPositivi.length)];
    } else {
        btn.classList.add("wrong");
        feedback.style.color = "#dc3545";
        feedback.innerHTML = messaggiNegativi[Math.floor(Math.random() * messaggiNegativi.length)];
    }
    mostraPulsanteProssimo();
}

function verificaRispostaRiempimento(input, corretto) {
    const feedback = document.getElementById("feedback");
    const rispostaUtente = input.trim().toLowerCase();
    const rispostaCorretta = corretto[0].toLowerCase();
    const distanza = levenshteinDistance(rispostaUtente, rispostaCorretta);
    
    if (rispostaUtente === rispostaCorretta || distanza <= 2) { // Tollera fino a 2 errori
        punteggio += 10;
        document.getElementById("score-value").innerText = punteggio;
        feedback.style.color = "#28a745";
        feedback.innerHTML = messaggiPositivi[Math.floor(Math.random() * messaggiPositivi.length)];
    } else {
        feedback.style.color = "#dc3545";
        feedback.innerHTML = messaggiNegativi[Math.floor(Math.random() * messaggiNegativi.length)] + ` (Corretto: ${rispostaCorretta})`;
    }
    mostraPulsanteProssimo();
}

function mostraPulsanteProssimo() {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
    nextBtn.onclick = () => {
        domandePrecedenti.push(domandaCorrente);
        domandaCorrente++;
        if (domandaCorrente < domande.length) {
            caricaDomanda();
        } else {
            document.getElementById("question").innerHTML = "Fine del Gioco! Punteggio Finale: " + punteggio;
            document.getElementById("options").innerHTML = "";
            document.getElementById("question-image").style.display = "none";
            nextBtn.style.display = "none";
        }
    };
}

document.getElementById("back-btn").onclick = () => {
    if (domandePrecedenti.length > 0) {
        domandaCorrente = domandePrecedenti.pop();
        caricaDomanda();
    }
};

// Funzione per calcolare la distanza di Levenshtein (tolleranza errori di battitura)
function levenshteinDistance(a, b) {
    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,
                matrix[j - 1][i] + 1,
                matrix[j - 1][i - 1] + indicator
            );
        }
    }
    return matrix[b.length][a.length];
}