// array

//const listNilai = ['A', 'B', 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        Nama : 'Afandi Akbar',
        NPM : '19421058',
        Prodi : 'Informatika'
    },
    {
        Nama : 'Syarif Hidayatulloh',
        NPM : '19421089',
        Prodi : 'Informatika'
    },
    {
        Nama : 'M Aldi Prasetyo',
        NPM : '19421076',
        Prodi : 'Informatika'
    }
]

//console.log(dataMahasiswa[2].Nama)

for (let i in dataMahasiswa){
   console.log(dataMahasiswa[i].Nama + '_' + dataMahasiswa[0].Prodi)
}