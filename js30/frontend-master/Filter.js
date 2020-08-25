 const _={};

 _.filter=(list, callback)=>{
     //create a new array 
     // Loop through the array 
     // Check back  if callback returns true the push data to array/
     // return the array
    const storage=[];
    list.forEach(element => {
        if(callback(element)===true){
            storage.push(element);
        }
    });
    return storage; 
 }


 const movie=[{
     title:'Frontend Master',
     active:true,
     course:'Javascript',
     author:'Bianca Gandolfo',
     length:40
 },{
     title:'Coursera',
     course:'Bash',
     author:'John Hopkins',
     length:60
 }];
_.filter(movie, (item)=>{
    return item.active;
    }).forEach(element => {
        console.log(element);  
    });