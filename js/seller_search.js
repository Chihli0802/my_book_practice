//按鈕
const cateBtn = document.querySelector("#cateBtn")
const allBtn = document.querySelector("#allBtn")
const closeBtn = document.querySelector("#closeBtn")
const closeBtnAll = document.querySelector("#closeBtnAll")
//input
const cateInput = document.querySelector("#cateInput")
const allInput = document.querySelector("#allInput")

//結果區域cateRes allRes
const cateinfo = document.querySelector("#cateinfo")
const allRes = document.querySelector("#allRes")



//分類 ==========================================================
cateBtn.addEventListener("click", function () {
    // cateTitle.append=`${哈囉}`
    const text = cateInput.value
    let arr = []
    arr = text.split(' ')
    console.log(arr)
    cateBody = {
        "cateList": arr
    }
    fetch("http://localhost:8081/cate_search_book", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(cateBody)
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            for (let n = 0; n < data.bookList.length; n++) {
                cateinfo.append(`書名: ${data.bookList[n].title}`)
                cateinfo.append(document.createElement("br"));
                cateinfo.append(`ISBN: ${data.bookList[n].isbn}`)
                cateinfo.append(document.createElement("br"));
                cateinfo.append(`著者: ${data.bookList[n].writer}`)
                cateinfo.append(document.createElement("br"));
                cateinfo.append(`価格: ${data.bookList[n].price}`)
                cateinfo.append(document.createElement("br"));
                cateinfo.append(`在庫: ${data.bookList[n].inventory}`)
                cateinfo.append(document.createElement("br"));
                cateinfo.append(document.createElement("hr"));
            }
            closeBtn.addEventListener("click", function () {
                cateinfo.innerText = null;
                cateInput.value =null;
            })
        })
        .catch(function (error) {
            console.log(error);
        })
})

//作者 書名 isbn ================================================
allBtn.addEventListener("click", function () {
    const text = allInput.value
    let arr = []
    arr = text.split(' ')
    console.log(arr)
    allBody = {
        "seller_search_list": arr
    }
    fetch("http://localhost:8081/seller_search_book", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(allBody)
    })
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
                for (let n = 0; n < data.bookList.length; n++) {
                    allinfo.append(`書名: ${data.bookList[n].title}`)
                    allinfo.append(document.createElement("br"));
                    allinfo.append(`ISBN: ${data.bookList[n].isbn}`)
                    allinfo.append(document.createElement("br"));
                    allinfo.append(`著者: ${data.bookList[n].writer}`)
                    allinfo.append(document.createElement("br"));
                    allinfo.append(`価格: ${data.bookList[n].price}`)
                    allinfo.append(document.createElement("br"));
                    allinfo.append(`売上数: ${data.bookList[n].salesVolume}`)
                    allinfo.append(document.createElement("br"));
                    allinfo.append(`在庫: ${data.bookList[n].inventory}`)
                    allinfo.append(document.createElement("br"));
                    allinfo.append(document.createElement("hr"));
                }
            closeBtnAll.addEventListener("click", function () {
                allinfo.innerText = null;
                allInput.value = null;
            })

        })
        .catch(function (error) {
            console.log(error);
        })
})

