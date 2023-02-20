import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask = (question, func)=>{
    rl.question(question, (answer)=>{
        //rl.write(answer)
        func(answer)
        rl.close()
    })
}


ask('masukkan angka : ', (answer)=>{
    console.log(`angka nya = ${answer}`)
})
