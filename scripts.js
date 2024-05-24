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

//Advanced exercises

// Iterates over the products array & logs each product name
  const productName = products.map((name) => name.product).join(", ")

// Filters out products with names longer than 5 characters
  productsFilteredByNameLength: products
    .filter((name) => name.product.length <= 5)
    .map((name) => name.product),

/// Filters out products without prices, converts string prices to numbers & calculates the total price.
  totalPrice: products
    .filter((product) => product.price && product.price !== " ") // Filter products with prices
    .reduce((acc, product) => {
      acc += parseInt(product.price); // Convert price to number and add to accumulator
      return acc;
    }, 0),

  // Concatenate all product names into a single string.
  concatenatedProductNames: products.reduce(
    (acc, product) => acc + product.product,
    ""
  ),

  // Identify the highest and lowest-priced items & returns a string
  priceExtremes: (() => {
    const validProducts = products.filter(
      (item) => !isNaN(item.price) && item.price !== "" && item.price !== " "
    );
    const prices = validProducts.map((item) => Number(item.price));

    const highestPricedItem = validProducts.find(
      (item) => Number(item.price) === Math.max(...prices)
    );
    const lowestPricedItem = validProducts.find(
      (item) => Number(item.price) === Math.min(...prices)
    );

    return `Highest: ${highestPricedItem.product}. Lowest: ${lowestPricedItem.product}.`;
  })(),

  // Recreate the products object with keys 'name' and 'cost' with their original values.
  transformedProducts: products.reduce((acc, product) => {
    acc.push({
      name: product.product,
      cost: isNaN(parseInt(product.price)) ? 0 : parseInt(product.price),
    });
    return acc;
  }, []), // Wraps it in an array
};

console.log(productName, );
 
