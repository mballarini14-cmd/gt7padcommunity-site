const tableBody = document.getElementById("tt-admin-body");

function loadTT() {
  const data = JSON.parse(localStorage.getItem("ttData")) || TT_DEFAULT_DATA;
  tableBody.innerHTML = "";

  data.forEach((row, i) => {
    tableBody.innerHTML += `
      <tr>
        <td>${row.pos}</td>
        <td><input value="${row.pilota}" data-i="${i}" data-k="pilota"></td>
        <td><input value="${row.tempo}" data-i="${i}" data-k="tempo"></td>
        <td><input value="${row.gap}" data-i="${i}" data-k="gap"></td>
      </tr>
    `;
  });
}

function saveTT() {
  const inputs = document.querySelectorAll("input");
  let data = JSON.parse(localStorage.getItem("ttData")) || TT_DEFAULT_DATA;

  inputs.forEach(inp => {
    data[inp.dataset.i][inp.dataset.k] = inp.value;
  });

  localStorage.setItem("ttData", JSON.stringify(data));
  alert("Classifica Time Trial salvata");
}

loadTT();
