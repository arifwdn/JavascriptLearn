// 1. Object Literal

// let Mahasiswa = {
//     nama: "Doddy",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log("Hallo " + this.nama + ", Selamat Makan!");
//     }
// };
// Tidak efektif untuk object yang berulang/banyak

// 2. Object Function Declaration
// function Mahasiswa(nama, energi) {
//     let Mhs = {};
//     Mhs.nama = nama;
//     Mhs.energi = energi;
//     Mhs.makan = function (porsi) {
//         this.energi += porsi;
//         console.log("Hallo " + this.nama + ", Selamat Makan!");
//     }
//     Mhs.main = function (jam) {
//         this.energi -= jam;
//         console.log("Hallo " + this.nama + ", Selamat Bermain!");
//     }
//     return Mhs;
// }
// Duplikasi fungsi yang tidak terpakai tetap terulang
// Object.create()
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log("Hallo " + this.nama + ", Selamat Makan!");
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log("Hallo " + this.nama + ", Selamat Bermain!");
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log("Hallo " + this.nama + ", Selamat Tidur!");
//     }
// }

// function Mahasiswa(nama, energi) {
//     //menghubungkan object parent untuk mengelola memori lebih efektif
//     let Mhs = Object.create(methodMahasiswa);
//     Mhs.nama = nama;
//     Mhs.energi = energi;

//     return Mhs;
// }
// let arif = Mahasiswa("Arif", 10);

// 3. Constructor Function =>new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log("Hallo " + this.nama + ", Selamat Makan!");
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log("Hallo " + this.nama + ", Selamat Bermain!");
//     }
// }

// let arif = new Mahasiswa("Arif", 10);

// Prototype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("Hallo " + this.nama + ", Selamat Makan!");
// }
// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log("Hallo " + this.nama + ", Selamat Bermain!");
// }
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log("Hallo " + this.nama + ", Selamat Tidur!");;
// }

// let arif = new Mahasiswa("Arif", 10);
// Versi OOP atau Class Object
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return "Hallo " + this.nama + ", Selamat Makan!";
    }
    main(jam) {
        this.energi -= jam;
        return "Hallo " + this.nama + ", Selamat Bermain!";
    }
    tidur(jam) {
        this.energi += jam * 2;
        return "Hallo " + this.nama + ", Selamat Tidur!";
    }
}
let arif = new Mahasiswa("arif", 10);