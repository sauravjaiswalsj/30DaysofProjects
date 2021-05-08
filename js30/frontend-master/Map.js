// difference between each and map is that _.each does not return anything from their callback function.
// Map returns an array.

// _.map([1,2,3],function(val){
//     return val*2;
// });

const _={};
_.map = (list, concat)=>{
   let array=[];
   for(let i=0;i<list.length;i++){
      array.push(concat(list[i]));
   }
   return array;
}

const names=['Ram', 'Shayam', 'Ghanshyam'];
const concat = (items)=>{
   return `Hello, ${items}`;
}
const arr= _.map(names,concat);
arr.forEach(items=>{
   console.log(items);  
});

