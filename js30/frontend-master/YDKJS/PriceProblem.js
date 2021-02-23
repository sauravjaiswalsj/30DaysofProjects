let price = 500;
let phonePrice =0;
console.log(`Available balance: ${price}`);

const getPrice = (price)=>{
    let noOfPhone=0;
    if(price===0){
        return [0,0];
    }
    while(price>0){
        phonePrice+=100;
        price-=100;
        noOfPhone++;
    }
    return [phonePrice,noOfPhone];
}
const [amount, phone] = getPrice(price);
console.log(`Amount of Phone: ${amount} and No of Phone can be bought: ${phone}`);
