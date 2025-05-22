function validarCodigo() {
  const codigo = document.getElementById('codigo').value.trim().toLowerCase();
  const codigosValidos = ["familia_hernandez", "familia_rodriguez", "familia_garcia"];

  if (codigosValidos.includes(codigo)) {
    // Redirige pasando el código como parámetro en la URL
    window.location.href = `evento.html?codigo=${codigo}`;
  } else {
    alert("Código inválido. Por favor intenta de nuevo.");
  }
}
