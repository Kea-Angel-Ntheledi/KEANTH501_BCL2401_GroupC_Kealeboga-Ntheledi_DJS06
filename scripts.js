// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan_Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// forEach Basics
//log each name to the console
names.forEach((name) => {
  console.log(name);
});

//log each province to the console
provinces.forEach((provinces) => {
  console.log(provinces);
});

//log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//2. Uppercase transformation
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

//3. Name Lengths
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

//4. Sorting
const sortedProvinces = [...provinces].sort(); //Use spread operator to avoid mutating the original array
console.log(sortedProvinces);

//5. filtering cape
const nonCapeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(nonCapeProvinces.length);

//6. Finding "S"
const containsS = names.map((name) => name.includes("S") || name.includes("s"));
console.log(containsS);

//7. Creating Object Mapping
const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvinces);

//Advanced
//1. Log products
console.log("Products:");
products.forEach(product => {
  console.log(product.product);
});

//2. Filter by name length
const filterdProducts = products.filter(product => product.product.length <= 5);
console.log("Products with names <= 5 characters:");
console.log(filteredProducts);