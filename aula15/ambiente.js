let num = [5, 8, 2, 9, 3]

num.push(1) // a ordem aqui influencia
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log('A posição não foi encontrada')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
