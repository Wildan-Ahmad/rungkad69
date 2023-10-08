var i = true;

alert(`Selamat Datang di Rungkad69.net`);
var d = prompt(`Mau Depo Berapa?:`);
var saldo = parseInt(d);

while (i) {
  if (saldo > 0) {
    //tentukan saldo awalmu
    alert(`Saldo yang anda punya Rp.${saldo}`);
    var b = prompt(`Masukkan Bet Anda:`);
    var bet = parseInt(b);

    if (saldo >= bet) {
      saldo = saldo - bet;
      var t = 4;

      //mengambil angka dari komputer
      alert(`Tebak angka 1 - 10 \nAnda punya ${t - 1} kesempatan!!`);
      var comp = Math.floor(Math.random() * 10) + 1;

      //pengulangan per ronde
      while (t > 1) {
        //user memilih angka
        var p = prompt(`Masukkan angka tebakan:`);
        var inputNumb = parseInt(p);

        var hasil = ``;

        //rule permainan
        if (inputNumb == comp) {
          saldo = saldo + bet * 2;
          hasil = `Anda benar \nangka yang dicari adalah ${comp}`;
          t = 0;
        } else if (inputNumb > comp) {
          t = t - 1;
          hasil = `Angka terlalu Tinggi \nmasih ada ${t - 1} kesempatan`;
        } else if (inputNumb < comp) {
          t = t - 1;
          hasil = `Angka terlalu Rendah \nmasih ada ${t - 1} kesempatan`;
        } else {
          alert(`Angka yang dimasukkan salah`);
          t = 0;
        }
        //menampilkan hasil permainan
        if (t == 1) {
          alert(`Anda gagal menjawab \nangka yang dicari adalah ${comp}`);
        } else {
          alert(hasil);
        }
      }
    } else {
      alert(`Saldo Anda tidak mencukupi harap depo`);
      var i = confirm(`Mau main lagi?`);
    }
  } else {
    alert(`Saldo Kamu habis. \njangan menyerah masih ada esok hari!!`);
    i = false;
  }
}
alert(`Refresh untuk depo lagi \nTerima Kasih atas uang Anda <3`);
