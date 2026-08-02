// Product filter chips
  const chips = document.querySelectorAll('.chip');
  const productCards = document.querySelectorAll('.product-card');
  chips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      productCards.forEach(card=>{
        const match = filter === 'Semua' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));
