// 1. Object Literal

// let Mahasiswa = {
//     nama: "Doddy",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log("Hallo " + this.nama + ", Selamat Makan!");
//     }
// };

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

// 4. Object.create