// tugas2
// Fungsi 1: Akses hanya untuk admin dan super-admin  
function canAccessForAdminOrSuperAdmin(userRole) {  
    if (userRole === "admin" || userRole === "user" || userRole ==="guest") {  
        return true;  
    } else {  
        console.log("Akses ditolak: Hanya admin dan user yang diizinkan.");  
        return false;  
    }  
}  

// Fungsi 2: Akses hanya untuk super-admin  
function canAccessForSuperAdminOnly(userRole) {  
    if (userRole === "admin") {  
        return true;  
    } else {  
        console.log("Akses ditolak: Hanya admin yang diizinkan.");  
        return false;  
    }  
}  

// Fungsi 3: Akses untuk semua pengguna dengan status aktif  
function canAccessForActiveUsers(userStatus) {  
    if (userStatus === "active") {  
        return true;  
    } else {  
        console.log("Akses ditolak: Hanya user dengan status aktif yang diizinkan.");  
        return false;  
    }  
}  

// Contoh Input untuk Diuji  
console.log(canAccessForAdminOrSuperAdmin("admin"));    
console.log(canAccessForAdminOrSuperAdmin("user"));          
console.log(canAccessForAdminOrSuperAdmin("guest"))
console.log(canAccessForSuperAdminOnly("user"));       
console.log(canAccessForSuperAdminOnly("admin"));              
console.log(canAccessForSuperAdminOnly("guest"))
console.log(canAccessForActiveUsers("active"));               
console.log(canAccessForActiveUsers("inactive"));
// output
// true 
// true
// true
// Akses ditolak: Hanya admin yang diizinkan.
// false
// true
// Akses ditolak: Hanya admin yang diizinkan.
// false
// true
// Akses ditolak: Hanya user dengan status aktif yang diizinkan.
// false             