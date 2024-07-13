let testControllerLogic = (req,res)=>{
    function getrandomDateBetween(start,end){
        var date1= new Date();
        
        var date2= new Date();
        var start = date1.setDate(date1.getDate() - 7);
        var end = date2.setDate(date1.getDate() +7);

        let date3 = new Date(Math.floor(Math.random()*(end-start+1) +start));
        const unixTT = Math.floor(date3);
        return unixTT;
         

    }

    if(Math.random() >0.5 ? true:false){
        var orders =[];
        for(var i=0;i<Math.ceil(Math.random()*20);i++){
            let order = {
                "order_id": Math.ceil(Math.random() *(10000-1000)+1000),
                "arrival_at_utc":getrandomDateBetween(),
                "payment_method":Math.random() >.5?"UPI":"Cash",
                "total_paid":parseFloat((Math.random() *(99.00-10.00)+10.00).toFixed(2))
    
            }
           orders= [
                ...orders,
                order
            ]
            
        }
        res.status(200).json({
            order:orders
        })
    }else{
        res.status(503).send();
    }
};

exports.testController =  testControllerLogic;