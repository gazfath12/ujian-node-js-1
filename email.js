function validasiEmail(email) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("Email tidak valid: Format email salah.");
    return false;
  }
  if (email.length === 0) {
    console.log("invalid kosong");
  }
  console.log("email valid")
  return true;
}
console.log(validasiEmail("gaza@gmail.coom")) // valid
console.log(validasiEmail("gaza@com"))//valid
console.log(validasiEmail("user"))//invalid
console.log(validasiEmail(""))//invalid