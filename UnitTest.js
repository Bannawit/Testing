var greet = (name) => {
    if(name === null){
        return ('Hello!');
    }
    if(array.isArray(name)){
        return ('Hello,' + name);
    }
    if(name === name.toUpperCase()) {
        return ('HELLO '+ `${name}!`)
    }
    else{
        return ('Hello '+ `${name}!`)
    }
};

module.exports = Greet; 
