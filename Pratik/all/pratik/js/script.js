
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function bookNowClicked(p){
    ck_login = check_login();

    if(ck_login){
        function togglePopup() {
            document.getElementById("popup-1").classList.toggle("active");
        }
    
        function showDataOnPopup(){
            var city_data = JSON.parse(localStorage.getItem("Date"));
            

            
            pickupLocationData(city_data.city);
            
            

            
        }
        showDataOnPopup();
    
        function fun123(one,two,three){
            console.log("I am fun123");
            function createobj(one,two,three){
                this.loac =one,
                this.lc = two,
                this.lk = three
            }
            var tmp = new createobj(one,two,three);
            localStorage.setItem("namename",JSON.stringify(tmp));

            location.href = "tp.html";
        }
        togglePopup();

    }else{

    }
}

function check_login() {
    return true;
}

function pickupLocationData(city_datacity){

    console.log(city_datacity);

    

    if(city_datacity == "hyderabad"){

    }

    if(city_datacity == "jaipur"){

    }

    if(city_datacity == "gurugram"){

    }

    if(city_datacity == "mysuru"){

    }

    if(city_datacity == "udaipur"){

    }

    if(city_datacity == "ahmedabad"){

    }

    if(city_datacity == "bengaluru"){

        var popup_div = document.getElementById('popup_div');

        var div = document.createElement('div');
        div.style.backgroundColor = "#f7f7f7";
        var heading = document.createElement('h3')
        heading.innerText = "Kundalahalli";
        var para = document.createElement('P');
        para.innerText = "Station timing : 7 AM - 8 PM"
        var para2 = document.createElement('P');
        para2.innerText = "Kundalahalli gate signal"
        var para3 = document.createElement('P');
        para3.style.backgroundColor ="#00b468";
        para3.style.height = '25px';
        para3.onclick = function(){fun123("Kundalahalli","Station timing : 7 AM - 8 PM","Kundalahalli gate signal")}
        para3.innerText = "Next"
        

        div.append(heading,para,para2,para3);

        popup_div.append(div);

        var div = document.createElement('div');
        div.style.backgroundColor = "#f7f7f7";
        var heading = document.createElement('h3')
        heading.innerText = "Electronic City";
        var para = document.createElement('P');
        para.innerText = "Station timing : 7 AM - 8 PM"
        var para2 = document.createElement('P');
        para2.innerText = "Kundalahalli gate signal"
        var para3 = document.createElement('P');
        para3.style.backgroundColor ="#00b468";
        para3.style.height = '25px';
        para3.onclick = function(){fun123()}
        para3.innerText = "Next"

        div.append(heading,para,para2,para3);

        popup_div.append(div);

        var div = document.createElement('div');
        div.style.backgroundColor = "#f7f7f7";
        var heading = document.createElement('h3')
        heading.innerText = "HSR 7th Sector";
        var para = document.createElement('P');
        para.innerText = "Station timing : 7 AM - 8 PM"
        var para2 = document.createElement('P');
        para2.innerText = "Kundalahalli gate signal"
        var para3 = document.createElement('P');
        para3.style.backgroundColor ="#00b468";
        para3.style.height = '25px';
        para3.onclick = function(){fun123()}
        para3.innerText = "Next"

        div.append(heading,para,para2,para3);

        popup_div.append(div);

        var div = document.createElement('div');
        div.style.backgroundColor = "#f7f7f7";
        var heading = document.createElement('h3')
        heading.innerText = "Koramangala";
        var para = document.createElement('P');
        para.innerText = "Station timing : 7 AM - 8 PM"
        var para2 = document.createElement('P');
        para2.innerText = "Kundalahalli gate signal"
        var para3 = document.createElement('P');
        para3.style.backgroundColor ="#00b468";
        para3.style.height = '25px';
        para3.onclick = function(){fun123()}
        para3.innerText = "Next"

        div.append(heading,para,para2,para3);

        popup_div.append(div);

        var div = document.createElement('div');
        div.style.backgroundColor = "#f7f7f7";
        var heading = document.createElement('h3')
        heading.innerText = "Electronic city Hub";
        var para = document.createElement('P');
        para.innerText = "Station timing : 7 AM - 8 PM"
        var para2 = document.createElement('P');
        para2.innerText = "Kundalahalli gate signal"
        var para3 = document.createElement('P');
        para3.style.backgroundColor ="#00b468";
        para3.style.height = '25px';
        para3.onclick = function(){fun123()}
        para3.innerText = "Next"

        div.append(heading,para,para2,para3);

        popup_div.append(div);

        var div = document.createElement('div');
        div.style.backgroundColor = "#f7f7f7";
        var heading = document.createElement('h3')
        heading.innerText = "Kundalahalli";
        var para = document.createElement('P');
        para.innerText = "Station timing : 7 AM - 8 PM"
        var para2 = document.createElement('P');
        para2.innerText = "Kundalahalli gate signal"
        var para3 = document.createElement('P');
        para3.style.backgroundColor ="#00b468";
        para3.style.height = '25px';
        para3.onclick = function(){fun123()}
        para3.innerText = "Next"
        

        div.append(heading,para,para2,para3);

        popup_div.append(div);

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
    var ci = new create(10,"hyderabad","RAIDURGAM POLICE COMMISSIONARATE","Station timing : 9 AM - 7 PM","OYO 3607 Apartment",5);
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
            