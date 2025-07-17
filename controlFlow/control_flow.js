let userRole="admin";
let accessLevel;
if(userRole==="admin"){
    accessLevel="full access granted";
}
else if (userRole==="manager"){
    accessLevel="limited access granted";
}else{
    accessLevel="no access granted";
}
console.log("access Level :",accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch(userType){
    case "admin": userCategory="administator";
    break;
    case "manager":userCategory="manager";
    break;
    case "subscriber": userCategory="subscriber";
    break;
    default:
        userCategory="unknown";
}
console.log("user category :" ,userCategory);