$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".fixed-top").addClass("navbar-light bg-light").removeClass("navbar-dark");
    } else {
        $(".fixed-top").addClass("navbar-dark").removeClass("navbar-light bg-light");
    }
});

$(document).on('click', 'a', function(event){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -70
    }, 1250);

});

// DATA SKILL
const skill = [
    {
        skill: "English",
        persentase: 40
    },
    {
        skill: "HTML5 + CSS3",
        persentase: 70
    },
    {
        skill: "JavaScript ES6",
        persentase: 40
    },
    {
        skill: "Bootstrap 4",
        persentase: 70
    },
    {
        skill: "jQuery",
        persentase: 40
    },
    {
        skill: "PHP Native + MYSQL",
        persentase: 50
    },
    {
        skill: "Laravel",
        persentase: 60
    },
    {
        skill: "GIT",
        persentase: 40
    },
    {
        skill: "Content Write",
        persentase: 40
    },
    {
        skill: "Design",
        persentase: 80
    },
    {
        skill: "Java",
        persentase: 20
    },
    {
        skill: "Softskill",
        persentase: 80
    },
    {
        skill: "Responsible",
        persentase: 90
    },
    
];

skill.forEach((i) => {
    $("#skill_saya").append(`
    <div class="col-4 col-md-4">
        <div class="progressBar">
        <h4>`+ i.skill +`</h4>
        <div class="progressBarContainer">
            <div class="progressBarValue value-`+ i.persentase +`">`+ i.persentase +`%</div>
        </div>
        </div>
    </div>
    `);
})
// AKHIR

// DATA PORTFOLIO
const project = [
    {
        nama: "Codespace",
        gambar: "img/content/codespace.png",
        tipe: "Laravel + REST API",
        deskripsi: "Aplikasi web yang terintegrasi dengan API HERE Maps melalui studi kasus pembuatan aplikasi daftar lokasi tempat ngoding yang asyik."
    },
    {
        nama: "Aplikasi Pengaduan Masyarakat",
        gambar: "img/content/adu.png",
        tipe: "Laravel Project",
        deskripsi: "Aplikasi ini merupakan aplikasi yang dapat mengelola pendataan pengaduan dari masyarakat, selain dibuat sesimple mungkin, aplikasi ini juga lumayan dapat bekerja dengan baik untuk dibilang sebuah Aplikasi Pengaduan Masyarakat."
    },
    {
        nama: "Aplikasi Kasir Restourant Management",
        gambar: "img/content/resto.png",
        tipe: "Laravel Project",
        deskripsi: "Aplikasi Kasir Restourant Management System yang dibuat oleh Saya (Ryan Dinul Fatah) Untuk memenuhi tugas Sekolah tepatnya Project Akhir UJIKOM 2020 saya di SMKN 1 Padaherang ini."
    },
    {
        nama: "Sistem pendeteksi dini pergerakan tanah longsor",
        gambar: "img/content/IMG-20190926-WA0004.jpg",
        tipe: "Internet of Things (IoT) Project",
        deskripsi: "Sistem pendeteksi dini pergerakan tanah longsor SMKN 1 padaherang yang telah saya buat untuk PAMERAN SMK KARYA INOVASI (anak PKL) di STMIK AKAKOM YOGYAKARTA, alat pendeteksi yang bisa dimonitoring melalui web dengan REALTIME"
    }
];

project.forEach((i) => {
    $("#portfolio_saya").append(`
    <div class="card brd wow bounceInLeft mb-4" data-wow-duration='3s'>
        <div class="card-body">
        <div class="row">
            <div class="col-md-4">
            <img class="img-thumbnail" src="`+ i.gambar +`" alt="`+ i.nama +`">
            </div>
            <div class="col">
            <h3>`+ i.nama +`</h3>
            <span class="badge badge-dark">`+ i.tipe +`</span>
            <p class="blockquote">`+ i.deskripsi +`.</p>
            </div>
        </div>
        </div>
    </div>
    `);
    console.log("Perulangan Data Project Berhasil di Proses")
});

$('#github').on('click', function (e) {
    window.open('https://github.com/Ryandinulfatah12?tab=repositories',"_blank");
});
// END PORTFOLIO

// SERTIFIKAT
const item = [
    {
        image: "img/cert/dicoding_web.png",
        tentang: "Kelas Dasar Pemrograman Web Dicoding"
    },
    {
        image: "img/cert/dicoding_web_2.png",
        tentang: "Fundamental Front-end Development Dicoding"
    },
    {
        image: "img/cert/solid.png",
        tentang: "Kelas Belajar Prinsip Pemrograman SOLID Dicoding"
    },
    {
        image: "img/cert/google.png",
        tentang: "Fundamental Digital Marketing Google Digital Garage"
    },
    {
        image: "img/cert/eng.png",
        tentang: "Basic English Online Course for Programmer YEC.CO.ID"
    },
    {
        image: "img/cert/codepol.png",
        tentang: "Course HERE Developer Codepolitan"
    }
];


item.forEach((i) => {
    $("#sertifikat").append(`
    <div class="col-3 col-md-3">
        <a href="` +i.image+  `" data-lightbox="image-1" data-title="`+ i.tentang +`"><img class="img-fluid sert img-thumbnail" src="`+ i.image +`"></a>
    </div> 
    `);
    console.log('Perulangan Data Sertifikat Berhasil diproses');
});
// END SERTIFIKAT

// SOCIAL MEDIA
const sosmed = [
    {
        icon: "img/icon/whatsapp.png",
        tujuan: "https://wa.me/6288229019740",
        alt: "Kontak WhatsApp Saya"
    },
    {
        icon: "img/icon/instagram.png",
        tujuan: "https://www.instagram.com/ryandinulfatah12/",
        alt: "Akun Instagram Saya"
    },
    {
        icon: "img/icon/facebook.png",
        tujuan: "https://web.facebook.com/ryan.dinulfatah",
        alt: "Akun Facebook Saya"
    },
    {
        icon: "img/icon/pinterest.png",
        tujuan: "https://id.pinterest.com/rdinulfatah12/",
        alt: "Akun Pinterest Saya"
    },
    {
        icon: "img/icon/linkedin.png",
        tujuan: "https://www.linkedin.com/in/ryan-dinul-fatah-2177ab198/",
        alt: "Akun LinkedIn Saya"
    },
    {
        icon: "img/icon/youtube.png",
        tujuan: "https://www.youtube.com/channel/UCZsmoNL12lW3QIUYj0DBuoQ",
        alt: "Channel Youtube Saya"
    },
];

sosmed.forEach((i) => {
    $("#social_media").append(`
    <div class="col">
        <a class="wow fadeInLeftBig" data-wow-duration='3s' href="`+  i.tujuan +`" target="_blank"><img src="`+ i.icon +`" alt="`+ i.alt +`"></a>
    </div>
    `);
})
// END SOSMED
