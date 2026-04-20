document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Default to dark mode if not set
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        html.classList.add('dark');
        updateThemeIcon('dark');
    } else {
        html.classList.remove('dark');
        updateThemeIcon('light');
    }

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fa-regular fa-sun';
        } else {
            themeIcon.className = 'fa-regular fa-moon';
        }
    }

    // --- Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Dynamic Modal Logic ---
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content-body');

    const projectData = {
        project1Modal: {
            title: "Tesda Clone Website",
            image: "images/projects/project1.png",
            desc: "Cloning Website is a front-end clone of the TESDA official website, built for practice in web design, layout replication, and responsive UI structuring.",
            features: [
                "Replicated TESDA homepage and layout",
                "Fully responsive design",
                "Interactive navigation",
                "Semantic HTML structure"
            ],
            stack: "HTML, CSS, Bootstrap, JavaScript",
            link: "https://lynxguerba.github.io/Tesda-Final_Project/"
        },
        project2Modal: {
            title: "Filipino Street Food App",
            image: "images/projects/project2.png",
            desc: "A mobile application designed to showcase and facilitate the ordering of popular Filipino street foods.",
            features: [
                "Browse curated Filipino street food menus",
                "Add to cart and checkout flow",
                "Firebase Login/Register",
                "Admin dashboard (coming soon)"
            ],
            stack: "Dart, Flutter, Firebase"
        },
        cert1Modal: { type: 'img', src: 'images/certificates/cert_img1.png', title: 'Certificate of Achievement' },
        cert2Modal: { type: 'img', src: 'images/certificates/cert_img2.png', title: 'Certificate of Completion' },
        cert3Modal: { type: 'img', src: 'images/certificates/cert_ethical_hacker.jpg', title: 'Ethical Hacker Certificate' },
        cert4Modal: { type: 'img', src: 'images/certificates/cert_packet_tracer.jpg', title: 'Introduction to Packet Tracer' },
        cert5Modal: { type: 'img', src: 'images/certificates/cert_cybersecurity.jpg', title: 'Junior Cybersecurity Analyst' }
    };

    window.openModal = (id) => {
        const data = projectData[id];
        if (!data) return;

        let content = '';
        if (data.type === 'img') {
            content = `
                <div class="text-center">
                    <h3 class="text-xl font-bold mb-6">${data.title}</h3>
                    <img src="${data.src}" class="w-full rounded-2xl shadow-lg border border-gray-100 dark:border-white/5" alt="${data.title}">
                </div>
            `;
        } else {
            content = `
                <img src="${data.image}" class="w-full h-64 object-cover rounded-3xl mb-8 shadow-md" alt="${data.title}">
                <h3 class="text-2xl font-bold mb-4">${data.title}</h3>
                <p class="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">${data.desc}</p>
                <div class="mb-6">
                    <h4 class="font-bold mb-3 uppercase tracking-wider text-xs text-blue-500">Key Features</h4>
                    <ul class="space-y-2">
                        ${data.features.map(f => `<li class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"><i class="fas fa-check text-blue-500"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
                <div class="mb-6">
                    <h4 class="font-bold mb-2 uppercase tracking-wider text-xs text-blue-500">Tech Stack</h4>
                    <p class="text-sm font-medium">${data.stack}</p>
                </div>
                ${data.link ? `
                <div class="mt-8">
                    <a href="${data.link}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
                        <i class="fas fa-external-link-alt"></i> Visit Website
                    </a>
                </div>
                ` : ''}
            `;
        }

        modalContent.innerHTML = content;
        modalBackdrop.classList.remove('hidden');
        modalBackdrop.classList.add('flex');
        
        // Trigger animation
        setTimeout(() => {
            modalBackdrop.style.opacity = '1';
        }, 10);
    };

    window.closeAllModals = () => {
        modalBackdrop.style.opacity = '0';
        setTimeout(() => {
            modalBackdrop.classList.add('hidden');
            modalBackdrop.classList.remove('flex');
        }, 300);
    };

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

});
