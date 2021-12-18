document.getElementById("button").onclick = function(){
var nama = document.getElementById("nama").value;
var kategori = document.getElementById("kategori").value;
var pemakaian = document.getElementById("pemakaian").value;
var abodemen = 0;
var tarif = 0;
var pajak = 0;
var subtotal = 0;
var tabel = '';

if(nama==" "){
    alert("Kolom nama harus diisi!")
}else if(kategori==" "){
    alert("Kolom kategori harus diisi!")
}else if(pemakaian>30){
    alert("jumlah hari tidak valid")
}

document.getElementById("isinama").innerHTML = nama;
document.getElementById("isikategori").innerHTML = kategori;
document.getElementById("isipemakaian").innerHTML = pemakaian;

if(kategori=="Sosial"){
    abodemen = 10000;
    tarif = 300;
    pajak = 0;
}else if(kategori=="Rumah"){
    abodemen = 30000;
    tarif = 500;
    pajak = 0.10;
}else if(kategori=="Apartemen"){
    abodemen = 50000;
    tarif = 750;
    pajak = 0.15;
}else if(kategori=="Industri"){
    abodemen = 75000;
    tarif = 1000;
    pajak = 0.20;
}else if(kategori=="Villa"){
    abodemen = 100000;
    tarif = 1250;
    pajak = 0.25;
}
for (var i = 1; i <= pemakaian ; i++){
    subtotal = tarif + abodemen;
    tabel += "<tr>";
    tabel += "<td>" + i + "</td>";
    tabel += "<td>" + tarif + "</td>";
    tabel += "<td>" + abodemen + "</td>"; 
    tabel += "<td>" + subtotal + "</td>"; 
    tabel += "</tr>"
    tarif += tarif;
}

document.getElementById("tabel").innerHTML = tabel;
document.getElementById("hasilsubtotal").innerHTML = subtotal;
document.getElementById("hasilpajak").innerHTML = pajak * subtotal;;
document.getElementById("hasilbayar").innerHTML = subtotal + (pajak * subtotal);
}