

//revert list, start from last item?

function checkCashRegister(price, cash, cid) {
    var change;
    
    
    // Here is your change, ma'am.
    
    let initialcid = JSON.parse(JSON.stringify(cid));
    
    let exchange = cash - price;
    let indrawer = cid.reverse();
    //alert(indrawer);
    //alert(cid);
    
    
    let results = findHigherToTake(indrawer, exchange, []);
    /*alert(results["cash"]);
    alert(results["exchange"]);
    alert(results["indrawer"]);*/
    
    let stillindrawer = results["indrawer"].reduce(sumArrayinDrawer, 0);
    
    //alert("Still in drawer: " + stillindrawer);
    
    if(results["exchange"] > 0){
    
        return {status:"INSUFFICIENT_FUNDS", change:[]};
    
    }
    
    
    
    if(stillindrawer == 0){//Equal
        //alert(cid);
        return{status: "CLOSED", change: initialcid};
    
    }
    
    return {status: "OPEN", change: results["cash"]};
}

//TODO:FIX PRECISION PROBLEMS IN A MORE "CORRECT" WAY
//TODO:MAYBE USE WHOLE INTEGERS OF CENTS

//TODO:ENCAPSULATE CASH CALCULATION IN A METHOD

function toWholeIntegersOfCents(){
}

function sumArrayinDrawer(total, value){
	return total + (+value[1].toFixed(2));
}

function findHigherToTake(indrawer, exchange, cash){
	//Starts from higher value, takes as much as possible
    //alert(exchange);
    //Check every type of value (100, 20 ...)
    if(exchange >= 100 && indrawer[0][1] >= 100){ //and has value in drawer
    	//alert("pass");
        let changeval = 0; 
        
        while((indrawer[0][1] >= 100) && (exchange >= 100)){//Checks for possibility of using the value
			
            changeval += 100; //value to be appended on resulting change 
            
            exchange -= 100;
            indrawer[0][1] -= 100;        
        }
        cash.push(["ONE HUNDRED", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
        
    }
    
    
    
    if(exchange >= 20 && indrawer[1][1] >= 20){
    	let changeval = 0; 
        
        while((indrawer[1][1] >= 20) && (exchange >= 20)){//Attention
			
            changeval += 20; //value to be appended on resulting change 
            
            exchange -= 20;
            indrawer[1][1] -= 20;        
        }
        cash.push(["TWENTY", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    if(exchange >= 10 && indrawer[2][1] >= 10){
    	let changeval = 0; 
        
        while((indrawer[2][1] >= 10) && (exchange >= 10)){//Attention
			
            changeval += 10; //value to be appended on resulting change 
            
            exchange -= 10;
            indrawer[2][1] -= 10;        
        }
        cash.push(["TEN", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    if(exchange >= 5 && indrawer[3][1] >= 5){
    	let changeval = 0; 
        
        while((indrawer[3][1] >= 5) && (exchange >= 5)){//Attention
			
            changeval += 5; //value to be appended on resulting change 
            
            exchange -= 5;
            indrawer[3][1] -= 5;        
        }
        cash.push(["FIVE", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    if(exchange >= 1 && indrawer[4][1] >= 1){
    	let changeval = 0; 
        
        while((indrawer[4][1] >= 1) && (exchange >= 1)){//Attention
			
            changeval += 1; //value to be appended on resulting change 
            
            exchange -= 1;
            indrawer[4][1] -= 1;        
        }
        cash.push(["ONE", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    //PRECISION PROBLEMS...
    exchange = +exchange.toFixed(2);
    
    //alert(exchange);
    
    
    if(exchange >= 0.25 && indrawer[5][1] >= 0.25){
    	let changeval = 0; 
        
        while((indrawer[5][1] >= 0.25) && (exchange >= 0.25)){//Attention
			
            changeval += 0.25; //value to be appended on resulting change 
            
            exchange -= 0.25;
            indrawer[5][1] -= 0.25;        
        }
        cash.push(["QUARTER", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    //alert(exchange);
    
    if(exchange >= 0.1 && indrawer[6][1] >= 0.1){
    	let changeval = 0; 
        
        while((indrawer[6][1] >= 0.1) && (exchange >= 0.1)){//Attention
			
            changeval += 0.1; //value to be appended on resulting change 
            
            exchange -= 0.1;
            indrawer[6][1] -= 0.1;        
        }
        cash.push(["DIME", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    exchange = +exchange.toFixed(2);
    
    //alert(exchange);
    
    if(exchange >= 0.05 && indrawer[7][1] >= 0.05){
    	let changeval = 0; 
        
        while((indrawer[7][1] >= 0.05) && (exchange >= 0.05)){//Attention
			
            changeval += 0.05; //value to be appended on resulting change 
            
            exchange -= 0.05;
            indrawer[7][1] -= 0.05;        
        }
        cash.push(["NICKEL", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    exchange = +exchange.toFixed(2);
    
    //alert(exchange);
    
    if(exchange >= 0.01 && indrawer[8][1] >= 0.01){
    	let changeval = 0; 
        
        while((indrawer[8][1] >= 0.01) && (exchange >= 0.01)){//Attention
			
            changeval += 0.01; //value to be appended on resulting change 
            changeval = +changeval.toFixed(2);
            
            exchange -= 0.01;
            exchange = +exchange.toFixed(2);
            
            indrawer[8][1] -= 0.01;
            indrawer[8][1] = +indrawer[8][1].toFixed(2);
        }
        cash.push(["PENNY", changeval]);//Appends ["ONE HUNDRED", something...];
        //alert(cash);
        //return({"indrawer":[], "exchange": 0, "cash": cash});
    }
    
    return({"indrawer":indrawer, "exchange": exchange, "cash": cash});
    
}

//[type, total]
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

//checkCashRegister(19.5, 300, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(19.55, 50, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 5], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

//alert(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])["status"]);
//alert(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])["change"]);

//alert(checkCashRegister(19.55, 50, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])["status"]);
//alert(checkCashRegister(19.55, 50, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])["change"]);


alert(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])["status"]);
alert(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])["change"]);
