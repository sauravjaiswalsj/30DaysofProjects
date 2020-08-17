const _ ={};
_.each=function(list,callback){
    //Check if the list is an array or an objects;

    if(Array.isArray(list)){
        //Arrays
        for(let i = 0; i< list.length; i++){
                callback(list[i], i , list);
        }
    }else{
        //objects
        // for(let i in list){
        
        // }
    }
    // loop through the list
    // for each item in the list call the callback function
}

_.each(['Hello', 'Ram', 'Shyam'], function(name, i, list){
    if(list[i+1]){
        console.log(name, ' is younger than ', list[i+1]);
    }
    else{
        console.log(name, ' is oldest')
    }
});

