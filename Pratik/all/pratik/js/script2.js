
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function bookNowClicked(p){
    ck_login = check_login();
    
    //storing Data for next page
    var arr7 = [];
    arr7.push(p);
    var tptp = JSON.stringify(arr7);
    localStorage.setItem("bookedBike",tptp);

    if(ck_login){
        function togglePopup() {
            document.getElementById("popup-1").classList.toggle("active");
        }
    
        function showDataOnPopup(){
            var city_data = JSON.parse(localStorage.getItem("Date"));
            

            
            pickupLocationData(city_data.city);
            
            

            
        }
        function fun123(one,two,three){
            console.log("I am fun123");
            function createobj(one,two,three){
                this.loac =one,
                this.lc = two,
                this.lk = three
            }
            var tmp = new createobj(one,two,three);
            localStorage.setItem("selectedLocationData",JSON.stringify(tmp));
        
            location.href = "tp.html";
        }
        showDataOnPopup();

        togglePopup();

    }else{

    }
}

function check_login() {
    return true;
}

function fun1234(one,two,three){
    
    function createobj(one,two,three){
        this.loac =one,
        this.lc = two,
        this.lk = three
    }
    var tmp = new createobj(one,two,three);
    localStorage.setItem("selectedLocationData",JSON.stringify(tmp));

    location.href = "tp.html";

    sendDataToNextPage();
}  


function pickupLocationData(city_datacity){
    
        var popup_div = document.getElementById('popup_div').value;
        popup_div = null;
        
        

    if(city_datacity == "hyderabad"){

        var popup_div = document.getElementById('popup_div');
        
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "hyderabad"){

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })
    }

    if(city_datacity == "jaipur"){

        var popup_div = document.getElementById('popup_div');
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "jaipur"){

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })
    }

    if(city_datacity == "gurugram"){

        var popup_div = document.getElementById('popup_div');
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "gurugram"){

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })

    }

    if(city_datacity == "mysuru"){

        var popup_div = document.getElementById('popup_div');
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "mysuru"){

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })
    }

    if(city_datacity == "udaipur"){

        var popup_div = document.getElementById('popup_div');
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "udaipur"){

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })
    }

    if(city_datacity == "ahmedabad"){
       

        var popup_div = document.getElementById('popup_div');
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "ahmedabad"){
               

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })
    }

    if(city_datacity == "bengaluru"){

    

        var popup_div = document.getElementById('popup_div');
        //popup_div.removeChild(div);


        //reginumber,cityname11,place,station_timing,place_loc,available
        //crteatin popus
        
        var dt3 =JSON.parse(localStorage.getItem("cityLocationData"));
        
       dt3.forEach(function (cityes){
            if(cityes.cityname11 == "bengaluru"){
                

                var div = document.createElement('div');
                div.style.backgroundColor = "#f7f7f7";
                var heading = document.createElement('h3')
                heading.innerText = cityes.place;
                var para = document.createElement('P');
                para.innerText = cityes.station_timing;
                var para2 = document.createElement('P');
                para2.innerText = cityes.place_loc;
                var para3 = document.createElement('P');
                para3.style.backgroundColor ="#00b468";
                para3.style.height = '25px';
                para3.onclick = function(){fun1234(cityes.place,cityes.station_timing,cityes.place_loc)}
                para3.innerText = "5+  Available   ➜"

                div.append(heading,para,para2,para3);

                popup_div.append(div);
                
            }
        })
    }
    

}
function citylocationdataobj(){
    var cityLocationArray =[];
    function create(reginumber,cityname11,place,station_timing,place_loc,available){
        this.reginumber = reginumber;
        this.cityname11 = cityname11;
        this.place = place
        this.station_timing = station_timing;
        this.place_loc = place_loc;
        this.available = available;
    }

    var ci = new create(1,"bengaluru","Kundalahalli","Station timing : 7 AM - 8 PM","Kundalahalli gate signal",5);
    cityLocationArray.push(ci);
    var ci = new create(2,"bengaluru","Koramangala","Station timing : 7 AM - 8 PM","Opp. Big Bazaar, Next to Raja",5);
    cityLocationArray.push(ci);
    var ci = new create(3,"bengaluru","Yelahanka","Station timing : 7 AM - 8 PM","Green Trends Salon",5);
    cityLocationArray.push(ci);
    var ci = new create(4,"bengaluru","Electronic City","Station timing : 7 AM - 8 PM","Next to paradise Biryani",5);
    cityLocationArray.push(ci);
    var ci = new create(5,"bengaluru","HSR 7th Sector","Station timing : 7 AM - 8 PM","Next to Donne Briyani Mane",5);
    cityLocationArray.push(ci);
    var ci = new create(6,"bengaluru","Electronic city Hub","Station timing : 7 AM - 8 PM","Next to paradise Biryani",5);
    cityLocationArray.push(ci);

    var ci = new create(7,"hyderabad","Gachibowli","Station timing : 9 AM - 7 PM","Opp. to Maruti True Value",5);
    cityLocationArray.push(ci);
    var ci = new create(8,"hyderabad","Secunderabad","Station timing : 9 AM - 7 PM","Opposite to Yashoda Hospital",5);
    cityLocationArray.push(ci);
    var ci = new create(9,"hyderabad","Madhapur","Station timing : 9 AM - 7 PM","Below Vijaya Lakshmi supermark",5);
    cityLocationArray.push(ci);             
    var ci = new create(10,"hyderabad","Raidurgam Police Commissionarate","Station timing : 9 AM - 7 PM","OYO 3607 Apartment",5);
    cityLocationArray.push(ci);
    var ci = new create(11,"hyderabad","Dilsukhnagar","Station timing : 9 AM - 7 PM","Beside Income Tax Office",5);
    cityLocationArray.push(ci);
    var ci = new create(12,"hyderabad","Ameerpet","Station timing : 9 AM - 7 PM","Aditya Trade center",5);
    cityLocationArray.push(ci);

    var ci = new create(13,"jaipur","New Aatish Market- Metro Station","Station timing : 9 AM - 7 PM","Parking of New Aatish Market Metro station",5);
    cityLocationArray.push(ci);
    var ci = new create(14,"jaipur","GT - Gaurav Tower","Station timing : 9 AM - 7 PM","Gaurav Tower",5);
    cityLocationArray.push(ci);
    var ci = new create(15,"jaipur","Gold Souk Grand Mall -Jawahar Circle","Station timing : 9 AM - 7 PM","Gold Souk Grand Mall -Jawahar Circle",5);
    cityLocationArray.push(ci);
    var ci = new create(16,"jaipur","C Scheme","Station timing : 9 AM - 7 PM","Man Upasana",5);
    cityLocationArray.push(ci);

    var ci = new create(17,"gurugram","Bike Surgeon","Station timing : 9 AM - 9 PM","Gurucharan palace, district co",5);
    cityLocationArray.push(ci);

    var ci = new create(18,"mysuru","Jaganmohan Palace","Station timing : 9 AM - 9 PM","Near Mysore Palace",5);
    cityLocationArray.push(ci);

    var ci = new create(19,"udaipur","Udaipole","Station timing : 9 AM - 5 PM","Near Hotel Shree Narayana",5);
    cityLocationArray.push(ci);

    var ci = new create(20,"ahmedabad","Vijay Cross Road","Station timing : 9 AM - 7 PM","Visitor Parking of the complex",5);
    cityLocationArray.push(ci);

    
    let temp= JSON.stringify(cityLocationArray);

    localStorage.setItem("cityLocationData",temp);
    
}
citylocationdataobj();
            






//This Fuction is only for sendign Data to Localstorage 


function sendDataToNextPage(){
    var datas2 = JSON.parse(localStorage.getItem("selectedLocationData"));
    var datas3 = JSON.parse(localStorage.getItem("Date"));
    var datas4 = JSON.parse(localStorage.getItem("bookedBike"));

    var checkout_arr = [];

    var id = datas4[0].id;
    var cityname = datas3.city;
    var city_location = datas2.loac;
    var city_location_address = datas2.lk;
    var city_location_station_timing = datas2.lc;
    var endDate = datas3.endDate;
    var startDate = datas3.startDate;
    var plan = datas3.plan;
    var image = datas4[0].image;
    var bikeName = datas4[0].name;
    var price = datas4[0].price;

    var address = city_location+", "+city_location_address;

    var obj={
        cityName: cityname,
        plan:plan,
        address:address,
        date1:startDate,
        date2:endDate,
        excess:"Exess 2km/hr",
        free: "free 150 kms",
        image: image,
        name: bikeName,
        price: price,
    }
    checkout_arr.push(obj);
    let temp = JSON.stringify(checkout_arr);
    localStorage.setItem("checkout", temp);
}