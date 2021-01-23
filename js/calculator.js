function pccalculator(amount,tip){
    let parsent = (tip/100);
    let tipamount = (amount * parsent);
    let totalamount = (amount + tipamount);
    if(tip<=5){
        console.log(`parsent value ${tip}` );
        console.log(`parsent value ${tipamount}` );
        console.log(`parsent value ${totalamount}` );
    }
    else if(tip=>25){
        console.log(`parsent value ${tip}` );
        console.log(`parsent value ${tipamount}` );
        console.log(`parsent value ${totalamount}` );
    }
    else{
        console.log(`parsent value ${tip}` );
        console.log(`parsent value ${tipamount}` );
        console.log(`parsent value ${totalamount}` );
    }
    
}
pccalculator(50,4);
pccalculator(100,15);
pccalculator(123,25);