const accountId=123346;
let accountName="John Doe";
var accountBalance=2500.75;
city="bangluru";
console.table([accountId,accountName,accountBalance,city]);
const user={
     name:"saloni",
        age:22,
        city:"bangluru"
        
}
console.table([user]);
const names = ["Saloni", "Arju", "Sunina", "Gulnazz", "Sakshi", "Dimple", "Riya"];

const users = names.map((name, index) => ({
  id: index + 1,
  name: name
}));

console.table(users);
