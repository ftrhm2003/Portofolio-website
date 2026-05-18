const daftarProjek = [
    {
        judul: "MTS ASSADAH WEBSITE",
        desc: "Integrated School Ecosystem: Landing Page, E-Library, & PPDB. Built with JS, PHP, MySQL, & Google Drive API.",
        img: "assets/assadahweb.jpeg",
        link: "https://github.com/ftrhm2003/assaadah.git"
    },
    {
        judul: "PENTO STORE WEBSITE",
        desc: "Pento Store: A professional retail landing page featuring advanced CSS and modern aesthetic design.",
        img: "assets/pento.png",
        link: "https://github.com/ftrhm2003/Store_page.git"
    },
    {
        judul: "INDOCULINARY WEBSITE",
        desc: "Integrated Restaurant Web & Reservation Suite: Delivering seamless booking experiences via HTML, CSS, and MySQL.",
        img: "assets/indoculinary.png",
        link: "https://last-project-crud.web.app"
    },
    {
        judul: "THE-WATCHER WEBSITE",
        desc: "Responsive Movie Landing Page: A cinematic web experience optimized for all devices using HTML, CSS, and JavaScript.",
        img: "assets/thewatcher.png",
        link: "https://github.com/ftrhm2003/The-watcher.git"
    },
    {
        judul: "THE-WATCHER UI/UX APP DESIGN",
        desc: "The Watcher UI/UX design for a movie streaming app, featuring a high-fidelity interactive prototype built entirely in Figma.",
        img: "assets/figma.png",
        link: "https://www.figma.com/design/D9cLWsfSC2m2idd6xfNFq2/Project?node-id=2-5541&t=1hRzUELzWWIf8eoM-1"
    },
    {
        judul: "DUITS-QIU MONEY MANAGAMENT APP",
        desc: "Money Manager: A native Android application for seamless expense and income tracking, powered by Kotlin.",
        img: "assets/duits.png",
        link: "https://drive.google.com/drive/folders/1AK7bwECcVjhxyDepHpZfgr7z2i3Qkkeq"
    },
    {
        judul: "ASELOLE TRAVEL WEBSITE",
        desc: "Aselole Travel: A comprehensive booking platform and promotional landing page built with HTML, CSS, and JavaScript.",
        img: "assets/aselole.png",
        link: "https://github.com/ftrhm2003/aselole-travel-web.git"
    },
    {
        judul: "PERSONAL BLOG WEBSITE",
        desc: "Personal Blog: A high-performance blogging platform built with Laravel and styled with Tailwind CSS.",
        img: "assets/blog.png",
        link: "https://github.com/ftrhm2003/Personal_blog.git"
    },
    {
        judul: "AE-SYSTEM INVENTORY WEBSITE",
        desc: "AE System: A comprehensive inventory management platform for tracking stock, shipments, and retail sales using PHP and MySQL.",
        img: "assets/aesistem.png",
        link: "https://github.com/ftrhm2003/AE_system_inventory.git"
    },
    {
        judul: "JNT CARGO OUTLET ATTENDANCE WEBSITE",
        desc: "TimeTrack: A attendance system with photo-logging features, powered by PHP, HTML, CSS, and MySQL.",
        img: "assets/absensi.png",
        link: "https://github.com/ftrhm2003/Absensi_foto.git"
    },
    {
        judul: "VPN UI/UX APP DESIGN",
        desc: "Created detailed high-fidelity screen designs and custom UI components for a VPN application, crafted entirely from scratch using Figma.",
        img: "assets/vpn.png",
        link: "https://www.figma.com/design/cvLjW5z89HDzxcR0cTT9gc/Vpntreee?node-id=202-2&t=8Th7gJvbQnvnh8HV-1"
    },
    {
        judul: "FORM BUILDER WHATSAPP INTEGRATED",
        desc: "WhatsApp Form Builder: A powerful tool for creating custom forms integrated with WhatsApp, allowing seamless data collection and automated Excel reporting.",
        img: "assets/form.png",
        link: "under-devlopment.html"
    }
];

let indexAktif = 0; 
const jumlahPerHalaman = 2; 


function tampilkanKartu() {
    const wrapper = document.getElementById('card-wrapper');
    
    const dataTampil = daftarProjek.slice(indexAktif, indexAktif + jumlahPerHalaman);

    const html = dataTampil.map(projek => `
        <div class="card">
            <div class="card-img">
                <img src="${projek.img}" alt="">
            </div>
            <div class="card-desk">
                <h4>${projek.judul}</h4>
                <p>${projek.desc}</p>
                <div class="see-button">
                    <a href="${projek.link}" target="_blank"> 
                        <button>see more</button>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    wrapper.innerHTML = html;
}

tampilkanKartu();

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

btnNext.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    if (indexAktif + jumlahPerHalaman < daftarProjek.length) {
        indexAktif += jumlahPerHalaman; 
        tampilkanKartu(); 
    } else {
        indexAktif = 0;
        tampilkanKartu();
    }
});

btnPrev.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (indexAktif > 0) {
        indexAktif -= jumlahPerHalaman; 
        tampilkanKartu(); 
    } else {
        indexAktif = Math.floor((daftarProjek.length - 1) / jumlahPerHalaman) * jumlahPerHalaman;
        tampilkanKartu();
    }

});

const hamburger = document.getElementById('hamburger');
const menuWrapper = document.getElementById('menu-wrapper');

hamburger.addEventListener('click', () => {
    menuWrapper.classList.toggle('active');
    
    // Opsional: Animasi hamburger jadi silang
    hamburger.classList.toggle('is-active');
});


