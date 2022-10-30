let btn = document.getElementById("btn");

btn.onclick = function () {
  let mp = parseFloat(document.getElementById("mp").value);
  let np = parseFloat(document.getElementById("np").value);
  let mb = parseFloat(document.getElementById("mb").value);
  let mp2 = mp + (mp * mb) / 100;
  let br = 20;
  let mp1 = mp2 * 1000000000000;
  let np1 = np * 1000000000000000000;
  let price = parseFloat(document.getElementById("price").value);

  var block = br * (mp1 / np1);
  var daily = block * 6 * 24;
  let s = document.getElementById("di");
  s.innerHTML = daily.toFixed(8);
  let mrd = document.getElementById("mrd");
  mrd.innerHTML = price / daily + " gün";
};


function dcountup(startingdate, baseunit){
    this.currentTime=new Date()
    this.startingdate=new Date(startingdate)
    this.timesup=false
    this.baseunit=baseunit
    this.start()
}
dcountup.prototype.oncountup=function(){} //default action for "oncountup"
dcountup.prototype.start=function(){
    var thisobj=this
    this.currentTime.setSeconds(this.currentTime.getSeconds()+1)
    var timediff=(this.currentTime-this.startingdate)/1000 //difference btw target date and current date, in seconds
    var oneMinute=60 //minute unit in seconds
    var oneHour=60*60 //hour unit in seconds
    var oneDay=60*60*24 //day unit in seconds
    var dayfield=Math.floor(timediff/oneDay)
    var hourfield=Math.floor((timediff-dayfield*oneDay)/oneHour)
    var minutefield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour)/oneMinute)
    var secondfield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour-minutefield*oneMinute))
    if (this.baseunit=="hours"){ //if base unit is hours, set "hourfield" to be topmost level
        hourfield=dayfield*24+hourfield
        dayfield="n/a"
    }
    else if (this.baseunit=="minutes"){ //if base unit is minutes, set "minutefield" to be topmost level
        minutefield=dayfield*24*60+hourfield*60+minutefield
        dayfield=hourfield="n/a"
    }
    else if (this.baseunit=="seconds"){ //if base unit is seconds, set "secondfield" to be topmost level
        var secondfield=timediff
        dayfield=hourfield=minutefield="n/a"
    }
    var result={days: dayfield, hours:hourfield, minutes:minutefield, seconds:secondfield}
    this.oncountup(result)
    setTimeout(function(){thisobj.start()}, 1000) //update results every second
}


var princewedding=new dcountup("Dec 9, 2021", "days")
princewedding.oncountup=function(result){
    //result is an object containing the current count up date/time, updated every second
    //Available properties: result["days"], result["hours"], result["minutes"], and result["seconds"]
    var mycountainer=document.getElementById("cpcontainer")
    mycountainer.innerHTML="Çalışma süresi: <b>"+result['days']+"</b> gündür aktif."
}

// TARİH AYARI //
function refrClock()
{
var d=new Date();
var s=d.getSeconds();
var m=d.getMinutes();
var h=d.getHours();
var day=d.getDay();
var date=d.getDate();
var month=d.getMonth();
var year=d.getFullYear();
var days=new Array("Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi");
var months=new Array("Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık");
if (s<10) {s="0" + s}
if (m<10) {m="0" + m}
document.getElementById("clock").innerHTML= "<b>Tarih:</b> " + date + " " + months[month] + " " + year + " | <b>Günlerden:</b> " + days[day] + " | <b>Saat:</b> " + h + ":" + m + ":" + s + " "
setTimeout("refrClock()",1000);
}
refrClock();