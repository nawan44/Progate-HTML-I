// Salin definisi class Animal ke bagian dibawah ini
// Pindahkan pendefinisian class Animal ke animal.js dan hapus code dibawah
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Halo");
  }

  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}
