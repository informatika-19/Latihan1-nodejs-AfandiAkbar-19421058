//function
function hitunganNilai (nilai1, nilai2){
    return nilai1 + nilai2
}

const hasil = hitunganNilai(14, 8)

//console.log(hasil)

const buatNasi = (beras, air) => {
    if (beras){
        console.log('Beras Ok')
    }else{
        console.log('Mohon Masukkan Beras')
    }

    if (air){
        console.log('Air Ok')
    }else{
        console.log('Mohon Masukkan Air')
    }
}

buatNasi('Beras', 'Air')