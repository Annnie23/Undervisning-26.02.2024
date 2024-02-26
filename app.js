const myArray = ['Apple', 'Banana', 'Cherry',];

// // 1. Using forEach with an array
// myArray.forEach(item => {
//     console.log(item);
// })


const products = [
    {
        title: "Product 1",
        description: "Description 1",
        Image: "https://picsum.photos/200/150",
        price: 19.99,
        category: "Electronics"
    },
    {
        title: "Product 2",
        description: "Description 2",
        Image: "https://picsum.photos/200/150",
        price: 9.99,
        category: "Clothing"
    },
    {
        title: "Product 3",
        description: "Description 1",
        Image: "https://picsum.photos/200/150",
        price: 1.99,
        category: "Electronics"
    }
];

// products.forEach(product => {
//     console.log(product); 
// })

// products.forEach(product => {
//     console.log(`Title: ${product.title} - Price: ${product.price}`); 
// })

const createCard = (product) => {
    return `
    <div class="card">
        <img src="${product.Image}" alt="${product.title}" />
        <h4>${product.title}</h4>
        <h2>${product.description}</h2>
        <p>:£${product.price}</p>
        <p>:${product.category}</p>
    </div>
    `;
}

// products.forEach(product => {
//     console.log(createCard(product));
// })  

const productContainer = document.querySelector(".row");

// products.forEach(product => {
//     productContainer.innerHTML += createCard(product);
// })

const filteredProducts = products.filter(product => product.category == "Electronics");

console.log(filteredProducts);

filteredProducts.forEach(product => {
    productContainer.innerHTML += createCard(product);
})