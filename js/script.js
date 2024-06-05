document.addEventListener("DOMContentLoaded", function() {
  let userName = prompt("Masukkan nama anda:");
  if (userName) {
      document.querySelector(".welcome").textContent = `Hi ${userName}, Welcome To Website Prodi S1 Informatika`;
  }
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.style.background = "rgba(12, 23, 33, 0.8)"; // Atur warna latar belakang dengan transparansi
    header.style.backdropFilter = "blur(0.spx)"; // Atur efek blur
  } else {
    header.style.background = "transparent"; // Kembalikan latar belakang ke transparan
    header.style.backdropFilter = "none"; // Hilangkan efek blur
  }
});

function submitForm() {
  // Ambil nilai dari formulir
  var nama = document.getElementById("nama").value;
  var tanggalLahir = document.getElementById("tanggal-lahir").value;
  var jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  ).value;
  var pesan = document.getElementById("pesan").value;

  // Dapatkan waktu saat ini
  var currentDateTime = new Date();
  var formattedDateTime = currentDateTime.toLocaleString(); // Format waktu saat ini

  // Masukkan data ke dalam Current Info
  var currentInfo = document.querySelector(".current-info");
  currentInfo.querySelector("p:nth-of-type(1)").innerText =
    "Current Time: " + formattedDateTime;
  currentInfo.querySelector("p:nth-of-type(2)").innerText = "Nama: " + nama;
  currentInfo.querySelector("p:nth-of-type(3)").innerText =
    "Tanggal Lahir: " + tanggalLahir;
  currentInfo.querySelector("p:nth-of-type(4)").innerText =
    "Jenis Kelamin: " + jenisKelamin;
  currentInfo.querySelector("p:nth-of-type(5)").innerText = "Pesan: " + pesan;

  // Update teks di Welcome Section
  var welcomeText = document.querySelector(".welcome");
  welcomeText.innerText = "Hi " + nama + ", Welcome To Website";

  // Kembalikan false untuk mencegah pengiriman formulir tradisional
  return false;
}

// Dapatkan tombol
var mybutton = document.getElementById("backToTopBtn");

// Tampilkan tombol ketika pengguna telah melakukan scroll ke bawah 20px dari atas halaman
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Fungsi untuk kembali ke atas saat tombol diklik
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}

// Optional: Jika ingin membuat animasi dimulai ulang saat halaman dimuat ulang
document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.querySelector(".typing-animation");
  const textContent = typingText.textContent;
  typingText.textContent = "";
  let index = 0;
  function type() {
    if (index < textContent.length) {
      typingText.textContent += textContent.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();
});

document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector(".typed");
  const items = typedElement.getAttribute("data-typed-items").split(", ");
  let currentIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    if (typing) {
      if (charIndex < items[currentIndex].length) {
        typedElement.textContent += items[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed
      } else {
        typing = false;
        setTimeout(type, 2000); // Pause before deleting
      }
    } else {
      if (charIndex > 0) {
        typedElement.textContent = items[currentIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(type, 50); // Adjust deleting speed
      } else {
        typing = true;
        currentIndex = (currentIndex + 1) % items.length;
        setTimeout(type, 500); // Pause before typing next item
      }
    }
  }

  type();
});

// Ambil elemen tombol menu
const menuToggle = document.querySelector('.menu-toggle');
// Ambil elemen navigasi
const nav = document.querySelector('nav');

// Tambahkan event listener untuk mengaktifkan toggle menu saat tombol menu diklik
menuToggle.addEventListener('click', () => {
  // Toggle class 'active' pada elemen navigasi
  nav.classList.toggle('active');
});


// slideshow
