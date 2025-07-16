// Fungsi untuk menampilkan & menyembunyikan menu
function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
}




// Slider Gambar
let currentIndex = 0;
const images = document.querySelectorAll('.slider-container img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// Fungsi untuk menampilkan slide dengan efek fade
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
    });

    images[index].classList.add('active');

    // Update status dot indikator
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Fungsi untuk berpindah ke slide berikutnya secara otomatis
function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// Mulai autoplay (ubah gambar setiap 4 detik)
let autoPlay = setInterval(nextSlide, 4000);

// Hentikan autoplay saat tombol atau dot ditekan
function resetAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 4000);
}

// Tombol Prev
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
    resetAutoPlay();
});

// Tombol Next
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

// Klik pada dot untuk berpindah slide
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showImage(currentIndex);
        resetAutoPlay();
    });
});

// Tampilkan gambar pertama saat halaman dimuat
showImage(currentIndex);
