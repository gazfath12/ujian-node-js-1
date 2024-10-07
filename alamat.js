function validateAlamat(address) {
  if(address.length === 0){
    console.log("alamat tidak valid: alamat tidak boleh kosong")
    return false;
  } 
  if (address.length < 10) {
    console.log(
      "Alamat tidak valid: Alamat harus terdiri dari minimal 10 karakter."
    );
    return false;
  }
  console.log("alamat valid")
  return true;
}
// output
console.log(validateAlamat("jl merdeka no.10")) // alamat valid // true
console.log(validateAlamat(""))//alamat tidak valid:alamat tidak boleh kosong // false
console.log(validateAlamat("jl lombi"))// alamat tidak valid:alamat minimal 10 karakter // false
