const { tulisPertanyaan, simpanKontak } = require("./contacts");
const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama : ");
  const no = await tulisPertanyaan("Masukkan nomor : ");

  simpanKontak(nama, no);
};

main();
