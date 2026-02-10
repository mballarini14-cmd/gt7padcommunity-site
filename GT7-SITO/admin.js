// Carica eventuali piloti salvati
let salvati = localStorage.getItem("pilotiSalvati");
if(salvati){
    piloti = JSON.parse(salvati);
}

// Popola il menu nazioni
const selectNazione = document.getElementById("nazioneSelect");

nazioni.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n.code;
    opt.textContent = n.name;
    selectNazione.appendChild(opt);
});

// Funzione per salvare modifiche
function salvaModifica(){

    let posizione = parseInt(document.getElementById("posizioneInput").value) - 1;
    let nuovoNome = document.getElementById("nomeInput").value;
    let nuovaNazioneCode = document.getElementById("nazioneSelect").value;
    let nuoviPunti = parseInt(document.getElementById("puntiInput").value);

    if(!piloti[posizione]){
        alert("Posizione non valida");
        return;
    }

    const nazioneObj = nazioni.find(n => n.code === nuovaNazioneCode);

    if(nuovoNome) piloti[posizione].nome = nuovoNome;
    if(nazioneObj) piloti[posizione].nazione = nazioneObj;
    if(!isNaN(nuoviPunti)) piloti[posizione].punti = nuoviPunti;

    localStorage.setItem("pilotiSalvati", JSON.stringify(piloti));

    alert("Modifica salvata correttamente");
}

