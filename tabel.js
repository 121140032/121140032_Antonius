document.addEventListener("DOMContentLoaded", function () {
    // referensi tabel di halaman Tabel
    var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];

    // contoh data
    var dataMahasiswa = [
        {
            nama: "Antonius Munthe",
            nim: "121140032",
            prodi: "Teknik Informatika",
            email: "antonius.121140032@student.itera.ac.id",
            password: "admin123",
            jenisKelamin: "Laki-Laki",
            tanggalLahir: "2003-03-01",
            alamat: "Jl. Durian Raya. Pemda Way Hui"
        },
        {
            nama: "Rozan Zaky",
            nim: "121140031",
            prodi: "Teknik Informatika",
            email: "rozan.121140031@student.itera.ac.id",
            password: "admin1234",
            jenisKelamin: "Laki-Laki",
            tanggalLahir: "2003-09-10",
            alamat: "Way Kandis"
        }
    ];

    // Menampilkan data pada tabel
    for (var i = 0; i < dataMahasiswa.length; i++) {
        var data = dataMahasiswa[i];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);

        cell1.innerHTML = data.nama;
        cell2.innerHTML = data.nim;
        cell3.innerHTML = data.prodi;
        cell4.innerHTML = data.email;
        cell5.innerHTML = data.password;
        cell6.innerHTML = data.jenisKelamin;
        cell7.innerHTML = data.tanggalLahir;
        cell8.innerHTML = data.alamat;
    }
});
