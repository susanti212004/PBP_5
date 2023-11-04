// app.js
const Tambah = require('./module1');
const Kurang = require('./module2');
const Bagi = require('./module3');
const Kali = require('./module4');

var angka1 = 10;
var angka2 = 4;

console.log("Di Bawah ini Hasil penjumlahan : ");
console.log(Tambah(angka1, angka2));
console.log("Di Bawah ini Hasil Pengurangan : ");
console.log(Kurang(angka1, angka2));
console.log("Di Bawah ini Hasil Pembagian : ");
console.log(Bagi(angka1, angka2));
console.log("Di Bawah ini Hasil Perkalian : ");
console.log(Kali(angka1, angka2));