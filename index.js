// soalvalidasi nama

function validateNama(name) {
    if (name.length > 3 || !/^[a-zA-Z]+$/.test(name)) {
        console.log(
          "Nama  valid."
        );
        return false;
      }
       if (name.length < 3 ) {
        console.log(
          "Nama tidak valid: Nama harus terdiri dari minimal 3 karakter dan hanya berisi huruf."
        );
        return false;
      }

      if (!/^\d{a-zA-Z}$/.test(name) ) {
        console.log(
          "Nama tidak valid,nama kosong"
        );
        return false;
      }
   
     
      return true;
}
console.log(
validateNama("gaza")
)

console.log(
    validateNama("")
)
console.log(
    validateNama("a")
)