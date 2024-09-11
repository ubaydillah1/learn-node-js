// core module

// file system
const fs = require("fs");

// try {
//   fs.writeFileSync("data/test.txt", "asynchronus");
// } catch (err) {
//   console.log(err);
// }

// fs.writeFile("data/test.txt", "asynchronus", (err) => {
//   console.log(err);
// });

// membaca isi file
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// const data = fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log(data);

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Masukkan nomor hp anda : ", (no) => {
    const contact = { nama, no };
    const file = fs.readFileSync("data/contact.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
    rl.close();
  });
});
