const accountId=1234
// we use const when we know that the value will not be changed

let accountEmail="Adii@gmail.com"
// we use let for which the value will be changed after if anone wants.

var accountPassword="AG"
// earlier we used var but not now as the scope of var is not defined that's why we use let instead of var.

accountCity="kaimganj"

let accountState;


// here we see we can change everything but not the value of const.

//accountId=321
// here it give error.

console.log(accountId)

accountEmail="sos"
accountPassword="lol"
accountCity="goa"

console.table([accountEmail,accountPassword,accountState,accountCity,accountId])