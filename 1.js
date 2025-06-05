const s = document.createElement('script');
s.textContent = `document.write(document.cookie)`;
document.body.appendChild(s);
