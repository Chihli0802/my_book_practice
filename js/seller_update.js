const selector = document.querySelector("#selector")
const iOrP = document.querySelector("#iOrP")
const allBtn = document.querySelector("#allBtn")
const isbnInput = document.querySelector("#isbnInput")
const newInput = document.querySelector("#newInput")
const allinfo = document.querySelector("#allinfo")

//選取進貨或是改價格
selector.addEventListener("change", function () {
    switch (selector.value) {
        case "---":
            iOrP.innerText = "---"
            break;
        case "i":
            iOrP.innerText = "入荷数量"
            break;
        case "p":
            iOrP.innerText = "改定価格"
            break;
    }
})


allBtn.addEventListener("click", function () {
    let body = {
        "isbn": isbnInput.value,
        "i_for_inventory_p_for_price": selector.value,
        "update_volume": newInput.value
    }

    fetch("http://localhost:8081/update_book", {
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
            console.log(data);
            allinfo.append(`書名: ${data.title}`)
            allinfo.append(document.createElement("br"))
            allinfo.append(`ISBN: ${data.isbn}`)
            allinfo.append(document.createElement("br"))
            allinfo.append(`著者: ${data.writer}`)
            allinfo.append(document.createElement("br"))
            allinfo.append(`価格: ${data.price}`)
            allinfo.append(document.createElement("br"))
            allinfo.append(`在庫: ${data.inventory}`)
            allinfo.append(document.createElement("br"))
            allinfo.append(`${data.message}`)


            closeBtnAll.addEventListener("click", function () {
                allinfo.innerText = null;
                isbnInput.value = null;
                newInput.value = null;
                selector.value = "---"
            })
        })


        .catch(function (error) {
            console.log(error);

        })

})

