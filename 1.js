const s = document.createElement('script');
s.textContent = `document.write(document.cookie)`; // 或你自己的代码
document.body.appendChild(s);
