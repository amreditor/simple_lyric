// Lirik lagu yang akan ditampilkan
const lyrics = "sukiyo   ima anata ni omoi nosete hora sunao ni naru no watashi kono saki motto soba ni ite mo ii ka na? koi to koi ga kasanatte";

// Waktu jeda antara setiap karakter (dalam milidetik)
const delay = 200;

// Indeks karakter saat ini
let currentIndex = 0;

// Variabel untuk menyimpan teks yang sudah ditampilkan
let displayedText = "";

// Fungsi untuk menampilkan karakter berikutnya
function typeNextCharacter() {
    // Jika indeks mencapai akhir lirik, hentikan interval
    if (currentIndex >= lyrics.length) {
        clearInterval(interval);
    } else {
        // Tambahkan karakter berikutnya ke displayedText
        displayedText += lyrics[currentIndex];
        
        // Tampilkan teks yang telah dikumpulkan
        console.clear(); // Membersihkan konsol
        console.log(displayedText);
        
        // Naikkan indeks karakter
        currentIndex++;
    }
}

// Mulai interval untuk mengetik karakter satu per satu
const interval = setInterval(typeNextCharacter, delay);
