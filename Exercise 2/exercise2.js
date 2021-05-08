//Exercise 2
//1. Callback 
function mandi(){
    console.log("Mandi");
}

function sarapan(callback){
    setTimeout(function(){
        console.log("Sarapan");
        callback();
    }, 3000);
}

function berangkatSekolah(){
    console.log("Berangkat Sekolah")
}

mandi();
sarapan(berangkatSekolah);

//2. Promise
function helloWorld(){
    return helloWorld = new Promise((resolve) => {
        resolve("Hello World!");
    })
};

let messages = async() => {
    try {
        const message = await helloWorld();
        setTimeout(() => {
            console.log(message);
        }, 2000);
    } catch(error){
        console.log(error);
    }
};

messages();

//3. Fetch
function ambilDataUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((user) => console.log(user))
};

ambilDataUser();

