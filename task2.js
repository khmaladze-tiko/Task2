//Task2
//დაწერეთ ფუნქცია რომელიც დააბრუნებს promise-ს , და resolve მოხდება 3 
//წამის შემდეგ,
//მიღებული მნიშვნელობა მიანიჭეთ ცვლადს და დალოგეთ, გამოიყენეთ 
//async, await

async function func() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 3000);
    });

    let result = await promise;
    console.log(result);
    
}
console.log(func())