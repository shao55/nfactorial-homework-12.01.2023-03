let resto = {
    estimated: 2022,
    founder: "Nurgissa",
    itWorking: true,
};

resto.location = "Astana";
resto.type = "fastFood";

delete resto.type;
delete resto.location;
delete resto.itWorking;

console.log(resto);

let vehicle = {};
vehicle.brandName = "BMW";
vehicle.model = "M5F10";
vehicle.model = "M1";
delete vehicle.model;

let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
