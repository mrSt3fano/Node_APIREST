
function errorLog(err,req,res,next){
    console.log('errorLogs')
    console.error(err)
    next(err)
}

function handleErro(err,req,res,next){
    console.log('handleError')
    res.status(500).json({
        mensaje: err.message,
        stack: err.stack
    })

    
}
module.exports={errorLog,handleErro}