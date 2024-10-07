function validasiPhoneNumber(phoneNumber) {
    if (!/^\d{10,14}$/.test(phoneNumber)) {
        console.log(
          "Nomor HP tidak valid: Nomor harus terdiri dari 10 hingga 14 digit angka."
        );
        return false;
      }
    
  if (!/^[a-zA-Z]+$/.test(phoneNumber)) {
    console.log("invalid terdapat huruf");
    return false;
  }
  if (phoneNumber.length < 10) {
    console.log(
      "Nomor HP tidak valid: Nomor harus terdiri dari 10 hingga 13 digit angka."
    );
    return false;
  }
  
  return true;
}
console.log(validasiPhoneNumber("089297928"))
console.log(validasiPhoneNumber("09890abcd"))
console.log(validasiPhoneNumber("122344"))
