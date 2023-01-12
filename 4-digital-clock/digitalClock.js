
setInterval(() => {

    let h= document.getElementById("hour")
    let m=document.getElementById("minute")
    let s=document.getElementById("second");
    let a=document.getElementById("ampm");

    let dateTime=new Date();
    h.innerHTML=dateTime.getHours();
    m.innerHTML=dateTime.getMinutes();
    s.innerHTML=dateTime.getSeconds();

    if(h>12){
        a.innerHTML="PM";
    }else{
        a.innerHTML="AM";
    
    
    }
    
    if(h>=12){
        h=h-12;
    }
    
    if(h<10){
        h= "0"+h;
    }
    if(m<10){
        m= "0"+m;
    }
    if(s<10){
        s= "0"+s;
    }




}, 1000);



