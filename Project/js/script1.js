
    function checkStartDate(){
        let start_div = document.querySelector(".startDate");
        let start_dateAt = start_div.querySelector("input").value;
        let startYear = start_dateAt.substring(0, 4);
        let startMonth = start_dateAt.substring(5, 7);
        let startDate = start_dateAt.substring(8, 10);
        let startHour = start_dateAt.substring(11, 13);
        let startMin = start_dateAt.substring(14, 16);

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let hour = today.getHours();
        let min = today.getMinutes();

        if(startYear > year){
            return true;
        } else if(startYear == year && startMonth > month){
            return true;
        } else if(startYear == year && startMonth == month && startDate > date){
            return true;
        } else if(startYear == year && startMonth == month && startDate == date && startHour > hour){
            return true;
        } else if(startYear == year && startMonth == month && startDate == date && startHour == hour && startMin > min){
            return true;
        } else {
            return false;
        }
    }

    function callStart(){
        if(!checkStartDate()){
            alert("Please select Valid Starting Date and Time")
        }
    }
    document.querySelector(".endDate").querySelector("input").addEventListener("click", callStart);

    function checkEndDate(){
        let start_div = document.querySelector(".startDate");
        let start_dateAt = start_div.querySelector("input").value;
        let startYear = start_dateAt.substring(0, 4);
        let startMonth = start_dateAt.substring(5, 7);
        let startDate = start_dateAt.substring(8, 10);
        let startHour = start_dateAt.substring(11, 13);
        let startMin = start_dateAt.substring(14, 16);

        let end_div = document.querySelector(".endDate");
        let end_dateAt = end_div.querySelector("input").value;
        let endYear = end_dateAt.substring(0, 4);
        let endMonth = end_dateAt.substring(5, 7);
        let endDate = end_dateAt.substring(8, 10);
        let endHour = end_dateAt.substring(11, 13);
        let endMin = end_dateAt.substring(14, 16);

        if(endYear > startYear){
            return true;
        } else if(endYear == startYear && endMonth > startMonth){
            return true;
        } else if(endYear == startYear && endMonth == startMonth && endDate > startDate){
            return true;
        } else if(endYear == startYear && endMonth == startMonth && endDate == startDate && endHour > startHour){
            return true;
        } else if(endYear == startYear && endMonth == startMonth && endDate == startDate && endHour == startHour && endMin > startMin){
            return true;
        } else {
            return false;
        }
    }





//

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
    } else if(!checkStartDate()){
        alert("Please select Valid Start Date and Time"); 
    } else if(!checkEndDate()){            
        alert("Please select Valid End Date and Time");
    } else {
        localStorage.setItem("Date", JSON.stringify({city:city, plan:plan, startDate:start_date, endDate:end_date}));
    }
}

document.querySelector(".rideBtn").querySelector("button").addEventListener("click", rideNow);


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
            //console.log(products);
        }
    })

    newprod.forEach(function (products){
        
        var div = document.createElement('div');
        div.classList.add("one_div1");

        var div_img_div = document.createElement('div');
        div_img_div.classList.add("img_div");

        var img123 = document.createElement('img');
        img123.classList.add("img123");
        img123.src = products.image;

        div_img_div.append(img123)

        var div_bk = document.createElement('div');

        var div_bike_name = document.createElement('div');
        div_bike_name.classList.add("bike_name_bk")
        div_bike_name.innerText = products.name;

        div_bk.append(div_bike_name);
//div s_one
        var div_s_one =document.createElement('div');
        div_s_one.classList.add("s_one");
        div_s_one.classList.add("flex-child");

        var div_s_one_one =document.createElement('div');
        div_s_one_one.classList.add("s_one_one");
        div_s_one_one.innerText = "Free 904 kms"

        var div_s_one_two =document.createElement('div');
        div_s_one_two.classList.add("s_one_two");

        var div_s_one_two_center =document.createElement('div');
        div_s_one_two_center.classList.add("center11");
        div_s_one_two_center.innerText = " ₹"+products.price;
        
        div_s_one_two.append( div_s_one_two_center);
        div_s_one.append(div_s_one_one, div_s_one_two)

        //for second part
//div s_two
        var div_s_two =document.createElement('div');
        div_s_two.classList.add("s_two");
        div_s_two.classList.add("flex-child");

        var div_s_two_one =document.createElement('div');
        div_s_two_one.classList.add("s_two_one");
        div_s_two_one.innerText = "Exess ₹2/km"
        
        var div_s_two_two =document.createElement('div');
        div_s_two_two.classList.add("s_two_two");

        var div_s_two_two_booking =document.createElement('div');
        div_s_two_two_booking.classList.add("s_two_booking");

        var btn = document.createElement('button');
        btn.classList.add("btn11");
        btn.innerText = "Book Now";

        btn.onclick=(function (){
            bookNowClicked(products);
        })

        div_s_two_two_booking.append(btn);
        div_s_two_two.append(div_s_two_two_booking);
        div_s_two.append(div_s_two_one,div_s_two_two);
        
        var onlyone = document.createElement('div');
        onlyone.classList.add("flex-container");
        onlyone.append(div_s_one,div_s_two)

        div.append(div_img_div,div_bk,onlyone);

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
        div.classList.add("one_div1");

        var div_img_div = document.createElement('div');
        div_img_div.classList.add("img_div");

        var img123 = document.createElement('img');
        img123.classList.add("img123");
        img123.src = products.image;

        div_img_div.append(img123)

        var div_bk = document.createElement('div');

        var div_bike_name = document.createElement('div');
        div_bike_name.classList.add("bike_name_bk")
        div_bike_name.innerText = products.name;

        div_bk.append(div_bike_name);
//div s_one
        var div_s_one =document.createElement('div');
        div_s_one.classList.add("s_one");
        div_s_one.classList.add("flex-child");

        var div_s_one_one =document.createElement('div');
        div_s_one_one.classList.add("s_one_one");
        div_s_one_one.innerText = "Free 904 kms"

        var div_s_one_two =document.createElement('div');
        div_s_one_two.classList.add("s_one_two");

        var div_s_one_two_center =document.createElement('div');
        div_s_one_two_center.classList.add("center11");
        div_s_one_two_center.innerText = " ₹"+products.price;
        
        div_s_one_two.append( div_s_one_two_center);
        div_s_one.append(div_s_one_one, div_s_one_two)

        //for second part
//div s_two
        var div_s_two =document.createElement('div');
        div_s_two.classList.add("s_two");
        div_s_two.classList.add("flex-child");

        var div_s_two_one =document.createElement('div');
        div_s_two_one.classList.add("s_two_one");
        div_s_two_one.innerText = "Exess ₹2/km"
        
        var div_s_two_two =document.createElement('div');
        div_s_two_two.classList.add("s_two_two");

        var div_s_two_two_booking =document.createElement('div');
        div_s_two_two_booking.classList.add("s_two_booking");

        var btn = document.createElement('button');
        btn.classList.add("btn11");
        btn.innerText = "Book Now";

        btn.onclick=(function (){
            bookNowClicked(products);
        })

        div_s_two_two_booking.append(btn);
        div_s_two_two.append(div_s_two_two_booking);
        div_s_two.append(div_s_two_one,div_s_two_two);
        
        var onlyone = document.createElement('div');
        onlyone.classList.add("flex-container");
        onlyone.append(div_s_one,div_s_two)

        div.append(div_img_div,div_bk,onlyone);

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
        div.classList.add("one_div1");

        var div_img_div = document.createElement('div');
        div_img_div.classList.add("img_div");

        var img123 = document.createElement('img');
        img123.classList.add("img123");
        img123.src = products.image;

        div_img_div.append(img123)

        var div_bk = document.createElement('div');

        var div_bike_name = document.createElement('div');
        div_bike_name.classList.add("bike_name_bk")
        div_bike_name.innerText = products.name;

        div_bk.append(div_bike_name);
//div s_one
        var div_s_one =document.createElement('div');
        div_s_one.classList.add("s_one");
        div_s_one.classList.add("flex-child");

        var div_s_one_one =document.createElement('div');
        div_s_one_one.classList.add("s_one_one");
        div_s_one_one.innerText = "Free 904 kms"

        var div_s_one_two =document.createElement('div');
        div_s_one_two.classList.add("s_one_two");

        var div_s_one_two_center =document.createElement('div');
        div_s_one_two_center.classList.add("center11");
        div_s_one_two_center.innerText = " ₹"+products.price;
        
        div_s_one_two.append( div_s_one_two_center);
        div_s_one.append(div_s_one_one, div_s_one_two)

        //for second part
//div s_two
        var div_s_two =document.createElement('div');
        div_s_two.classList.add("s_two");
        div_s_two.classList.add("flex-child");

        var div_s_two_one =document.createElement('div');
        div_s_two_one.classList.add("s_two_one");
        div_s_two_one.innerText = "Exess ₹2/km"
        
        var div_s_two_two =document.createElement('div');
        div_s_two_two.classList.add("s_two_two");

        var div_s_two_two_booking =document.createElement('div');
        div_s_two_two_booking.classList.add("s_two_booking");

        var btn = document.createElement('button');
        btn.classList.add("btn11");
        btn.innerText = "Book Now";

        btn.onclick=(function (){
            bookNowClicked(products);
        })

        div_s_two_two_booking.append(btn);
        div_s_two_two.append(div_s_two_two_booking);
        div_s_two.append(div_s_two_one,div_s_two_two);
        
        var onlyone = document.createElement('div');
        onlyone.classList.add("flex-container");
        onlyone.append(div_s_one,div_s_two)

        div.append(div_img_div,div_bk,onlyone);

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
        div.classList.add("one_div1");

        var div_img_div = document.createElement('div');
        div_img_div.classList.add("img_div");

        var img123 = document.createElement('img');
        img123.classList.add("img123");
        img123.src = products.image;

        div_img_div.append(img123)

        var div_bk = document.createElement('div');

        var div_bike_name = document.createElement('div');
        div_bike_name.classList.add("bike_name_bk")
        div_bike_name.innerText = products.name;

        div_bk.append(div_bike_name);
//div s_one
        var div_s_one =document.createElement('div');
        div_s_one.classList.add("s_one");
        div_s_one.classList.add("flex-child");

        var div_s_one_one =document.createElement('div');
        div_s_one_one.classList.add("s_one_one");
        div_s_one_one.innerText = "Free 904 kms"

        var div_s_one_two =document.createElement('div');
        div_s_one_two.classList.add("s_one_two");

        var div_s_one_two_center =document.createElement('div');
        div_s_one_two_center.classList.add("center11");
        div_s_one_two_center.innerText = " ₹"+products.price;
        
        div_s_one_two.append( div_s_one_two_center);
        div_s_one.append(div_s_one_one, div_s_one_two)

        //for second part
//div s_two
        var div_s_two =document.createElement('div');
        div_s_two.classList.add("s_two");
        div_s_two.classList.add("flex-child");

        var div_s_two_one =document.createElement('div');
        div_s_two_one.classList.add("s_two_one");
        div_s_two_one.innerText = "Exess ₹2/km"
        
        var div_s_two_two =document.createElement('div');
        div_s_two_two.classList.add("s_two_two");

        var div_s_two_two_booking =document.createElement('div');
        div_s_two_two_booking.classList.add("s_two_booking");

        var btn = document.createElement('button');
        btn.classList.add("btn11");
        btn.innerText = "Book Now";

        btn.onclick=(function (){
            bookNowClicked(products);
        })

        div_s_two_two_booking.append(btn);
        div_s_two_two.append(div_s_two_two_booking);
        div_s_two.append(div_s_two_one,div_s_two_two);
        
        var onlyone = document.createElement('div');
        onlyone.classList.add("flex-container");
        onlyone.append(div_s_one,div_s_two)

        div.append(div_img_div,div_bk,onlyone);

        data_div.append(div);
    })
}
showData();