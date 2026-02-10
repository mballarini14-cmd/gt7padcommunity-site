let piloti = JSON.parse(localStorage.getItem("pilotiSalvati")) || [];

const nazioni = [
  {code:"it", name:"Italia"},
  {code:"fr", name:"Francia"},
  {code:"es", name:"Spagna"},
  {code:"de", name:"Germania"},
  {code:"gb", name:"UK"},
  {code:"nl", name:"Olanda"},
  {code:"us", name:"USA"},
  {code:"jp", name:"Giappone"},
  {code:"br", name:"Brasile"},
  {code:"au", name:"Australia"},
  {code:"ca", name:"Canada"},
  {code:"pt", name:"Portogallo"},
  {code:"be", name:"Belgio"},
  {code:"se", name:"Svezia"},
  {code:"ch", name:"Svizzera"}
];

const nomiBase = ["Alex","Dark","Speed","Turbo","Ghost","Rapid","Shadow","Viper","Apex","Drift"];

if(piloti.length === 0){

  let punti = 5000;

  for(let i=1;i<=5000;i++){

    let nation = nazioni[Math.floor(Math.random()*nazioni.length)];
    let nomeRandom = nomiBase[Math.floor(Math.random()*nomiBase.length)] + "_GT" + i;

    piloti.push({
      posizione:i,
      nome:nomeRandom,
      nazione:nation,
      punti:punti
    });

    punti -= Math.floor(Math.random()*3);
  }

  localStorage.setItem("pilotiSalvati", JSON.stringify(piloti));
  console.log("Piloti generati:", piloti.length);
}
