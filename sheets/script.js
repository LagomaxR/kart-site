document.addEventListener('DOMContentLoaded', () => {
    initializeSchedule();
    initializeModal();
    initializeBottomNavScroll();
});

function initializeSchedule() {
    const orariMapping = { lun, mar, mer, gio, ven, sab, dom };
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
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrolled / documentHeight) * 100;
        
        if (scrollPercentage > 25 && scrollPercentage < 75) {
            bottomNav.classList.add('hidden');
        } else {
            bottomNav.classList.remove('hidden');
        }
    }, { passive: true });
}
