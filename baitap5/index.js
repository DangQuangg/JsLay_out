var inputkySoEl=document.getElementById("kySo")
var tinhTongEl=document.getElementById("tinhTong")

function Tinhso(){
    var kySoEl=+inputkySoEl.value
    var ten = kySoEl/10
    ten=Math.floor(ten)
    var hunder = kySoEl % 10
    var Tong = ten + hunder 
    console.log({ten});
    console.log({hunder});
    console.log({Tong});
    var result = "Tổng 2 ký số là: " + Tong
    tinhTongEl.innerHTML = result

}