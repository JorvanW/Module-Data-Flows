let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


let Total = 0;   // Have to declare Total as a re-assignable variable 

console.log(
  `${"QTY".padEnd(8)}${"ITEM".padEnd(20)}${"TOTAL"}` // padEnd/padStart add spaces to the left and right of an object
);

for (const { itemName, quantity, unitPricePence } of order) {
  const lineTotal = (quantity * unitPricePence) / 100;  // quantity times unitPricePence divided by 100 to get the currency amount 
  Total += lineTotal; // '+=' is the addition assignment

  console.log(
    `${String(quantity).padEnd(8)}${itemName.padEnd(20)}${lineTotal.toFixed(2).padStart(5)}` // "$" is a template literal that tells JS to insert the value of the item into the string  & "toFixed" fixes the string to (2) decimal points 
  );
}

console.log(`\nTotal: ${Total.toFixed(2)}`); // "\n" is a newline escape sequence which tells JS to add something to the next line 