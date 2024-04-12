//FOR LOOP
var diff=["Anusha","Bharati","Chutuku","Dhanvitha","Lakshmi","Haritha","komali"];
var names=[];
var na=[];
for(var n of diff){
    console.log(n);
    if(n.includes('k')){
        names.push(n);  
    } 
    if(n[0]==='B'){
        na.push(n);
    }   
}
console.log(names);  //  (3) ['Chutuku', 'Lakshmi', 'komali']
console.log(na);   //  (1) ['Bharati']

//forEach LOOP
diff.forEach(function(value,index){
    console.log(value,index);

})

var numbers=[1,3,-2,6,5];
var mul=numbers.map(function(number){
    return number*2;
});
console.log(mul);   // (5) [2, 6, -4, 12, 10]

var greaterThanValue =numbers.filter(function(value){
    return value>4;
});
console.log(greaterThanValue);  // (2) [6, 5]

numbers.sort(function(a,b){
    return a-b;

});
console.log(numbers);   //  (5) [-2, 1, 3, 5, 6]

var date=new Date();
console.log(date);   //  Fri Apr 12 2024 14:30:26 GMT+0530 (India Standard Time)
var dd=date.getDate();
console.log(dd);    //  12
var mm= date.getMonth();
console.log(mm);   //3
var yyyy=date.getFullYear();
console.log(yyyy);  //2024
var today=`${dd}-${mm}-${yyyy}`
console.log(today);  // 12-3-2024

