const fir1 = document.querySelector("#fir1")
const fir2 = document.querySelector("#fir2")
const fir3 = document.querySelector("#fir3")
const fir4 = document.querySelector("#fir4")
const sec1 = document.querySelector("#sec1")
const sec2 = document.querySelector("#sec2")
const sec3 = document.querySelector("#sec3")
const sec4 = document.querySelector("#sec4")
const result = document.querySelector("#result")

// category search
const btnForCate = document.querySelector("#btnForCate")
let arr = []
btnForCate.addEventListener("click", function () {
    arr = [];
    if (fir1.checked) {
        arr.push(fir1.value)
    }
    if (fir2.checked) {
        arr.push(fir2.value)
    }
    if (fir3.checked) {
        arr.push(fir3.value)
    }
    if (fir4.checked) {
        arr.push(fir4.value)
    }
    if (sec1.checked) {
        arr.push(sec1.value)
    }
    if (sec2.checked) {
        arr.push(sec2.value)
    }
    if (sec3.checked) {
        arr.push(sec3.value)
    }
    if (sec4.checked) {
        arr.push(sec4.value)
    }

    console.log(arr)

    let body = {
        "cateList": arr
    }



    fetch("http://localhost:8081/cate_search_book", {
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
            result.innerHTML =null;
            for (let n = 0; n < data.bookList.length; n++) {
                result.append(`書名:  ${data.bookList[n].title}`)
                result.append(document.createElement("br"))
                result.append(`ISBN:  ${data.bookList[n].isbn}`)
                result.append(document.createElement("br"))
                result.append(`作者:  ${data.bookList[n].writer}`)
                result.append(document.createElement("br"))
                result.append(`價格:  ${data.bookList[n].price}`)
                result.append(document.createElement("br"))
                result.append(`庫存:  ${data.bookList[n].inventory}`)
                result.append(document.createElement("br"))
                result.append(document.createElement("hr"))

            }


        })
        .catch(function (error) {
            console.log(error)
        })
})


// top 5
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
