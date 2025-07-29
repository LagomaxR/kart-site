// Data for opening hours
const orari = {
    lun: "10:00 - 22:00",
    mar: "Chiuso",
    mer: "10:00 - 22:00",
    gio: "10:00 - 22:00",
    ven: "10:00 - 23:00",
    sab: "09:00 - 23:00",
    dom: "09:00 - 22:00"
};

document.addEventListener('DOMContentLoaded', () => {
    initializeVideo();
    initializeSchedule();
    initializeModal();
    initializeBottomNavScroll();
});

function initializeVideo() {
    const video = document.getElementById('heroVideo');

    if (video) {
        video.addEventListener('loadedmetadata', () => {
            video.play().catch(err => {
                console.log('Autoplay bloccato:', err);
            });
        });

        video.addEventListener('canplay', () => {
            console.log('Video can play');
        });

        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
        });
    }
}

function initializeSchedule() {
    const orariMapping = {
        lun: orari.lun,
        mar: orari.mar,
        mer: orari.mer,
        gio: orari.gio,
        ven: orari.ven,
        sab: orari.sab,
        dom: orari.dom
    };
    Object.entries(orariMapping).forEach(([day, time]) => {
        const el = document.getElementById(day);
        if (el) el.textContent = time;
    });
}

function initializeModal() {
    const overlay = document.getElementById('overlay');
    const hideOverlay = () => overlay.style.display = 'none';

    document.getElementById('open-btn').addEventListener('click', () => overlay.style.display = 'flex');
    document.getElementById('close-btn').addEventListener('click', hideOverlay);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) hideOverlay();
    });
}

function initializeBottomNavScroll() {
    const bottomNav = document.getElementById('bottomNav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollThreshold = documentHeight * 0.25; // 25% from top and 25% from bottom

        if (scrolled > lastScrollY && scrolled > scrollThreshold && scrolled < (documentHeight - scrollThreshold)) {
            // Scrolling down and within the 25%-75% range
            bottomNav.classList.add('hidden');
        } else if (scrolled < lastScrollY || scrolled <= scrollThreshold || scrolled >= (documentHeight - scrollThreshold)) {
            // Scrolling up or outside the 25%-75% range
            bottomNav.classList.remove('hidden');
        }
        lastScrollY = scrolled;
    }, { passive: true });
}
