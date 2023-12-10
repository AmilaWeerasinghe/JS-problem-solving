setTimeout(()=>{
    console.log('Set time out zero')
},0)

setImmediate(()=>{
    console.log('Set immediate');
})

process.nextTick(()=>{
    console.log('Process next tick');
})