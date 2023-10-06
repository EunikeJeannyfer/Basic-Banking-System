const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
    }).format(number);
}

let saldo = 0 
function tambahSaldo(){
    let tambah = prompt ("Input saldo yang ingin ditambahkan :",)
    if (isNaN(tambah)){
        alert("Inputkan angka")  
    } 
    else{
        tambah = parseInt(tambah)
        saldo = saldo + tambah
        document.getElementById("saldo").innerHTML = "Jumlah saldo anda saat ini : " + rupiah(saldo)
    }
}

function kurangSaldo(){
    let kurang = prompt ("Input saldo yang ingin ditarik :",)
    if (isNaN(kurang)){
        alert("Inputkan angka")  
    } 
    else{
        if (kurang != null){
            kurang = parseInt(kurang)

            if(kurang < saldo){
                saldo = saldo - kurang
                document.getElementById("saldo").innerHTML = "Jumlah saldo anda saat ini : " + rupiah(saldo)
            }
            else{
                alert("Maaf saldo kurang")
            }
        }
    }
}