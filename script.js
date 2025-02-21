let punteggio = 0;
let domandaCorrente = 0;

const domande = [
    // Vini Bianchi Svizzeri
    {
        tipo: "scelta_multipla",
        domanda: "Quale vitigno è presente nel Sasso Chierico Bianco DOC 2023?",
        opzioni: ["Merlot", "Pinot Grigio", "Cabernet Sauvignon", "Sangiovese"],
        risposta: "Merlot"
    },
    {
        tipo: "riempimento",
        domanda: "Il Carato Bianco DOC 2021 è prodotto da ___.",
        risposte: ["Delea"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale vino bianco è fatto solo con Sauvignon Blanc?",
        opzioni: ["Ronco Bain DOC", "Castello di Morcote DOC", "Gransegreto Bianco", "Sassi Grossi Bianco"],
        risposta: "Ronco Bain DOC"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale vitigno NON è nel Sassi Grossi Bianco 2022?",
        opzioni: ["Chardonnay", "Pinot Nero", "Merlot", "Sauvignon Blanc"],
        risposta: "Merlot"
    },
    {
        tipo: "riempimento",
        domanda: "Il vino più costoso tra i bianchi svizzeri elencati è il Castello di Morcote DOC ___.",
        risposte: ["2021"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale produttore fa il Viognier SanZeno DOC 2022?",
        opzioni: ["Tamborini", "Guido Brivio", "Gialdi", "Valsangiacomo"],
        risposta: "Tamborini"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale vino bianco ha il prezzo più basso?",
        opzioni: ["Bianco Rovere DOC", "Sasso Chierico Bianco", "Ronco Bain DOC", "Galanthus"],
        risposta: "Bianco Rovere DOC"
    },
    {
        tipo: "riempimento",
        domanda: "Il Gransegreto Bianco 2020 è fatto con il vitigno ___.",
        risposte: ["Chardonnay"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale anno è associato al Galanthus?",
        opzioni: ["2020", "2021", "2022", "2023"],
        risposta: "2021"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale vino bianco include Pinot Nero?",
        opzioni: ["Sassi Grossi Bianco", "Carato Bianco DOC", "Ronco Bain DOC", "Bianco Rovere DOC"],
        risposta: "Sassi Grossi Bianco"
    },

    // Vini Rossi Svizzeri
    {
        tipo: "scelta_multipla",
        domanda: "Quale vitigno è predominante nel Carato Riserva DOC 2020?",
        opzioni: ["Merlot", "Cabernet Sauvignon", "Divico", "Arinarnoa"],
        risposta: "Merlot"
    },
    {
        tipo: "riempimento",
        domanda: "Il Ronco dei Ciliegi 2019 è prodotto da Azienda ___.",
        risposte: ["Mondo"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale vino rosso include il vitigno Divico?",
        opzioni: ["Duae Rosso", "Sinfonia DOC", "Castello di Morcote DOC", "Ronco dei Ciliegi"],
        risposta: "Duae Rosso"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale anno è associato alla Sinfonia DOC?",
        opzioni: ["2018", "2019", "2020", "2021"],
        risposta: "2018"
    },
    {
        tipo: "riempimento",
        domanda: "Il Castello di Morcote DOC rosso è del ___.",
        risposte: ["2020"]
    },

    // Antipasti e Piatti da Condividere
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente NON è nel Guacamole Lago?",
        opzioni: ["Avocado", "Lime", "Basilico", "Coriandolo"],
        risposta: "Basilico"
    },
    {
        tipo: "riempimento",
        domanda: "Le olive nel piatto da condividere sono ___.",
        risposte: ["marinate"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Da dove provengono le alici Rozumar?",
        opzioni: ["Mar Cantabrico", "Oceano Pacifico", "Mar Mediterraneo", "Lago di Lugano"],
        risposta: "Mar Cantabrico"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale allergene è probabilmente presente nella Tartare di manzo?",
        opzioni: ["Glutine", "Pesce", "Latticini", "Arachidi"],
        risposta: "Glutine"
    },
    {
        tipo: "riempimento",
        domanda: "Il Ceviche di capasanta include ___, un frutto tropicale.",
        risposte: ["mango"]
    },

    // Pasta e Risotto
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente piccante è negli Spaghetti all’astice?",
        opzioni: ["Peperoncino", "Pepe nero", "Zenzero", "Paprika"],
        risposta: "Peperoncino"
    },
    {
        tipo: "riempimento",
        domanda: "Il Risotto Gran Riserva alle ciliegie è servito con carpaccio di ___.",
        risposte: ["gambero rosso"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale allergene è nei Ravioli di vitello con burrata?",
        opzioni: ["Latticini", "Pesce", "Soia", "Frutta a guscio"],
        risposta: "Latticini"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente marino NON è nella Calamarata di Gragnano allo scoglio?",
        opzioni: ["Cozze", "Vongole", "Tonno", "Gamberi"],
        risposta: "Tonno"
    },
    {
        tipo: "riempimento",
        domanda: "La Calamarata allo scoglio include una salsa ai ___.",
        risposte: ["crostacei"]
    },

    // Carne alla Griglia
    {
        tipo: "scelta_multipla",
        domanda: "Da dove proviene il Chainsteak?",
        opzioni: ["Svizzera", "Italia", "Spagna", "Francia"],
        risposta: "Svizzera"
    },
    {
        tipo: "riempimento",
        domanda: "Lo Steak di vitello è della razza ___.",
        risposte: ["Simmental"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale piatto di carne è servito per due persone?",
        opzioni: ["Chateaubriand", "Filetto di manzo", "Secreto Ibérico", "Chainsteak"],
        risposta: "Chateaubriand"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale carne pesa 200g?",
        opzioni: ["Filetto di manzo", "Chateaubriand", "Steak di vitello", "Chainsteak"],
        risposta: "Filetto di manzo"
    },
    {
        tipo: "riempimento",
        domanda: "Il Secreto Ibérico è di origine ___.",
        risposte: ["Svizzera"]
    },

    // Contorni
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente NON è nello Spinacino fresco saltato?",
        opzioni: ["Pomodori secchi", "Fichi grigliati", "Noci macadamia", "Peperoncino"],
        risposta: "Peperoncino"
    },
    {
        tipo: "riempimento",
        domanda: "Le Patatine fritte 'Lago' sono ___.",
        risposte: ["speziate"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale contorno può includere tartufo nero?",
        opzioni: ["Puré di patate", "Risotto al Parmigiano", "Melanzana arrostita", "Spinacino"],
        risposta: "Puré di patate"
    },

    // Pesce
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente verde è nel Merluzzo al pil pil?",
        opzioni: ["Edamame", "Basilico", "Spinaci", "Prezzemolo"],
        risposta: "Edamame"
    },
    {
        tipo: "riempimento",
        domanda: "La Sogliola farcita è ripiena di ___.",
        risposte: ["chorizo"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale spezia è nella Bouillabaisse?",
        opzioni: ["Zafferano", "Curcuma", "Pepe nero", "Cannella"],
        risposta: "Zafferano"
    },

    // Dolci
    {
        tipo: "scelta_multipla",
        domanda: "Quale sapore ha il gelato nel Giardino Dream?",
        opzioni: ["Cassis", "Vaniglia", "Cioccolato", "Caffè"],
        risposta: "Cassis"
    },
    {
        tipo: "riempimento",
        domanda: "La Tarte Tatin di mele è fatta con ___ spezie.",
        risposte: ["5"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente insolito è nella Variazione di pera?",
        opzioni: ["Pepe della Valle Maggia", "Cioccolato", "Miele", "Zenzero"],
        risposta: "Pepe della Valle Maggia"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale mini dolce è ripetuto nell’elenco?",
        opzioni: ["Mini Tiramisù", "Mini Panna Cotta", "Mini Cheesecake", "Mini Cioccolato"],
        risposta: "Mini Panna Cotta"
    },

    // Gelati
    {
        tipo: "scelta_multipla",
        domanda: "Quale topping è nella Coupe Danemark?",
        opzioni: ["Panna montata", "Caramello", "Frutta fresca", "Noci"],
        risposta: "Panna montata"
    },
    {
        tipo: "riempimento",
        domanda: "L’Affogato al Caffè è fatto con ___.",
        risposte: ["espresso"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale gusto NON è elencato tra i gelati?",
        opzioni: ["Cioccolato", "Vaniglia", "Fragola", "Caffè"],
        risposta: "Fragola"
    },

    // Traduzioni e Varie
    {
        tipo: "scelta_multipla",
        domanda: "Come si dice 'avocado' in spagnolo?",
        opzioni: ["Aguacate", "Manzana", "Naranja", "Plátano"],
        risposta: "Aguacate"
    },
    {
        tipo: "riempimento",
        domanda: "La parola italiana per 'lime' è ___.",
        risposte: ["lime"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Come si dice 'ciliegie' in francese?",
        opzioni: ["Cerises", "Pommes", "Poires", "Fraises"],
        risposta: "Cerises"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente è tradotto come 'Zitronengras' in tedesco?",
        opzioni: ["Lemongrass", "Basilico", "Coriandolo", "Prezzemolo"],
        risposta: "Lemongrass"
    },
    {
        tipo: "riempimento",
        domanda: "La parola italiana per 'gamberi' è ___.",
        risposte: ["gamberi"]
    },
    {
        tipo: "scelta_multipla",
        domanda: "Come si dice 'tartufo' in inglese?",
        opzioni: ["Truffle", "Mushroom", "Garlic", "Onion"],
        risposta: "Truffle"
    },
    {
        tipo: "scelta_multipla",
        domanda: "Quale ingrediente è tradotto come 'Mandeln' in tedesco?",
        opzioni: ["Mandorle", "Noci", "Pistacchi", "Nocciole"],
        risposta: "Mandorle"
    }
];

caricaDomanda();

function caricaDomanda() {
    const d = domande[domandaCorrente];
    document.getElementById("question").innerHTML = d.domanda;
    const opzioniDiv = document.getElementById("options");
    opzioniDiv.innerHTML = "";

    if (d.tipo === "scelta_multipla") {
        d.opzioni.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = () => verificaRisposta(opt, d.risposta);
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

function verificaRisposta(selezionato, corretto) {
    if (selezionato === corretto) {
        punteggio += 10;
        document.getElementById("score-value").innerText = punteggio;
    }
    mostraPulsanteProssimo();
}

function verificaRispostaRiempimento(input, corretto) {
    if (input.toLowerCase() === corretto[0].toLowerCase()) {
        punteggio += 10;
        document.getElementById("score-value").innerText = punteggio;
    }
    mostraPulsanteProssimo();
}

function mostraPulsanteProssimo() {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
    nextBtn.onclick = () => {
        domandaCorrente++;
        if (domandaCorrente < domande.length) {
            caricaDomanda();
            nextBtn.style.display = "none";
        } else {
            document.getElementById("question").innerHTML = "Fine del Gioco! Punteggio Finale: " + punteggio;
            document.getElementById("options").innerHTML = "";
            nextBtn.style.display = "none";
        }
    };
}