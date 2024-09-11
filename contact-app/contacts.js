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

const dirPath = "./data";
const dataPath = "./data/contacts.json";

// membuat folder jika belum ada
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file json jika belum ada
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// const pertanyaan1 = () => {
//   return new Promise((resolve) => {
//     rl.question("Masukkan nama anda : ", (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaan2 = () => {
//   return new Promise((resolve) => {
//     rl.question("Masukkan nomor anda : ", (noHp) => {
//       resolve(noHp);
//     });
//   });
// };

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanKontak = (nama, no) => {
  const contact = { nama, no };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  rl.close();
};

module.exports = { tulisPertanyaan, simpanKontak };
