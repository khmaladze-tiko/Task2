//Task 1  გვაქვს ობიექტი customer ,რომელსაც აქვს ორი property
//name და age, დაწერეთ ფუნქცია isAllowed, რომელიც დააბრუნებს true- ს 
//მხოლოდ იმ შემტხვევაში თუ
//ასაკი მეტია  ან ტოლი 18-ის. ფუნქცია აუცილებლად უნდა იყოს promise

//მაგალითი

// const person = {
//     name: "Jane",
//     age: 20,
//   };
//   isAllowed(person)
//     .then((allowed) => console.log(allowed)) // ამ შემტხვევაში true
//     .catch((error) => consaole.log(error))

const person = {
    name: "Jane",
    age: 20,
};
isAllowed(person)
    .then((allowed) => {
        console.log(allowed);
    })
    .catch((error) => {
        console.log(error);
    });