
    //Reference Data Types
    
        //Object Data Types
        var students={
            name:"komali",
            age:28,
            Qualification:"B.tech",
            address:{
                state:"Andhra pradesh",
                city:"martur",
                village:"vemavaram",
                postalInformation:{
                    pincode:523301
                }
            }
        }
        console.log(students);
        console.log(typeof students);
        //access the value with help of key value
        console.log(students.address.postalInformation.pincode);
        console.log(typeof students.address.postalInformation.pincode);
        //update the value
        students.name="Lakshmi";
        console.log(students.name);
        //add the value
        students.branch="cse";
        console.log(students);
        students.address.street="mainroad";
        console.log(students);
        //delete the value
        delete students.address.city;
        console.log(students.address);
    
        //Arrays Data Types
        var employee=[
            {
                name:"jayansh",
                age:22,
                geneder:'male',
                Qualification:"B.tech",
                dept:{
                    id:122743,
                    branch:"cse",
                    role:"developer"
                },
                payment:{
                    salary:987650,
                    hike:10000
                }

        }];
        //access the values with help of index
        console.log(employee);
        console.log(typeof employee);
        console.log(employee[0]);
        //update the value
        employee[0].payment.hike=15000;
        console.log(employee[0].payment);
        //add the object
        employee[1]={
            name:"Dhanvitha",
            age:21,
            geneder:"female",
            Qualification:"B.sc",
            dept:{
                id:122442,
                branch:"It",
                role:"Andriod Developer"
            },
            payment:{
                salary:234567,
                hike:20000
            }
        }
        console.log(employee);