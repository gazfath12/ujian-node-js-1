function validasiEmail(email) {  
    if (email.length === 0) {  
        console.log("invalid: email kosong");  
        return false;  
    }  


    if (!/^[^\s@]+@[^\s@]+$/.test(email)) {  
        console.log("Email tidak valid: Format email salah.");  
        return false;  
    }  

    
    if (email.length < 9) {  
        console.log("email valid");  
        return true;  
    }  

    console.log("email valid");  
    return true;  
}  

// Pengujian  
console.log(validasiEmail("gaza@gmail.com")); // email valid  
console.log(validasiEmail("gaza@com")); // email valid  
console.log(validasiEmail("user")); // invalid: email terlalu pendek  
console.log(validasiEmail("")); // invalid: email kosong