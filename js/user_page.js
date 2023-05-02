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


