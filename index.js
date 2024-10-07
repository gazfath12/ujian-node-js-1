function validateNama(name) {  
    
    if (name.length === 0) {  
        console.log("Nama tidak valid: Nama tidak boleh kosong.");  
        return false;  
    }  

    
    if (name.length < 3 || !/^[a-zA-Z]+$/.test(name)) {  
        console.log("Nama tidak valid: Nama harus terdiri dari minimal 3 karakter dan hanya berisi huruf.");  
        return false;  
    }  

    console.log("Nama valid.");  
    return true;  
}  

// output
console.log(validateNama("gaza")); // nama valid true
console.log(validateNama("")); // nama tidak valid: nama tidak boleh kosong false
console.log(validateNama("a")); // nama tidak valid: nama harus terdiri miniamal 3 karakter berisi huruf false 