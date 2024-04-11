//STRING METHODS
console.log(String.prototype); //it gives the internal methods of string

//length method
var name="Haritha";
console.log(name.length); //7
//at method
console.log(name.at(2));  //r
console.log(name.at(-3));  //t  reverse
//charAt
console.log(name.charAt(1));  //a
console.log(name.slice(1,4));     //ari
console.log(name.substring(1,6)); //arith
console.log(name.indexOf('r'));   //2 index
console.log(name.indexOf('k'));   //return -1
console.log(name.includes('h'));  //true
console.log(name.includes('m'));  //false
console.log(name.lastIndexOf('a'));  //6
console.log(name.toUpperCase());  //HARITHA
console.log(name.toLowerCase());  // haritha
console.log(name.repeat(3));      //harithaharithaharitha

var n1=" Hello,world ";
console.log(n1.split(',')); //['Hello', 'world'] seperate the word by help of ','
console.log(n1.trim());  //removes the spaces Hello,world

var add= name+' '+n1;
console.log(add);  //Haritha Hello,world
var con= name.concat(n1);
console.log(con);  //Haritha Hello,world


//NUMBER METHODS
var number= 10;
console.log(typeof(number));   //number
var string =number.toString(); //to convert the number to string
console.log(string);   //10

//convert the string to number
var str="25";
console.log(typeof(str));   //string
console.log(Number(str));   //25
console.log(+str);          //25
console.log(parseInt(str)); //25

var controlTheNumber=1098.8907654;
console.log(controlTheNumber.toFixed(2));  //1098.89  to control the decimal point
var seperateBy=10988907654;
console.log(seperateBy.toLocaleString());  //10,988,907,654


//OBJECT METHODS
console.log(Object.prototype);
var student={
    name:"haritha",
    id:2345
};
console.log(Object.keys(student));    // ['name', 'id']
console.log(Object.values(student));  // ['haritha', 2345]
console.log(Object.entries(student)); // (2) [Array(2), Array(2)] 0 :(2) ['name', 'haritha'] 1:(2)['id', 2345]
console.log(JSON.stringify(student)); //to convert the obj to string   {"name":"haritha","id":2345}
var strToObj= JSON.stringify(student);
console.log(JSON.parse(strToObj));  //to convert to string to obj {name: 'haritha', id: 2345}

console.log(Object.freeze(student));  //{name: 'haritha', id: 2345}
student.id='138w5A0509';    //modifying the id value but it effect on obj because u freeze the obj
console.log(student);  //  {name: 'haritha', id: 2345}

var employee={
    name:"haritha",
    id:2345
};
console.log(Object.seal(employee));  //{name: 'haritha', id: 2345}
employee.name='HS'; //just modify the existing obj value only but not add the new properties.
console.log(employee);  //{name: 'HS', id: 2345}
employee.salary=567896;    // can't add the new propertity
console.log(employee);   //{name: 'HS', id: 2345} 

console.log(Object.is(student.name,employee.name));  //false

//var mergedTwoObj= Object.assign(student,employee);
//console.log(mergedTwoObj);


//ARRAYS METHODS
console.log(Array.prototype);
var fruits=['Apple','Banana','Dragon','Cherry','Orange','Guva'];
console.log(fruits[0]);  //Apple
console.log(fruits[fruits.length-1]);  //Guva
console.log(fruits[1]='kiwi');  //kiwi  update
fruits.push('grapes');
console.log(fruits);  // (7) ['Apple', 'kiwi', 'Dragon', 'Cherry', 'Orange', 'Guva', 'grapes']
fruits.unshift('malberry');
console.log(fruits);  //   (8) ['malberry', 'Apple', 'kiwi', 'Dragon', 'Cherry', 'Orange', 'Guva', 'grapes']
fruits.pop();
console.log(fruits);  //  (7) ['malberry', 'Apple', 'kiwi', 'Dragon', 'Cherry', 'Orange', 'Guva']
fruits.shift();
console.log(fruits);  //   (6) ['Apple', 'kiwi', 'Dragon', 'Cherry', 'Orange', 'Guva']
console.log(fruits.splice(1,3));   //(3) ['kiwi', 'Dragon', 'Cherry']
console.log(fruits);  // (3) ['Apple', 'Orange', 'Guva']
console.log(fruits.splice(2,2,"mango","sapota"));  //(1) ['Guva']
console.log(fruits);  // (4) ['Apple', 'Orange', 'mango', 'sapota']

var fruit=['pinapple','moosabi'];
console.log(fruits.concat(fruit));  //  (6) ['Apple', 'Orange', 'mango', 'sapota', 'pinapple', 'moosabi']
console.log(fruit.includes('Banana'));  //false
console.log(fruits.indexOf('mango'));   //2

