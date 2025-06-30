function saveSmriti() {
  const text = document.getElementById('smritiBox').value;
  const saved = JSON.parse(localStorage.getItem("smriti") || "[]");
  saved.push({ text, time: new Date().toLocaleString() });
  localStorage.setItem("smriti", JSON.stringify(saved));
  document.getElementById('smritiBox').value = "";
  loadSmriti();
}

function loadSmriti() {
  const saved = JSON.parse(localStorage.getItem("smriti") || "[]");
  const list = document.getElementById('smritiList');
  list.innerHTML = "";
  saved.reverse().forEach(s => {
    const li = document.createElement('li');
    li.textContent = `${s.time}: ${s.text}`;
    list.appendChild(li);
  });
}

loadSmriti();
