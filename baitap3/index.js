var inputUSDel=document.getElementById("USD")
var VNDel = 23500
var ketQuaEl=document.getElementById("ketQua")

function tinhTien(){
    var USDel = +inputUSDel.value

    var soTien = USDel * VNDel

    console.log({soTien});
    var resutlString = " Số tiền quy đổi " + soTien + "VND"
    ketQuaEl.innerText = resutlString
}
