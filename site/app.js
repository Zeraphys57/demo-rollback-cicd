const VERSION = "4.0.0";

// Total belanja = harga x jumlah, lalu dipotong diskon (persen)
function hitungTotal(harga, jumlah, diskonPersen) {
  const subtotal = harga * jumlah;
  return subtotal - (subtotal * diskonPersen) / 100;
}

const hasil = hitungTotal(50000, 2, 10);
const benar = hasil === 90000; // 2 x Rp 50.000 diskon 10% seharusnya Rp 90.000

document.getElementById("versi").textContent = "Versi " + VERSION;
document.getElementById("hasil").textContent =
  "2 x Rp 50.000, diskon 10% = Rp " + hasil.toLocaleString("id-ID") +
  (benar ? " (benar)" : " (SALAH, seharusnya Rp 90.000)");
document.body.style.background = benar ? "#16a34a" : "#dc2626";
