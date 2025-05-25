// İletişim formu validasyon ve gönderim
const form = document.getElementById('iletisimForm');
const hataDiv = document.getElementById('formHata');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  hataDiv.textContent = '';

  // Alanları al
  const ad = form.ad.value.trim();
  const soyad = form.soyad.value.trim();
  const email = form.email.value.trim();
  const telefon = form.telefon.value.trim();
  const mesaj = form.mesaj.value.trim();

  // Validasyon
  if (!ad || !soyad || !email || !telefon || !mesaj) {
    hataDiv.textContent = 'Lütfen tüm alanları doldurun.';
    return;
  }
  if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]+$/.test(ad)) {
    hataDiv.textContent = 'Ad alanı sadece harf içermelidir.';
    return;
  }
  if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]+$/.test(soyad)) {
    hataDiv.textContent = 'Soyad alanı sadece harf içermelidir.';
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    hataDiv.textContent = 'Geçerli bir e-posta adresi girin.';
    return;
  }
  if (!/^\d{10,15}$/.test(telefon)) {
    hataDiv.textContent = 'Telefon numarası 10-15 rakamdan oluşmalıdır.';
    return;
  }
  if (mesaj.length < 10) {
    hataDiv.textContent = 'Mesaj en az 10 karakter olmalıdır.';
    return;
  }

  // Verileri localStorage ile aktar
  const formData = { ad, soyad, email, telefon, mesaj };
  localStorage.setItem('iletisimFormData', JSON.stringify(formData));
  window.location.href = 'form-sonuc.html';
});

// Temizle butonu için hata mesajını da sıfırla
form.addEventListener('reset', function() {
  hataDiv.textContent = '';
}); 