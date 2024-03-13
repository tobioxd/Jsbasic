
let username = ' hao oc cho ';

console.log(username);

console.log(username.charAt(0).toUpperCase() + username.slice(1));

//username = username.trim();

console.log(username.trim());

console.log(username.indexOf("cho"));

let result = username.replace("cho", "hao");

console.log(result);

let result2 = username.endsWith(" ");

if (result2) {
    console.log("Username can't begin with ' '");
} else {
    console.log(username);
}

let phonenumber ="123-456-7890";

phonenumber = phonenumber.replace(/-/g, "");

//phonenumber = phonenumber.padStart(15, "0");

phonenumber = phonenumber.padEnd(15, "0");

console.log(phonenumber);