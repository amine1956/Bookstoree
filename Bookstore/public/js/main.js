const chercher = (e) => {
  const motCle = document.getElementById("motCle");
  e.preventDefault();
  window.location.replace(`/https://127.0.0.1:8000/livre/chercher/${motCle.value}`);
};