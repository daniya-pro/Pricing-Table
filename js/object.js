var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var plans = [
    
    {
        name: "Basic",
        price: 3.99,
        space: 100,
        transfer: 1000,
        pages: 10,
        discountMonths: [4,6, 7]
    },
    {
        name: "Professional",
        price: 5.99,
        space: 500,
        transfer: 5000,
        pages: 50,
        discountMonths: [6, 7,11]
    },
     {
        name: "Premium",
        price: 6.99,
        space: 300,
        transfer: 3000,
        pages: 500,
        discountMonths: [0, 1,2]
    }
]



 function getMonthsNames(monthsArray){
   
  var MonthsNames = ''
    for(var I =0;I<monthsArray.length;I++){
        var MonthNum = monthsArray[I]
        MonthsNames +=months[MonthNum]+', '
    }
   return MonthsNames
 }

for (var i = 0; i < plans.length; i++) {
    console.log(plans[i].name)
    console.log(plans[i].price)
    console.log(plans[i].space)
    console.log(plans[i].transfer)
    console.log(plans[i].pages)
    console.log(plans[i].discountMonths)

var Basics = plans[i].name
var htmlCard =`
<div class="col-lg-4">
<div class="card mb-5 mb-lg-0">
  <div class="card-body">
    <h5 class="card-title text-muted text-uppercase text-center" >${plans[i].name}</h5>
    <h6 class="card-price text-center">$${plans[i].price}<span class="period">/Month
   <h6 class="h6" style="font-size: 11px;">20% Discount For The Month Of: ${getMonthsNames(plans[i].discountMonths)} </h6>
    </span></h6>
    <hr>
    <ul class="fa-ul">
      <li><span class="fa-li"><i class="fas fa-check"></i></span>${plans[i].space}GB Storage</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>${plans[i].transfer} Data</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>${plans[i].pages} Pages</li>
     <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
    </ul>
    <a class="btn btn-block btn-primary" onclick="onclicks(${i})" data-toggle="modal" data-target="#myModal">Buy Now!</a>
`
document.getElementById("rw").innerHTML += htmlCard
   
}
function onclicks(num){

  var plan = plans[num]
  console.log("specific obj=>>> ",plan)
 var now = new Date().getMonth();
for (let i = 0; i < months.length; i++) {
  if(now === plan.discountMonths[i]){


var totlee=plan.price*.2
var totle =plan.price-totlee 
var discount="20%"
break;
  }
  else{var totle =plan.price;var discount="0%";
  break
}
}
console.log(discount)
var s$ = "$"
var h=`<table style="font-size: 19px;font-family: a;">
<tbody>
<tr>
<td><strong>Sub-Total : </strong>${s$+plan.price}</td>
</tr>
<tr>
<td><strong>Tax : </strong> $0</td>
</tr>
<tr>
<td>
<strong>Discount : </strong>${discount}
</td>
</tr>
<tr>
<td><strong>Total : </strong>${s$+totle}</td>

</tr>
</tbody>
</table> `
var p =plan.name
document.getElementById("h").innerHTML=h
document.getElementById("exampleModalLongTitle").innerHTML=p

}


function removeLoading(){ 
    document.getElementById("s").remove();
    document.getElementById("rw").style.display=""
    document.getElementById("str").style.display=""

}

setTimeout(removeLoading, 1000)