var horas = new Date()
var agora = horas.getHours()
console.log(`Agora são exatamente ${horas} horas`)

if (horas < 12) {
    console.log ('Manhã')
} else if (horas  <= 18) {
    console.log('Tarde')
} else {
    console.log('Noite')
}
