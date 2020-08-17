const CreateSuspectsObjects = (name)=>{
    return {
        name:name,
        color:name.split(' ')[1],
        speak:()=>{
            console.log("Hello ", name);
        }
    };
};
const suspects = ["Miss Scarlet", "Miss, white", "Mr. Black"];
let suspectsList=[];
suspects.forEach(name=>{
    suspectsList.push(CreateSuspectsObjects(name));
    console.log(CreateSuspectsObjects(name));
    CreateSuspectsObjects(name).speak();
});

console.log(suspectsList);