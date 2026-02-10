function renderPodio(top3){

if(!top3 || top3.length < 3) return;

document.getElementById("nome1").innerText = top3[0].nome;
document.getElementById("punti1").innerText = top3[0].punti + " pts";
document.getElementById("flag1").src = "https://flagcdn.com/w80/" + top3[0].nazione.code + ".png";

document.getElementById("nome2").innerText = top3[1].nome;
document.getElementById("punti2").innerText = top3[1].punti + " pts";
document.getElementById("flag2").src = "https://flagcdn.com/w80/" + top3[1].nazione.code + ".png";

document.getElementById("nome3").innerText = top3[2].nome;
document.getElementById("punti3").innerText = top3[2].punti + " pts";
document.getElementById("flag3").src = "https://flagcdn.com/w80/" + top3[2].nazione.code + ".png";

}
