const num = readline();
let values = [];
for (let i = 0; i < num; i++) {
    values = readline();
}

const result = values.sort();
for(const value of result) {
    console.log(value);
}