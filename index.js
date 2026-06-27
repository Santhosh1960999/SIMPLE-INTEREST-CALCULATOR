let m=document.getElementById('main');
let res=document.getElementById("result");
function Submit(){
    let amt=document.getElementById("amount").value;
    let r=document.getElementById("Interest").value;
    let c=document.getElementById("c");
    let d1= new Date(document.getElementById("given_date").value);
    let d2= new Date(document.getElementById("to_date").value);
    let days=d2-d1;
    if(d1>d2) document.innerHTML="Enter Valid Date";
    let tdays=Math.floor(days/(24*60*60*1000))
    let rate=document.getElementById("rupees").value;
    let inte;
    if(r==="RS"){
        inte=((amt*rate*tdays)/3000).toFixed(2);
        c.innerHTML=`Rate Of Interest = <span style="color:yellow">${rate}RS</span>`
    }
    else if(r==="%"){
        inte=((amt*rate*tdays)/36500).toFixed(2);
        c.innerHTML=`Rate Of Interest = <span style="color:yellow">${rate}%</span>`
    }
    amt=Number(amt);
    inte=Number(inte);
    let a=document.getElementById("a");
    let b=document.getElementById("b");
    let d=document.getElementById("d");
    let x=document.getElementById("x");
    let y=document.getElementById("y");
    let z=document.getElementById("z");
    
    x.innerHTML=`Given Amount = <span style="color:yellow">${amt}RS</span>`
    y.innerHTML=`Given Date = <span style="color:yellow">${d1.toDateString()}</span>`
    z.innerHTML=`To Date = <span style="color:yellow">${d2.toDateString()}</span>`
    d.innerHTML=`Total Number Of Days = <span style="color:yellow">${tdays} Days</span>`
    a.innerHTML=`Interest Amount = <span style="color:yellow">${inte}Rs</span>`
    b.innerHTML=`Total Amount = <span style="color:yellow">${Number(amt+inte)}Rs</span>`
   res.style.display="flex";
   m.style.display="none";
}

function Close(){
    window.location.reload();
}