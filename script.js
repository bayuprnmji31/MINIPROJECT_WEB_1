// Script JavaScript untuk menangani ikon menu
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('box-menu');
    const navbar = document.querySelector('.navbar');
    const scrollToTopButton = document.getElementById('scroll-to-top');
  
    menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
  
      // Periksa apakah navbar memiliki class 'active'
      if (navbar.classList.contains('active')) {
        // Sembunyikan tombol scroll to top saat navbar aktif
        scrollToTopButton.classList.remove('show');
      } else {
        // Tampilkan tombol scroll to top saat navbar tidak aktif
        scrollToTopButton.classList.add('show');
      }
    });
  
    // Tambahkan event listener untuk tombol scroll to top
    scrollToTopButton.addEventListener('click', function() {
      // Scroll ke bagian atas halaman dengan efek smooth
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== Scroll sections ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== Scroll sections ====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove icon dan navbar ketika click link scroll ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  //==================== scroll reveal ====================

  // Ambil semua elemen dengan class "scroll-reveal"
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

  // Fungsi untuk mengecek apakah elemen masuk ke tampilan
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fungsi untuk menunjukkan elemen yang masuk ke tampilan
  function revealElements() {
    scrollRevealElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("reveal-in-view");
      }
    });
  }

  // Tambahkan event listener untuk menunjukkan elemen saat halaman di-scroll
  window.addEventListener("scroll", revealElements);

  // Inisialisasi untuk menunjukkan elemen yang terlihat saat halaman pertama kali dimuat
  revealElements();

  //==================== typed js ====================

  // Fungsi untuk membuat efek teks yang diketik
  function typeText(element, text, delay = 100) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    }
    type();
  }
};

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    // Tampilkan tombol saat halaman di-scroll
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    // Tambahkan event listener untuk tombol scroll ke atas
    scrollToTopButton.addEventListener('click', scrollToTop);
  });
  
  
