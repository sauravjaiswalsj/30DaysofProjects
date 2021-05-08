 const form = document.getElementById('add-form');
const itemList  = document.getElementById('items');
const filter = document.getElementById('filter');
const addItem = (e)=>{
    e.preventDefault();
    // Get Input value
    var newItem = document.getElementById("inlineFormInputGroup");
    let li  = document.createElement('li');
    li.className ="list-group-item";
    li.innerHTML=newItem.value;
    itemList.appendChild(li);   

    // createElement delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.innerHTML='X';
    li.appendChild(deleteBtn);
} 

const removeItem = (e)=>{
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

const filterItems = (e)=>{
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(element=>{
        var itemName = element.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            element.style.display='block';
        }else{
            element.style.display='none';
        }
    })
    console.log(text);
}
//Routes
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
