
function validasiPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 9 && !/^[a-zA-Z]$/.test(phoneNumber)) {
        console.log("invalid terdapat huruf di dalam angka");
        return false;
      }
    if (phoneNumber.length < 10) {
        console.log(
          "Nomor HP tidak valid// kependekan"
        );
        return false;
      };
      
    
    
    
  
    console.log("valid");
    return true;
  }
  console.log(validasiPhoneNumber("08929792811111")); // valid 
  console.log(validasiPhoneNumber("09811abc")); // invalid huruf di dalam angka
  console.log(validasiPhoneNumber("123456789"));// nomor tidak valid kependekan
  