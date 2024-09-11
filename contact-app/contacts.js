const fs = require("fs");

const simpanKontak = (nama, no) => {
  const contact = { nama, no };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  const duplicate = contacts.find((contact) => contact.nama === nama);

  if (duplicate) {
    console.log("Nama Tidak Boleh Sama Kembali isi");
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan Data");
};

module.exports = { simpanKontak };
