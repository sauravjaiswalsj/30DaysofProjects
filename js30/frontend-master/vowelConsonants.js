const word = "Hello World";

[...word].forEach(item=>{
	if('aeiou'.includes(item)){
		console.log(item);
	}
});
[...word].forEach(items=>{
	if(!'aeiou'.includes(items))
		console.log(items);
});

