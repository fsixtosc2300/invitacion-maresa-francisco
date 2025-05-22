async function validarCodigo() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const response = await fetch("data/invitados.json");
  const invitados = await response.json();
  if (invitados[codigo]) {
    const nombre = invitados[codigo].replace(/ /g, "-");
    window.location.href = `invitado.html?nombre=${encodeURIComponent(invitados[codigo])}`;
  } else {
    alert("Código inválido. Intenta de nuevo.");
  }
}