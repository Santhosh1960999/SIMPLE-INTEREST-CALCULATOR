let m=document.getElementById('main');
let res=document.getElementById("result");
let select=document.getElementById("est_date")
let est=document.getElementById('est');
let actual=document.getElementById('actual');
function updateDisplay() {
    if (select.value === "Estimate") {
        est.style.display = "flex";
        actual.style.display = "none";
    } else {
        est.style.display = "none";
        actual.style.display = "flex";
    }
}
updateDisplay();
select.addEventListener('change',updateDisplay)
function Submit(){
    let a=document.getElementById("a");
    let b=document.getElementById("b");
    let d=document.getElementById("d");
    let x=document.getElementById("x");
    let y=document.getElementById("y");
    let z=document.getElementById("z");
    let amt=document.getElementById("amount").value;
    let r=document.getElementById("Interest").value;
    
    let t=document.getElementById("t").value;
    let u=document.getElementById("u").value;
    let v=document.getElementById("v").value;
    let c=document.getElementById("c");
    let d1= new Date(document.getElementById("given_date").value);
    let d2= new Date(document.getElementById("to_date").value);
    if(d1>d2) document.innerHTML="Enter Valid Date";
    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
        days += 30;   // Every month is treated as 30 days
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }
    let tdays;
    t=Number(t);
    u=Number(u);
    v=Number(v);
    if(select.value==='Actual'){
     tdays = years * 360 + months * 30 + days;
    }
    else if(select.value==='Estimate'){
        tdays=t*360+u*30+v;
    }
   
    
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
    if(select==='Actual'){
        x.innerHTML=`Given Amount = <span style="color:yellow">${amt}RS</span>`
        y.innerHTML=`Given Date = <span style="color:yellow">${d1.toDateString()}</span>`
        z.innerHTML=`To Date = <span style="color:yellow">${d2.toDateString()}</span>`
        d.innerHTML=`Total Number Of Days = <span style="color:yellow">${years} Years and ${months} Months and ${days} Days</span>`
        a.innerHTML=`Interest Amount = <span style="color:yellow">${inte}Rs</span>`
        b.innerHTML=`Total Amount = <span style="color:yellow">${Number(amt+inte)}Rs</span>`
        res.style.display="flex";
        m.style.display="none";
    }
    else{
        x.innerHTML=`Given Amount = <span style="color:yellow">${amt}RS</span>`
        y.innerHTML=`Years = <span style="color:yellow">${t} Years</span>`
        z.innerHTML=`Months = <span style="color:yellow">${u} Months</span>`
        d.innerHTML=` Days = <span style="color:yellow"> ${v} Days</span>`
        a.innerHTML=`Interest Amount = <span style="color:yellow">${inte}Rs</span>`
        b.innerHTML=`Total Amount = <span style="color:yellow">${Number(amt+inte)}Rs</span>`
        res.style.display="flex";
        m.style.display="none";
    }
}

function Close(){
    window.location.reload();
}