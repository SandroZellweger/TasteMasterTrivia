let punteggio = 0;
let domandaCorrente = 0;
let domandePrecedenti = [];

const messaggiPositivi = ["Grande!", "Fantastico!", "Sei un genio!", "Perfetto!", "Continua così!"];
const messaggiNegativi = ["Ops, prova ancora!", "Quasi!", "Non proprio...", "Riprova!", "Tranquillo, puoi farcela!"];

const viniApertiCorretti = [
    "Sasso Chierico Bianco DOC",
    "Ronco Bain DOC",
    "Viognier SanZeno DOC",
    "Bianco Rovere DOC",
    "Sassi Grossi Bianco"
];

const domande = [
    // Vini Bianchi Svizzeri
    { tipo: "scelta_multipla", domanda: "Quale vitigno è presente nel Sasso Chierico Bianco DOC?", opzioni: ["Merlot", "Pinot Grigio", "Cabernet Sauvignon", "Sangiovese"], risposta: "Merlot", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Carato Bianco DOC è prodotto da ___.", risposte: ["Delea"], immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino bianco è fatto solo con Sauvignon Blanc?", opzioni: ["Ronco Bain DOC", "Castello di Morcote DOC", "Gransegreto Bianco", "Sassi Grossi Bianco"], risposta: "Ronco Bain DOC", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vitigno NON è nel Sassi Grossi Bianco?", opzioni: ["Chardonnay", "Pinot Nero", "Merlot", "Sauvignon Blanc"], risposta: "Merlot", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale produttore fa il Viognier SanZeno DOC?", opzioni: ["Tamborini", "Guido Brivio", "Gialdi", "Valsangiacomo"], risposta: "Tamborini", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino bianco ha il prezzo più basso?", opzioni: ["Bianco Rovere DOC", "Sasso Chierico Bianco", "Ronco Bain DOC", "Galanthus"], risposta: "Bianco Rovere DOC", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Gransegreto Bianco è fatto con il vitigno ___.", risposte: ["Chardonnay"], immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino bianco include Pinot Nero?", opzioni: ["Sassi Grossi Bianco", "Carato Bianco DOC", "Ronco Bain DOC", "Bianco Rovere DOC"], risposta: "Sassi Grossi Bianco", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Da quale regione proviene il Castello di Morcote DOC bianco?", opzioni: ["Ticino", "Piemonte", "Toscana", "Veneto"], risposta: "Ticino", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Vini Rossi Svizzeri
    { tipo: "scelta_multipla", domanda: "Quale vitigno è predominante nel Carato Riserva DOC?", opzioni: ["Merlot", "Cabernet Sauvignon", "Divico", "Arinarnoa"], risposta: "Merlot", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Il Ronco dei Ciliegi è prodotto da Azienda ___.", risposte: ["Mondo"], immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale vino rosso include il vitigno Divico?", opzioni: ["Duae Rosso", "Sinfonia DOC", "Castello di Morcote DOC", "Ronco dei Ciliegi"], risposta: "Duae Rosso", immagine: "https://images.unsplash.com/photo-1519671282429-b44660d77467?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Da quale regione proviene il Sinfonia DOC?", opzioni: ["Ticino", "Lombardia", "Emilia-Romagna", "Sicilia"], risposta: "Ticino", immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Antipasti e Piatti da Condividere
    { tipo: "scelta_multipla", domanda: "Quale ingrediente NON è nel Guacamole Lago?", opzioni: ["Avocado", "Lime", "Basilico", "Coriandolo"], risposta: "Basilico", immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Le olive nel piatto da condividere sono ___.", risposte: ["marinate"], immagine: "https://images.unsplash.com/photo-1606915977479-5c1f596ae567?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Da dove provengono le alici Rozumar?", opzioni: ["Mar Cantabrico", "Oceano Pacifico", "Mar Mediterraneo", "Lago di Lugano"], risposta: "Mar Cantabrico", immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Quale allergene è nella Tartare di manzo?", opzioni: ["Glutine", "Pesce", "Latticini", "Arachidi"], risposta: "Glutine", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
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

    // Gelati
    { tipo: "scelta_multipla", domanda: "Quale topping è nella Coupe Danemark?", opzioni: ["Panna montata", "Caramello", "Frutta fresca", "Noci"], risposta: "Panna montata", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "L’Affogato al Caffè è fatto con ___.", risposte: ["espresso"], immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Traduzioni Italiano → Tedesco e Italiano → Inglese (più domande)
    { tipo: "scelta_multipla", domanda: "Come si dice 'avocado' in tedesco?", opzioni: ["Avocado", "Apfel", "Birne", "Banane"], risposta: "Avocado", immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Come si dice 'lime' in inglese? Scrivi: ___", risposte: ["lime"], immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'ciliegie' in tedesco?", opzioni: ["Kirschen", "Äpfel", "Birnen", "Erdbeeren"], risposta: "Kirschen", immagine: "https://images.unsplash.com/photo-1600891964092-4316bbb3a9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'basilico' in inglese?", opzioni: ["Basil", "Parsley", "Rosemary", "Sage"], risposta: "Basil", immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Come si dice 'gamberi' in tedesco? Scrivi: ___", risposte: ["Garnelen"], immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'tartufo' in inglese?", opzioni: ["Truffle", "Mushroom", "Garlic", "Onion"], risposta: "Truffle", immagine: "https://images.unsplash.com/photo-1601001435822-4172a122b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'mandorle' in tedesco?", opzioni: ["Mandeln", "Nüsse", "Pistazien", "Haselnüsse"], risposta: "Mandeln", immagine: "https://images.unsplash.com/photo-1606915977479-5c1f596ae567?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'peperoncino' in inglese?", opzioni: ["Chili", "Pepper", "Spice", "Paprika"], risposta: "Chili", immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "riempimento", domanda: "Come si dice 'coriandolo' in tedesco? Scrivi: ___", risposte: ["Koriander"], immagine: "https://images.unsplash.com/photo-1603046891748-63eabf6d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { tipo: "scelta_multipla", domanda: "Come si dice 'zafferano' in inglese?", opzioni: ["Saffron", "Turmeric", "Cumin", "Cinnamon"], risposta: "Saffron", immagine: "https://images.unsplash.com/photo-1606890967498-0f9b5c35a5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },

    // Gioco dei Vini Aperti
    { tipo: "abbinamento", domanda: "Quali tra questi vini sono offerti aperti? Seleziona i 5 corretti.", vini: [
        "Sasso Chierico Bianco DOC", "Carato Bianco DOC", "Ronco Bain DOC", "Galanthus",
        "Viognier SanZeno DOC", "Castello di Morcote DOC", "Gransegreto Bianco",
        "Bianco Rovere DOC", "Sassi Grossi Bianco", "Duae Rosso"
    ], risposte: viniApertiCorretti, immagine: "https://images.unsplash.com/photo-1516594915697-87eb3b82c3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
];

// Mescola le domande casualmente
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(domande);

caricaDomanda();

function caricaDomanda() {
    const d = domande[domandaCorrente];
    document.getElementById("current-question").innerText = domandaCorrente + 1;
    document.getElementById("question").innerHTML = d.domanda;
    const img = document.getElementById("question-image");
    img.src = d.immagine || "";
    img.style.display = d.immagine ? "block" : "none";
    const opzioniDiv = document.getElementById("options");
    const matchingDiv = document.getElementById("matching-game");
    opzioniDiv.innerHTML = "";
    matchingDiv.style.display = "none";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("back-btn").style.display = domandaCorrente > 0 ? "inline" : "none";

    if (d.tipo === "scelta_multipla") {
        d.opzioni.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = () => {
                btn.classList.toggle("selected");
                verificaRisposta(opt, d.risposta, btn);
            };
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
    } else if (d.tipo === "abbinamento") {
        matchingDiv.style.display = "block";
        const wineList = document.getElementById("wine-list");
        wineList.innerHTML = "";
        const selezionati = [];
        d.vini.forEach(vino => {
            const div = document.createElement("div");
            div.className = "wine-item";
            div.innerText = vino;
            div.onclick = () => {
                div.classList.toggle("selected");
                if (selezionati.includes(vino)) {
                    selezionati.splice(selezionati.indexOf(vino), 1);
                } else if (selezionati.length < 5) {
                    selezionati.push(vino);
                } else {
                    div.classList.remove("selected");
                }
            };
            wineList.appendChild(div);
        });
        document.getElementById("check-matching").onclick = () => verificaAbbinamento(selezionati, d.risposte);
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
    
    if (rispostaUtente === rispostaCorretta || distanza <= 2) {
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

function verificaAbbinamento(selezionati, corretti) {
    const feedback = document.getElementById("feedback");
    const correttiSelezionati = selezionati.filter(vino => corretti.includes(vino)).length;
    if (correttiSelezionati === 5 && selezionati.length === 5) {
        punteggio += 50; // Bonus per abbinamento perfetto
        feedback.style.color = "#28a745";
        feedback.innerHTML = "Perfetto! Tutti i vini aperti sono corretti!";
    } else {
        punteggio += correttiSelezionati * 10;
        feedback.style.color = "#dc3545";
        feedback.innerHTML = `Hai indovinato ${correttiSelezionati} vini aperti su 5.`;
    }
    document.getElementById("score-value").innerText = punteggio;
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
            document.getElementById("matching-game").style.display = "none";
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