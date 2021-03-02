// general variable,redeclare,reassign
var nama = 'Aldo';
var nama = 'Reinaldo';
nama = 'Riant';
console.log('Nama aku adalah : ',nama);  
// scope variable, non-redeclare,reassign
let usia='23'
usia =30
console.log(usia)
// non-redeclare, non-reassign
const hari='Senin'
console.log(hari)
//bedanya single quote dan double quote ini harus pakai penjumlahan
var profesi = "Programmer's"
var profesi = 'Programmer\'s'
//Bisa new line khusus back tik kayak variable yang harus di cetak dan gaperlu + untuk nambah string baru
var profesi = `Programmer's
yang ganteng usia : ${usia}
`
console.log(profesi)
//cari panjang string
console.log(profesi.length)
//cek data
console.log(profesi.includes('Pro'))
//split ke array 
console.log(profesi.split(''))
//cek lokasi array 
console.log(profesi.charAt(2))
//mengganti tulisan atau kata
console.log(profesi.replace('usia','umur')) //or
console.log(profesi.replace(/usia/g,'umur'))

//number : integer, float
var berat =80;
var berat=87.8;

console.log(Math.PI)
console.log(Math.pow(4,2))
console.log(Math.random()*10) //ini random sampe 0 kalau mau lebih itu dikalikan
console.log(Math.round(berat)) // untuk pembulatan keatas atau kebawah kalau 5 keatas itu diatas kalau 4 kebawah di bawah
console.log(Math.ceil(berat))//ini dibulatkan keatas semua
console.log(Math.floor(berat))//ini dibulatkan kebawah semua

//arithmatic
console.log(20+(30+"20")) //kalau tambah tanda kurung dan dijumlah sting maka nanti jadi string
//untuk menghasilkan boolean
//1. comparassion operator : <,>,<=,>=,==,===,!=,!==
console.log(5>=5)
//double equal: selama data sama hasilnya true
console.log(5=="5")
//triple equal: selama tipe data sama dan valuenya sama True
console.log(5==="5")

//2. logical operator $$ || !
console.log(5>5&&5<6)
//3. Method boolean
//thrutly
console.log(Boolean(12))//true
console.log(Boolean('Abdi'))//true
console.log(Boolean(['data']))//true
 //falsy
 console.log(Boolean(0))
 console.log(Boolean(''))
 console.log(Boolean(null))//tipe data e object
 console.log(Boolean(undefined))
 
 //cek tipe data
 console.log(typeof(null))