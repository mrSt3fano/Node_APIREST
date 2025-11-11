function validar(schema,property){
    return (req,res,next)=>{
        const data=req[property]
        const{error:e}=schema.validate(data)
        if(e){
            throw new TypeError('error de exceso o delimitacion de caracteres')
        }
        next()
    }
}

module.exports=validar