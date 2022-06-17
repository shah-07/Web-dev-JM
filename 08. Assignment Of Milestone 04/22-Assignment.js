// Problem Solving NO:01
function seerToMon(seer) {
    //handling negative value 
    if(seer < 0) {
        return 'please enter a positive number.'
    }

    const seerPerMon = 40;
    // converting seer to mon
    let mon = seer / seerPerMon;
    return mon;
}
console.log(seerToMon(120));

// Problem Solving NO:02
function totalSales(shirt, pant, shoe){
    //handling negative value 
    if(shirt < 0 || pant < 0 || shoe < 0) {
        return 'please enter a positive number.'
    }

    // giving each product price
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // Counting total sales
    const total = (perShirtPrice * shirt) + (perPantPrice * pant) + (perShoePrice * shoe);
    return total;
}
console.log(totalSales(2, 0, 4));

// Problem Solving NO:03
function deliveryCost(shirts) {
    // Per Shirt Delivery Cost 
    const firstHundredPerCost = 100;
    const secondHundredPerCost = 80;
    const restPerCost = 50;

    if(shirts > 0 && shirts <= 100) {
        const totalCost = shirts * firstHundredPerCost;
        return totalCost;
    } else if(shirts > 100 && shirts <= 200) {        
        const totalCost = (firstHundredPerCost * 100) + ((shirts - 100) * secondHundredPerCost);
        return totalCost;           
    } else if(shirts > 200) {        
        const totalCost = (firstHundredPerCost * 100) + (secondHundredPerCost * 100) + ((shirts - 200) * restPerCost);
        return totalCost;
    } else {
        return 'please enter a valid number';
    }
}
console.log(deliveryCost(250));

// Problem Solving NO:04
let friendsName = ['Shamim', 'Naim', 'Liton', 'Rahat', 'Joshim']
function perfectFriend(friendsName){
    for(friend of friendsName) {
        if(friend.length == 5) {
            return friend;
        }
    }
}
console.log(perfectFriend(friendsName));