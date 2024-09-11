const yargs = require("yargs");
const { simpanKontak } = require("./contacts");

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

yargs.parse();
