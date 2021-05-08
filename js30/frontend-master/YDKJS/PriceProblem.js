let price = 500; 
//prompt('Enter the Balance Amount'); in js
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
const getPriceAfterTax = (amount)=>{
    let taxPercent =18;
    return amount-(0.18*amount);
}
const [amount, phone] = getPrice(price);
const finalPrice = getPriceAfterTax(amount);
console.log(`Amount of Phone: ${amount} and No of Phone can be bought: ${phone}`);
console.log(`Price after tax\n${finalPrice}`);
