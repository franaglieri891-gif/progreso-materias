const materias = [
  { nombre: "Cuestión Social", semestre: "1er Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Problema del Desarrollo", semestre: "1er Semestre", creditos: 8, nota: "", estado: "Pendiente" },
  { nombre: "Principios de Economía", semestre: "1er Semestre", creditos: 8, nota: "", estado: "Pendiente" },
  { nombre: "Matemática", semestre: "1er Semestre", creditos: 8, nota: "", estado: "Pendiente" }
  // Luego agregaremos todas las demás materias
];

function renderMalla() {
  const tbody = document.querySelector("#malla tbody");
  tbody.innerHTML = "";
  materias.forEach((m, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.nombre}</td>
      <td>${m.semestre}</td>
      <td>${m.creditos}</td>
      <td><input type="number" value="${m.nota}" onchange="updateNota(${i}, this.value)" /></td>
      <td><button onclick="cambiarEstado(${i})">${m.estado}</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function updateNota(index, value) {
  materias[index].nota = value;
}

const estados = ["Pendiente", "En curso", "Aprobada"];
function cambiarEstado(index) {
  const estadoActual = materias[index].estado;
  const nuevo = estados[(estados.indexOf(estadoActual)+1) % estados.length];
  materias[index].estado = nuevo;
  renderMalla();
}

renderMalla();
