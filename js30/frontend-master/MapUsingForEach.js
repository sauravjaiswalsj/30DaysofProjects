const _={};

_.each=(list,callback)=>{
    // if array -> do some operations 
    if(Array.isArray(list)){

        list.forEach(element=>{
            callback(element);
        });
     }
     else{
    // objects -> do some else operations   using for in;
      for(i in list){
          callback(i);
       }
    }
};

_.map=(list, callback)=>{
    // define an array
    //use _.each to loop and push each element on its callback
    let HelloName=[];
    // _.each(list,callback(items) -> This won't push the element to the array.
    _.each(list, (item) =>{
        HelloName.push(callback(item));
    });
    return HelloName;
};

const names=['Ram', 'Daniel', 'Sam'];

_.map(names, (item)=>{
    return `Hello, ${item}`;
}) .forEach(element=>{
    console.log(element);
})