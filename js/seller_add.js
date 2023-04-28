const title = document.querySelector("#title")
const isbn = document.querySelector("#isbn")
const writer = document.querySelector("#writer")
const price = document.querySelector("#price")
const inventory = document.querySelector("#inventory")
const salesVolume = document.querySelector("#salesVolume")
const category = document.querySelector("#category")
const nobtn = document.querySelector("#no")
const yesbtn = document.querySelector("#yes")
const mess = document.querySelector("#mess")




yesbtn.addEventListener("click", function () {

    let body = {
        "bookList": [
            {
                "title": title.value,
                "isbn": isbn.value,
                "writer": writer.value,
                "price": price.value,
                "inventory": inventory.value,
                "salesVolume": salesVolume.value,
                "category": category.value
            }
        ]
    }

    fetch("http://localhost:8081/add_book", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(body)
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            mess.innerHTML = `<p>${data.message}</p>`
        })
        .catch(function (error) {
            console.log(error)
        })



})
nobtn.addEventListener("click", function () {
    title.value=null;
    isbn.value=null;
    writer.value=null;
    price.value=null;
    inventory.value=null;
    salesVolume.value=null;
    category.value=null;

})


