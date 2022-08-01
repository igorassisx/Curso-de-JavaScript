let amigo = {nome:'Jose',
 sexo: 'M',
peso: 100,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)