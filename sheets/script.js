document.addEventListener('DOMContentLoaded', () => {
    initializeSchedule();
});

function initializeSchedule() {
    const orariMapping = { lun, mar, mer, gio, ven, sab, dom };
    Object.entries(orariMapping).forEach(([day, time]) => {
        const el = document.getElementById(day);
        if (el) el.textContent = time;
    });
}
