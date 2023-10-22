document.addEventListener("DOMContentLoaded", function () {
    // referensi formulir
    var form = document.getElementById("registration-form");

    //referensi tabel di halaman Tabel
    var table = parent.document.getElementById("data-table").getElementsByTagName('tbody')[0];


    // untuk meng-handle submit formulir
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah pengiriman formulir ke halaman lain

        // data dari formulir
        var nama = form.elements["nama"].value;
        var nim = form.elements["nim"].value;
        var prodi = form.elements["prodi"].value;
        var email = form.elements["email"].value;
        var password = form.elements["password"].value;
        var jenisKelamin = form.elements["jenis_kelamin"].value;
        var tanggalLahir = form.elements["tanggal_lahir"].value;
        var alamat = form.elements["alamat"].value;

        // baris baru di tabel
        var newRow = table.insertRow(table.rows.length);

        // Masukkan data ke dalam sel-sel tabel
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);

        cell1.innerHTML = nama;
        cell2.innerHTML = nim;
        cell3.innerHTML = prodi;
        cell4.innerHTML = email;
        cell5.innerHTML = password;
        cell6.innerHTML = jenisKelamin;
        cell7.innerHTML = tanggalLahir;
        cell8.innerHTML = alamat;

        // Bersihkan formulir
        form.reset();
    });
});
