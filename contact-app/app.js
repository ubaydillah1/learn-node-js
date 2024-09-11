const yargs = require("yargs");
const { simpanKontak, listContacts } = require("./contacts");

yargs.command({
  command: "add",
  describe: "Menambahkan Kontak Baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    no: {
      describe: "No Hp",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    simpanKontak(argv.nama, argv.no);
  },
});

// menampilkan daftar semua nama dan no hp contact
yargs.command({
  command: "list",
  describe: "Menampilkan kontak",
  handler() {
    listContacts();
  },
});

yargs.parse();
