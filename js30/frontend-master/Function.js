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
suspects.forEach(name=>{
    console.log(CreateSuspectsObjects(name));
    CreateSuspectsObjects(name).speak();
});