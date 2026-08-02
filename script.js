/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.querySelector('.navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

/* ===== MOBILE HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ===== DARK MODE TOGGLE ===== */
const darkToggle = document.getElementById('darkToggle');
const darkIcon = darkToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkIcon.classList.remove('fa-moon');
    darkIcon.classList.add('fa-sun');
}

darkToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkIcon.classList.remove('fa-sun');
        darkIcon.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkIcon.classList.remove('fa-moon');
        darkIcon.classList.add('fa-sun');
    }
});

/* ===== TYPING EFFECT (vars) ===== */
const typingText = document.querySelector('.typing-text');
const words = ['Web Development', 'Mahasiswa Sistem Informasi', 'Web Enthusiast'];

/* ===== LANGUAGE TOGGLE ===== */
const translations = {
    id: {
        'htmlLang': 'id',
        'pageTitle': 'Arifudin - Web Development',
        'pageDesc': 'Portofolio Arifudin - Mahasiswa Sistem Informasi & Web Development. Lihat proyek web, skills, dan pengalaman saya.',
        'nav.home': 'Beranda', 'nav.about': 'Tentang', 'nav.skills': 'Skills',
        'nav.portfolio': 'Portofolio', 'nav.experience': 'Pengalaman',
        'nav.certificates': 'Sertifikat', 'nav.contact': 'Kontak',
        'hero.greeting': 'Halo, saya', 'hero.title': 'Saya',
        'hero.desc': 'Mahasiswa Sistem Informasi yang fokus pada pengembangan website modern. Saya menciptakan pengalaman digital yang bersih, responsif, dan user-friendly.',
        'hero.btnPortfolio': 'Lihat Portofolio', 'hero.btnContact': 'Hubungi Saya',
        'about.title': 'Tentang Saya',
        'about.p1': 'Saya <strong>Arifudin</strong>, mahasiswa <strong>Sistem Informasi Institut Teknologi Bisnis Banten</strong> yang memiliki ketertarikan besar di dunia pengembangan web. Saat ini saya fokus mempelajari <strong>Web Development</strong> dan membangun fondasi yang kuat di ekosistem web modern.',
        'about.p2': 'Saya percaya bahwa website yang baik adalah perpaduan antara fungsionalitas yang solid dan desain yang menarik. Setiap baris kode yang saya tulis adalah upaya untuk menciptakan pengalaman digital yang bermakna bagi penggunanya.',
        'about.p3': 'Di luar coding, saya menikmati mengeksplorasi teknologi baru, membaca dokumentasi, dan berbagi pengetahuan dengan sesama developer.',
        'about.name': 'Nama', 'about.major': 'Prodi', 'about.majorValue': 'Sistem Informasi',
        'about.focus': 'Fokus', 'about.focusValue': 'Web Development',
        'about.email': 'Email', 'about.status': 'Status', 'about.statusValue': 'Mahasiswa',
        'skills.title': 'Skills', 'skills.subtitle': 'Teknologi yang saya kuasai dan pelajari',
        'portfolio.title': 'Portofolio', 'portfolio.subtitle': 'Beberapa proyek yang pernah saya kerjakan',
        'portfolio.p1title': 'Pemesanan Tiket Pesawat',
        'portfolio.p1desc': 'Aplikasi pemesanan tiket pesawat dengan fitur pencarian jadwal, pemilihan kursi, dan pembayaran online.',
        'portfolio.p2title': 'Sistem Perpustakaan',
        'portfolio.p2desc': 'Aplikasi manajemen perpustakaan berbasis web dengan fitur CRUD buku, anggota, dan peminjaman.',
        'portfolio.p3title': 'Toko E-commerce',
        'portfolio.p3desc': 'Aplikasi toko online dengan fitur katalog produk, keranjang belanja, checkout, dan manajemen stok barang.',
        'exp.title': 'Pengalaman Belajar', 'exp.subtitle': 'Perjalanan saya dalam dunia pemrograman',
        'exp.t1title': 'Mulai Belajar HTML & CSS',
        'exp.t1desc': 'Memulai perjalanan dengan dasar-dasar web development. Membuat halaman web sederhana dan memahami struktur HTML serta styling CSS.',
        'exp.t2title': 'Belajar JavaScript',
        'exp.t2desc': 'Mendalami JavaScript untuk memberikan interaktivitas pada website. Mulai dari DOM manipulation hingga konsep dasar programming.',
        'exp.t3title': 'Belajar PHP & MySQL',
        'exp.t3desc': 'Mulai belajar backend development dengan PHP dan database MySQL. Membangun aplikasi web dinamis dengan konsep CRUD.',
        'exp.t4title': 'Belajar Laravel',
        'exp.t4desc': 'Mempelajari framework Laravel untuk pengembangan web yang lebih terstruktur. Membangun project sistem informasi perpustakaan.',
        'exp.t5title': 'Memperdalam Web Development',
        'exp.t5desc': 'Fokus pada Web Development dengan mempelajari CSS Framework, responsive design, dan modern JavaScript.',
        'exp.now': 'Sekarang', 'exp.t6title': 'Terus Belajar & Berkarya',
        'exp.t6desc': 'Terus mengasah skill dan mengerjakan berbagai project untuk memperkuat portofolio sebagai Web Development.',
        'cert.title': 'Sertifikat', 'cert.subtitle': 'Sertifikat pembelajaran yang saya peroleh',
        'cert.detail': '9 jam pelatihan | Sertifikat Penyelesaian', 'cert.aria': 'Buka sertifikat ukuran penuh',
        'contact.title': 'Hubungi Saya',
        'contact.subtitle': 'Punya pertanyaan atau ingin bekerja sama? Silakan kirim pesan!',
        'contact.namePh': 'Nama Anda', 'contact.emailPh': 'Email Anda', 'contact.msgPh': 'Pesan Anda',
        'contact.send': 'Kirim Pesan', 'contact.location': 'Lokasi', 'contact.available': 'Tersedia untuk',
        'footer.rights': 'Semua hak dilindungi.',
        'typewords': ['Web Development', 'Mahasiswa Sistem Informasi', 'Web Enthusiast']
    },
    en: {
        'htmlLang': 'en',
        'pageTitle': 'Arifudin - Web Development',
        'pageDesc': 'Arifudin Portfolio - Information Systems Student & Web Development. See my web projects, skills, and experience.',
        'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio', 'nav.experience': 'Experience',
        'nav.certificates': 'Certificates', 'nav.contact': 'Contact',
        'hero.greeting': 'Hello, I am', 'hero.title': 'I am',
        'hero.desc': 'Information Systems student focused on modern web development. I create clean, responsive, and user-friendly digital experiences.',
        'hero.btnPortfolio': 'View Portfolio', 'hero.btnContact': 'Contact Me',
        'about.title': 'About Me',
        'about.p1': 'I am <strong>Arifudin</strong>, an <strong>Information Systems student at Institut Teknologi Bisnis Banten</strong> with a great interest in web development. I am currently focused on learning <strong>Web Development</strong> and building a strong foundation in the modern web ecosystem.',
        'about.p2': 'I believe a good website is a blend of solid functionality and attractive design. Every line of code I write is an effort to create a meaningful digital experience for its users.',
        'about.p3': 'Outside of coding, I enjoy exploring new technologies, reading documentation, and sharing knowledge with fellow developers.',
        'about.name': 'Name', 'about.major': 'Major', 'about.majorValue': 'Information Systems',
        'about.focus': 'Focus', 'about.focusValue': 'Web Development',
        'about.email': 'Email', 'about.status': 'Status', 'about.statusValue': 'Student',
        'skills.title': 'Skills', 'skills.subtitle': 'Technologies I master and study',
        'portfolio.title': 'Portfolio', 'portfolio.subtitle': 'Some projects I have worked on',
        'portfolio.p1title': 'Airline Ticket Booking',
        'portfolio.p1desc': 'Airline ticket booking app with schedule search, seat selection, and online payment features.',
        'portfolio.p2title': 'Library System',
        'portfolio.p2desc': 'Web-based library management app with CRUD features for books, members, and borrowing.',
        'portfolio.p3title': 'E-commerce Store',
        'portfolio.p3desc': 'Online store app with product catalog, shopping cart, checkout, and stock management features.',
        'exp.title': 'Learning Experience', 'exp.subtitle': 'My journey in programming',
        'exp.t1title': 'Started Learning HTML & CSS',
        'exp.t1desc': 'Started the journey with web development fundamentals. Built simple web pages and learned HTML structure and CSS styling.',
        'exp.t2title': 'Learned JavaScript',
        'exp.t2desc': 'Dived into JavaScript to add interactivity to websites. From DOM manipulation to basic programming concepts.',
        'exp.t3title': 'Learned PHP & MySQL',
        'exp.t3desc': 'Started learning backend development with PHP and MySQL database. Built dynamic web apps with CRUD concepts.',
        'exp.t4title': 'Learned Laravel',
        'exp.t4desc': 'Learned the Laravel framework for more structured web development. Built a library information system project.',
        'exp.t5title': 'Deepened Web Development',
        'exp.t5desc': 'Focused on Web Development by learning CSS frameworks, responsive design, and modern JavaScript.',
        'exp.now': 'Present', 'exp.t6title': 'Keep Learning & Creating',
        'exp.t6desc': 'Continuously sharpening skills and working on projects to strengthen my portfolio as a Web Developer.',
        'cert.title': 'Certificates', 'cert.subtitle': 'Certificates I have earned',
        'cert.detail': '9 hours training | Certificate of Accomplishment', 'cert.aria': 'Open certificate in full size',
        'contact.title': 'Contact Me',
        'contact.subtitle': 'Have a question or want to collaborate? Send me a message!',
        'contact.namePh': 'Your Name', 'contact.emailPh': 'Your Email', 'contact.msgPh': 'Your Message',
        'contact.send': 'Send Message', 'contact.location': 'Location', 'contact.available': 'Available for',
        'footer.rights': 'All rights reserved.',
        'typewords': ['Web Development', 'Information Systems Student', 'Web Enthusiast']
    }
};

const langToggle = document.getElementById('langToggle');
const savedLang = localStorage.getItem('lang') || 'id';

function applyLang(lang) {
    const t = translations[lang];
    document.documentElement.setAttribute('lang', t.htmlLang);
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', t.pageDesc);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });
    if (langToggle) langToggle.value = lang;
    words.length = 0;
    words.push(...t.typewords);
}

langToggle.addEventListener('change', () => {
    const lang = langToggle.value;
    localStorage.setItem('lang', lang);
    applyLang(lang);
});

applyLang(savedLang);

/* ===== TYPING EFFECT ===== */
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
        return;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();

/* ===== SCROLL REVEAL ANIMATION ===== */
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

/* ===== SKILL BAR ANIMATION ===== */
function animateSkillBars() {
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;

        if (isVisible && (bar.style.width === '0px' || bar.style.width === '')) {
            const targetWidth = bar.getAttribute('data-progress');
            bar.style.width = targetWidth;
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ===== BACK TO TOP ===== */
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) return;

    const text = `Halo, saya ${name}%0AEmail: ${email}%0APesan: ${message}`;
    const waUrl = `https://wa.me/6281410230548?text=${text}`;

    window.open(waUrl, '_blank');
    contactForm.reset();
});
