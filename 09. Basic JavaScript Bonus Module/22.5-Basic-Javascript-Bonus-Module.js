// fibonacci
// 0 1 1 2 3 5 8 13 21 34 55 
// f(n) = f(n - 1) + f(n -2)

// 22_5-2 Explore Factorial Recursion using a for loop concept
const fibo = [0, 1]
for(let i = 2; i <= 6; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); //(7) [0, 1, 1, 2, 3, 5, 8]


// 22_5-3 Fibonacci element using recursion and recursion concept
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}
console.log(fibonacci(8)); //21


// 22_5-4 (advanced) Find the matching product by searching products
const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus laptop d34', price: 12000},
    {name: 'apple smart watch', price: 12000},
    {name: 'boshundhara binding paper', price: 12000},
    {name: 'lg smart phone', price: 12000},
    {name: 'old granny land phone', price: 12000},
    {name: 'hp laptop', price: 12000},
    {name: 'rolex watch', price: 12000},
]
function seachProducts(products, searchText) { 
    const searched = [];   
    for(const product of products){
        const name = product.name;
        if(name.indexOf(searchText.toLowerCase()) != -1){
            searched.push(product);
        }
    }
    return searched;
}
console.log(seachProducts(products, 'LAPTOP'));

