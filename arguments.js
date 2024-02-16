function add(num1, num2){
    console.log(num1, num2);
    // console.log(arguments);
    console.log(arguments[3]);
}

// add(12, 13, 14, 15);

const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(let number of numbers){
//     console.log(number);
// }

const products = [
    {
        id: 1,
        name: "Xiomi Phone",
        price: 19000
    },
    {
        id: 2,
        name: "iphone",
        price: 19000
    },
    {
        id: 3,
        name: "Macbook Air",
        price: 119000
    },
    {
        id: 4,
        name: "Asus laptop",
        price: 19000
    },
    {
        id: 5,
        name: "Doel laptop",
        price: 19000
    },
    {
        id: 6,
        name: "Samsung note 7",
        price: 19000
    },
    {
        id: 7,
        name: "Nokia lumia",
        price: 19000
    },
    {
        id: 8,
        name: "Nothing Phone",
        price: 19000
    }
];

// for(let product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];

    for(let product of products){
        // console.log(product);
        // console.log(product.name);
        // console.log(product.name.includes(search));
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, "Phone");
console.log(result);