// Inisialisasi tampilan dengan angka 0
document.getElementById('display').value = '0';

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Jika tampilan saat ini adalah 0, ganti dengan angka yang diinput
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0'; // Reset tampilan ke 0
}

function deleteLast() {
    const display = document.getElementById('display');
    // Hapus karakter terakhir
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0'; // Jika tidak ada angka tersisa, set ke 0
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/x/g, '*').replace(/√/g, 'Math.sqrt'));
    } catch (error) {
        alert('Terjadi kesalahan dalam perhitungan.'); // Tampilkan pop-up kesalahan
        clearDisplay(); // Reset tampilan ke 0
    }
}

// Event listener untuk mendeteksi penekanan tombol keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Cek jika tombol yang ditekan adalah angka atau operator
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendToDisplay(key);
    }

    // Cek jika tombol Enter ditekan
    if (key === 'Enter') {
        calculateResult();
    }

    // Cek jika tombol Backspace ditekan
    if (key === 'Backspace') {
        deleteLast();
    }

    // Cek jika tombol C ditekan untuk clear
    if (key.toUpperCase() === 'C') {
        clearDisplay();
    }
});

