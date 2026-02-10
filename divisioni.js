// Restituisce i piloti della divisione richiesta

function getDivisione(nomeDivisione){

switch(nomeDivisione){

case "S": return piloti.slice(0,100);
case "A+": return piloti.slice(100,250);
case "A": return piloti.slice(250,500);
case "B": return piloti.slice(500,1000);
case "C": return piloti.slice(1000,2000);
case "D": return piloti.slice(2000,4000);
case "E": return piloti.slice(4000);

default: return [];

}

}


// Renderizza la tabella della divisione

function renderDivisione(nomeDivisione, tableID){

const data = getDivisione(nomeDivisione);
const tabella = document.getElementById(tableID);

// Pulisce tabella prima di riempirla
tabella.innerHTML = "";

data.forEach(p => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${p.posizione}</td>
<td>${p.nome}</td>
<td>
<img src="https://flagcdn.com/w20/${p.nazione.code}.png" class="flag-small">
${p.nazione.name}
</td>
<td>${p.punti}</td>
`;

tabella.appendChild(row);

});


// Aggiorna automaticamente il podio se presente nella pagina

if(data.length >= 3){

const top3 = data.slice(0,3);

if(typeof renderPodio === "function"){

renderPodio(top3);

}

}

}

