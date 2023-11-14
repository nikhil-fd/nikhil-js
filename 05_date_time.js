const date = new Date();
console.log(typeof(date));
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toISOString());
console.log(new Date().toJSON());
console.log(Date.now());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

console.log(new Date("2023-11-16"));
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.toLocaleString("default", {
    weekday: "long"
}));
