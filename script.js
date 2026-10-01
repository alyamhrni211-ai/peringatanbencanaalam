// =====================================
// FILTER BENCANA
// =====================================

const filter =
    document.getElementById("filterBencana");

const cards =
    document.querySelectorAll(".card");

const jumlah =
    document.getElementById("jumlah");


filter.addEventListener("change", function () {

    const pilihan = this.value;

    let total = 0;


    cards.forEach(function (card) {

        const tipe =
            card.getAttribute("data-type");


        if (
            pilihan === "semua" ||
            tipe === pilihan
        ) {

            card.style.display = "block";

            total++;

        } else {

            card.style.display = "none";

        }

    });


    jumlah.textContent =
        total + " Peringatan";

});


// =====================================
// MODAL DETAIL
// =====================================

const modal =
    document.getElementById("modal");

const modalNama =
    document.getElementById("modalNama");

const modalLokasi =
    document.getElementById("modalLokasi");

const modalStatus =
    document.getElementById("modalStatus");

const modalDeskripsi =
    document.getElementById(
        "modalDeskripsi"
    );


function bukaDetail(
    nama,
    lokasi,
    status,
    deskripsi
) {

    modalNama.textContent =
        nama;

    modalLokasi.textContent =
        "📍 " + lokasi;

    modalStatus.textContent =
        status;

    modalDeskripsi.textContent =
        deskripsi;


    modal.classList.add("active");

}


// =====================================
// TUTUP MODAL
// =====================================

function tutupModal() {

    modal.classList.remove("active");

}


// Tutup modal ketika klik di luar
modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            tutupModal();

        }

    }
);


// =====================================
// NOTIFIKASI
// =====================================

const notifikasi =
    document.getElementById(
        "notifikasi"
    );

const pesanNotifikasi =
    document.getElementById(
        "pesanNotifikasi"
    );


function tampilkanNotifikasi(
    pesan
) {

    pesanNotifikasi.textContent =
        pesan;

    notifikasi.classList.add(
        "show"
    );


    // Hilang otomatis setelah 7 detik

    setTimeout(function () {

        tutupNotifikasi();

    }, 7000);

}


function tutupNotifikasi() {

    notifikasi.classList.remove(
        "show"
    );

}


// =====================================
// SIMULASI NOTIFIKASI
// =====================================

// Muncul 3 detik setelah halaman dibuka

setTimeout(function () {

    tampilkanNotifikasi(
        "Terdapat informasi peringatan bencana. Tetap waspada dan ikuti informasi resmi."
    );

}, 3000);


// =====================================
// TOMBOL ESC
// =====================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            tutupModal();

            tutupNotifikasi();

        }

    }
);
