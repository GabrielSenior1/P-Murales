import { getMurals } from './services/muralService.js';

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('home-murals-grid');
  
  try {
    const murals = await getMurals();
    grid.innerHTML = ''; // Limpiar estado de carga
    
    murals.forEach((mural) => {
      // Crear tarjeta para cada mural
      const card = document.createElement('a');
      card.href = `/visor.html?mural=${mural.id}`;
      card.className = "bg-brand-white border border-surface-variant rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(23,70,162,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer decoration-none";
      
      card.innerHTML = `
        <div class="bg-brand-light-blue w-full h-48 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dbe9ff] transition-colors border border-transparent group-hover:border-brand-royal-blue/30">
          <span class="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">${mural.thumbnail || '🖼️'}</span>
        </div>
        
        <div class="flex-grow flex flex-col">
          <div class="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 flex items-center gap-1">
             <span class="material-symbols-outlined text-[16px]">category</span> ${mural.category || 'Mural'}
          </div>
          <h2 class="text-xl font-headline-lg-mobile font-bold text-brand-dark-blue mb-2 group-hover:text-brand-royal-blue transition-colors">
            ${mural.title}
          </h2>
          <p class="text-sm text-brand-dark-blue opacity-70 mb-4 line-clamp-2">
            ${mural.description}
          </p>
          
          <div class="mt-auto pt-4 border-t border-surface-variant flex items-center justify-between">
            <span class="text-xs text-brand-dark-blue opacity-60 flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">location_on</span>
              ${mural.location || 'Localización'}
            </span>
            <span class="material-symbols-outlined text-brand-royal-blue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      `;
      
      grid.appendChild(card);
    });
    
  } catch (error) {
    grid.innerHTML = `
      <div class="col-span-full text-center p-8 bg-red-50 text-red-600 rounded-xl border border-red-100">
        <span class="material-symbols-outlined text-4xl mb-2">error</span>
        <p>Hubo un error al cargar el catálogo de murales.</p>
        <p class="text-sm opacity-80 mt-1">${error.message}</p>
      </div>
    `;
    console.error("Error loading murals on home page:", error);
  }
});
