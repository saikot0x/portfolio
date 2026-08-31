
const sheets = document.querySelectorAll('.sheet');
const sheetObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            sheetObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

sheets.forEach((sheet) => {
    sheet.style.opacity = '0';
    sheet.style.transform = 'translateY(24px)';
    sheet.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sheetObserver.observe(sheet);
});

// ---------- Table rows ----------
document.querySelectorAll('table tbody').forEach((tbody) => {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row, i) => {
        row.style.opacity = '0';
        row.style.transition = `opacity 0.4s ease ${i * 0.05}s`;
    });
    const rowObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                rows.forEach((row) => { row.style.opacity = '1'; });
                rowObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    rowObserver.observe(tbody);
});
