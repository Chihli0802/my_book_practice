// top 5 按鈕
const top5Btn = document.querySelector("#top5Btn")
const pic = document.querySelector("#pic")
top5Btn.addEventListener("click", function () {
    console.log(123)
    pic.innerHTML = null;


    fetch("http://localhost:8081/best_top_5")
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data);

            for (let n = 0; n < 5; n++) {
                pic.append(`Top ${n + 1}`)
                pic.append(document.createElement("br"))
                pic.append(`書名:  ${data.bookList[n].title}`)
                pic.append(document.createElement("br"))
                pic.append(`ISBN:  ${data.bookList[n].isbn}`)
                pic.append(document.createElement("br"))
                pic.append(`著者:  ${data.bookList[n].writer}`)
                pic.append(document.createElement("br"))
                pic.append(`価格:  ${data.bookList[n].price}`)
                pic.append(document.createElement("hr"))
            }



        })
        .catch(function (error) {
            console.log(error);
        })





})


// 加入
const btncart = document.querySelector("#btncart")
const isbnInput = document.querySelector("#isbnInput")
const inCartBody = document.querySelector("#inCartBody")
const numInput = document.querySelector("#numInput")

buyList = []
btncart.addEventListener("click", function () {
    buyList.push({ "isbnInput": isbnInput.value, "numInput": numInput.value })

    let body = {
        "guest_search_list": [
            isbnInput.value
        ]
    }
    fetch("http://localhost:8081/guest_search_book", {
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
            inCartBody.append(`書名: ${data.bookList[0].title}`)
            inCartBody.append(document.createElement("br"))
            inCartBody.append(`ISBN: ${data.bookList[0].isbn}`)
            inCartBody.append(document.createElement("br"))
            inCartBody.append(`作者: ${data.bookList[0].writer}`)
            inCartBody.append(document.createElement("br"))
            inCartBody.append(`價格: ${data.bookList[0].price}`)
            inCartBody.append(document.createElement("br"))
            inCartBody.append(`數量: ${numInput.value}`)
            inCartBody.append(document.createElement("hr"))
            isbnInput.value = null;
            numInput.value = null;
        })
        .then(function (error) {
            console.log(error)
        })
})




//結帳======================================
const billBtn = document.querySelector("#billBtn")
billBtn.addEventListener("click", function () {
    let body1 = {}
    buyList.forEach(function (i) {
        body1[i.isbnInput] = i.numInput
    })

    fetch("http://localhost:8081/buy_book", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({ "buy_book": body1 })

    })
        .then(function (res1) {
            return res1.json()
        })
        .then(function (data1) {
            console.log(data1);
            console.log(data1.totalPrice)
            inCartBody.append(document.createElement("br"))
            inCartBody.innerHTML=`金額: ${data1.totalPrice} 円，結帳完成`
            buyList = [];

        })
        .then(function (error1) {
            console.log(error1)
        })
})
            

// 清空購物車
const emptyBtn = document.querySelector("#emptyBtn")
emptyBtn.addEventListener("click",function(){
    buyList = null;
    location.reload();
})
