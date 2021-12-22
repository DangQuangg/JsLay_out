var luongCanBanEl= 100000
var inputngayLamEl = document.getElementById("ngayLam");
var ketQuaEl = document.getElementById("ketQua")

function tinhTien(){
    var ngayLamEl = inputngayLamEl.value

    var ketQualuong = luongCanBanEl * ngayLamEl;
    console.log({ketQualuong});
    var resutlString = " Số tiền  là: " + ketQualuong + " VND" 
    ketQuaEl.innerText = resutlString
}
