// --- KONFIGURASI ---
const CONFIG = {
    USE_API: true, // Pastikan ini true untuk connect ke Node.js/PostgreSQL
    API_URL: "https://landipagekonservasisulawesiback-production.up.railway.app",
    STORAGE_KEY: 'qwerty123'
};

// --- HELPER FUNCTIONS ---
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

}
