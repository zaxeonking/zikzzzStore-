const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const btn = document.getElementById('visit-btn');

line2.addEventListener('animationend', () => {
  line1.classList.remove('typing');
  line1.classList.add('hidden-caret');
  line2.classList.remove('typing2');
  line2.classList.add('hidden-caret');
  btn.style.display = 'inline-block';
});

btn.addEventListener('click', () => {
  window.location.href = "nextpage.html";
});