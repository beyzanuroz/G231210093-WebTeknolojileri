// TMDB API'den en yüksek puanlı 10 filmi çek ve göster
// Kendi API anahtarınızı alın: https://www.themoviedb.org/settings/api
const API_KEY = '068fa528d98d8f2d3300c8b8f76c130c';
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=tr-TR&page=1`;
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const filmKartlari = document.getElementById('film-kartlari');

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    filmKartlari.innerHTML = '';
    data.results.slice(0, 10).forEach(film => {
      const filmDiv = document.createElement('div');
      filmDiv.className = 'film-kart';
      filmDiv.onclick = () => {
        window.open(`https://www.themoviedb.org/movie/${film.id}`, '_blank');
      };
      filmDiv.innerHTML = `
        <img src="${film.poster_path ? IMAGE_BASE + film.poster_path : 'https://via.placeholder.com/210x320?text=No+Image'}" alt="${film.title}">
        <div class="film-baslik">${film.title}</div>
        <div class="film-puan">IMDB: ${film.vote_average}</div>
        <div class="film-tarih">${film.release_date}</div>
      `;
      filmKartlari.appendChild(filmDiv);
    });
  })
  .catch(err => {
    filmKartlari.innerHTML = '<div style="color:red;">Film verileri alınamadı. Lütfen API anahtarınızı kontrol edin.</div>';
  }); 