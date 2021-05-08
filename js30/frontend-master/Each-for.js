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
        for(let i in list){
            callback(list[i], i, list);
        }
    }
        // loop through the list
        // for each item in the list call the callback function
}

_.map=(list,callback)=>{
    let arr=[];
    _.each(list,(v,i,list)=>{
        arr.push(callback(v,i,list));
    });
    return arr;
};

const names={
    name1: "Hello",
    name2: "Ram",
    name3: "Shayam"
};

const list_name=['Hello', 'Ram', 'Shayam'];
const array=_.map(list_name, (item=>{
    return `Hello, ${item}`
})); 

array.forEach(item=>{
    console.log(item);
})

_.each(names, function(name, i, list){
    if(list[i+1]){
        console.log(name, ' is younger than ', list[i+1]);
    }
    else{
        console.log(name, ' is oldest')
    }
});

