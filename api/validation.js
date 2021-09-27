module.exports = app => {
    function exitsOrError(value, msg) {
        if(!value) throw msg 
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    function notExistsOrError(value, msg){
        try{
          exitsOrError(value,msg)
        } catch(msg) {
            return
        }
        throw msg
    }
    
    return {exitsOrError, notExistsOrError}
}

