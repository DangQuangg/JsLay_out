var inputChieuDaiel=document.getElementById("chieuDai")
var inputChieuRongel=document.getElementById("chieuRong")
var dienTichEl=document.getElementById("dienTich")
var chuViEl=document.getElementById("chuVi")

function TinhHCN(){
    var chieuDaiEl= +inputChieuDaiel.value 
    var chieuRongEl = +inputChieuRongel.value

    var tinhDT = chieuDaiEl * chieuRongEl
    console.log({tinhDT});
    var tinhCV = (chieuDaiEl+chieuRongEl)*2
    console.log({tinhCV});
    var result1 = "Diện tích " + tinhDT + " m2"
    dienTichEl.innerText = result1
    var result2 = "Chu vi " + tinhCV + " m"
    chuViEl.innerText = result2
}