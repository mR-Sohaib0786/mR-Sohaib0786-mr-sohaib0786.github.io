document.querySelectorAll('a[target="_blank"]').forEach(link=>{
  link.addEventListener('click',()=>{});
});
document.querySelector('.newsletter-form')?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thanks! Newsletter signup is ready to connect to your email service.');
});
