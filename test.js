/*function testice(x) {
    return x;
}

var z = 2;
function test1(x){
    var y = 100;
        while(x<10){
            console.log(x);
            y = (x + y)/2
            x++;
            
        }
}
for(i=0; i<10; i++){
    console.log("the o value is,"+1);
}*/


/*var numSheep = 4;
var monthNumber = 1;
var monthToPrint = 12;

while(monthNumber<=monthToPrint){
    numSheep = numSheep*4;
    console.log("there will be " + numSheep +" sheep after "+ monthNumber + " month(s)");
    monthNumber++;
}
for(i=10;i>0; i--){
    if((1%3 )== 1){
    console.log(i+" harrliluya.");
}   
}*/

    var car1 = {make:"honda",
                model:"arrod",
                year:2015,
                color:"black",
                price:21000,
                vin:789456123
               }; 
    console.log(car1["make"]);

    var car2 = {make:"chevrelet",
                model:"malibu",
                year:2015,
                color:"blue",
                price:23000,
                vin:147258369
               };
    console.log(car2["make"]);

    var car3 = {make:"rangeOver",
                model:"equevo",
                year:2015,
                color:"white",
                price:55000,
                vin:123456789
               };
    console.log(car3["make"]);

    var myDealship = {
        carPurchase: function(make, model, year, price, color, finish, vin){
            myDealship["inventory"].push({make: make,
                                        model: model,
                                        year: year,
                                        price: price,
                                        color: color,
                                        finish: finish,
                                        vin: vin
                                         });
            myDealship.carOnHand ++;
        },
        carsale: function (vin){
            myDealship.carsOnHand --;
            var index;
            for(var i = 0; i< myDealship.inventory.length; i++){
                if(myDealship.inventory[i].vin == vin) {
                    myDealship.inventory.splice(i, 1);
                }
            }; 
        },
        inventory: [car1, car2,car3],
        hours:"9am-4pm",
        revenue:"300000",
        carsOnHand:3
    };
    
    var car4 = {make:"chevrolet",
                model:"caprice Classic",
                year:1985,
                price:4445,
                color:"white",
                finish:"rust"
               };
