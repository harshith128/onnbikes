function rideNow(){
        
    let select_city = document.querySelector(".city");
    let city = select_city.querySelector("select").value;

    let select_plan = document.querySelector(".booking");
    let plan = select_plan.querySelector("select").value;

    let start_div = document.querySelector(".startDate");
    let start_date = start_div.querySelector("input").value;

    let end_div = document.querySelector(".endDate");
    let end_date = end_div.querySelector("input").value;

    if(start_date === ""){
        alert("Please Select the start date");
    } else if(end_date === "") {
        alert("Please Select the end date")
    } else {
        localStorage.setItem("Date", JSON.stringify({city:city, plan:plan, startDate:start_date, endDate:end_date}));
    }
}

function rideNowAuto(){
    let date =JSON.parse(localStorage.getItem("Date"));
    
    if(date == null){
        console.log("null")
    }else{
        
        //console.log(date);
        let cityname = date.city;
        var element = document.getElementById("city_name");
        element.value = cityname;

        let second_select2 = date.plan;
        var second_select = document.getElementById("second_select");
        second_select.value = second_select2;

        let stdate = date.startDate;
        var startDate = document.getElementById("startDate");
        startDate.value = stdate;

        let endate = date.endDate;
        var endDate = document.getElementById("endDate");
        endDate.value = endate;

    }
}
rideNowAuto();
function filt(ckbox){
    var product = JSON.parse(localStorage.getItem("bike_data"))
    
    var data_div = document.getElementById('data_div');
    data_div.innerHTML = null;
    var newprod =[];
    product.forEach(function (products){
        

        if(products.manufacturer == ckbox){
            newprod.push(products);
            console.log(products);
        }
    })

    newprod.forEach(function (products){
        
        var div = document.createElement('div');

        var name = document.createElement('P');
        name.innerText = products.name;

        var price = document.createElement("P");
        price.innerText = products.price;

        var image = document.createElement('img');
        image.src = products.image;

        var btn = document.createElement('button');
        btn.innerText = "Book Now";

        div.append(image,name,price,btn);

        data_div.append(div);
    })      
}

function filt2(ckbox2){
    var product = JSON.parse(localStorage.getItem("bike_data"))
    
    var data_div = document.getElementById('data_div');
    data_div.innerHTML = null;
    var newprod =[];
    product.forEach(function (products){
        

        if(products.model == ckbox2){
            newprod.push(products);
            console.log(products);
        }
    })

    newprod.forEach(function (products){
        
        var div = document.createElement('div');

        var name = document.createElement('P');
        name.innerText = products.name;

        var price = document.createElement("P");
        price.innerText = products.price;

        var image = document.createElement('img');
        image.src = products.image;

        var btn = document.createElement('button');
        btn.innerText = "Book Now";

        div.append(image,name,price,btn);

        data_div.append(div);
    })
}

function filt3(ckbox3){
    var product = JSON.parse(localStorage.getItem("bike_data"))
    
    var data_div = document.getElementById('data_div');
    data_div.innerHTML = null;
    var newprod =[];
    product.forEach(function (products){
        

        if(products.vehicleType == ckbox3){
            newprod.push(products);
            console.log(products);
        }
    })

    newprod.forEach(function (products){
        
        var div = document.createElement('div');
        div.setAttribute("class", "democlass");

        var name = document.createElement('P');
        name.innerText = products.name;

        var price = document.createElement("P");
        price.innerText = products.price;

        var image = document.createElement('img');
        image.src = products.image;

        var btn = document.createElement('button');
        btn.innerText = "Book Now";
        

        div.append(image,name,price,btn);

        data_div.append(div);
    })
}

function fun1(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox = "Royal Enfield"
        filt(ckbox);
        
    }else{
        console.log("just uncked");
        showData()
    }
}
function fun2(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox = "Bajaj"
        filt(ckbox);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun3(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox = "Honda"
        filt(ckbox);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun4(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox = "Yamaha"
        filt(ckbox);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun5(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "350 Classic"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun6(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "Avenger 220 Street"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun7(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "Activa"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun8(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "FZ"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun9(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "Dio"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun10(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "Pulsar"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun11(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox2 = "CT 100"
        filt2(ckbox2);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun12(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox3 = "Motorcycle"
        filt3(ckbox3);
    }else{
        console.log("just uncked");
        showData();
    }
}
function fun13(ck){
    if(ck.checked){
        console.log("Just ckecked");
        var ckbox3 = "Scooter"
        filt3(ckbox3);
    }else{
        console.log("just uncked");
        showData();
    }
}

function showData(){
    var product = JSON.parse(localStorage.getItem("bike_data"))
    
    var data_div = document.getElementById('data_div');
    data_div.innerHTML = null;

    product.forEach(function (products){
        
        var div = document.createElement('div');

        var name = document.createElement('P');
        name.innerText = products.name;

        var price = document.createElement("P");
        price.innerText = products.price;

        var image = document.createElement('img');
        image.src = products.image;

        var btn = document.createElement('button');
        btn.innerText = "Book Now";

        div.append(image,name,price,btn);

        data_div.append(div);
    })
}
showData();
