document.getElementById('flexCheckDefault').addEventListener('change', (e) => {
  document.getElementById('submit').disabled = !e.target.checked;
});
