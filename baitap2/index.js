var inputsoNguyen1EL = document.getElementById("soNguyen1")
var inputsoNguyen2EL = document.getElementById("soNguyen2")
var inputsoNguyen3EL = document.getElementById("soNguyen3")
var inputsoNguyen4EL = document.getElementById("soNguyen4")
var inputsoNguyen5EL = document.getElementById("soNguyen5")
var ketQuaEL = document.getElementById("ketQua")

function tinhTb(){
    var soNguyen1El = +inputsoNguyen1EL.value
    var soNguyen2El = +inputsoNguyen2EL.value
    var soNguyen3El = +inputsoNguyen3EL.value
    var soNguyen4El = +inputsoNguyen4EL.value
    var soNguyen5El = +inputsoNguyen5EL.value

    var tongCong = soNguyen5El + soNguyen2El + soNguyen3El + soNguyen4El + soNguyen1El;
    var trungBinh = tongCong/5
    
    console.log({trungBinh});
    var resutlString = " Giá trị trung bình là: " + trungBinh
    ketQuaEL.innerText = resutlString

}