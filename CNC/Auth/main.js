// Modules
const fs = require("fs");

// Files
const Crud = require("./crud.js");
const eCrud = require("./functions.js");

exports.login = function(user, pass, ip) {
    if(user.length === 0 || pass.length === 0) {
        return "[x] Error, Invalud argument value!";
    }

    let get_user = Crud.User(user);

    if(get_user === "[x] Error, No user found!") {
        return "[x] Error, Username or password seem to be incorrect!. Try again";
    }

    let info = get_user.split(",");

    if(user === info[0] || pass === info[2]) {
        Crud.LogSession(user, ip)
        if(info[1] === "none") {
            Crud.changeIP(user, ip);
        }
        return "[+] Successfully logged in, Welcome: " + user;
    } else {
        return "[x] Error, Username or password seem to be incorrect!. Try again";
    }
}