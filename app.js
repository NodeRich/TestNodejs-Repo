{
    /*
    console.log("Hello World");
    alert("Are you mad?");
    document.getElementById("Name").innerHTML = "Name:";
    _namestring = prompt("What is your name?");
    document.getElementById("Namestring").innerHTML = _namestring;
    
    
    function Greetings(){
        var Name = prompt("what is your Name?");
        var result =  "Hello "+ Name
        console.log(result);
    }
    
    Greetings();
    
    
    
    // while loops
    
    var num = 0;
    
    while (num < 50 ) {
        num += 1;
        console.log(num);
    };
    
    
    
    // For loops
    
    for (let num =0; num<=50; num++){
        console.log(num);
    }
    
    
    document.getElementById("_btnconfirm").onclick = function(){
        document.getElementById("_txtconfirm").innerHTML = "order placed!!! please check your email for confirmation";
        document.getElementById("_btnconfirm").style.display = "none";
    }
    
    (function (){
        // IIFE
        var age = 50;
        var dog = "bow bow";
    })();
    
    let person = {  //  objects and functions inside it
        name : 'rahul',
        age : 28,
        hobby : "coding",
        info: function(){
            console.log(`${this.name.toUpperCase()} is ${this.age} years old.And he is interested in ${this.hobby}`);
        }
    };
    
    person.info();
    
    
    let now = new Date();
    console.log(now);
    
    
    {
        let myname = "rahul";
        console.log(myname.toUpperCase());
    
        let myage = 9007199254740991;
        console.log(Number.isSafeInteger(myage));
    }
    
    //if else statement
    {
        let name = prompt();
        let age = 28;
        if (name==="Rahul"){
            console.log(`welcome ${name}`);
        }else if(name === "sarath"){
            console.log(`welcome ${name}`);
        }else{
            console.log("you are not welcome");
        }
    }
    
    
    // single line if statement
    {
        let fruit = prompt();
        if (fruit = 'banana') console.log("its a banana!")
    }
    
    
    //Nested loops
    
    {
        let d = document.getElementById("divident");
        for (let i = 0; i < 10; i++){
            for (let k=i; k>=0; k--){
                d.append(k+"  ");
            }
            let br = document.createElement("br");
            d.appendChild(br);
        }
        
    }
    
    
    //loop through the arrays
    
    {
        let grades = [[15,12,45,78,96,32,25,24,26], [ 123,456,789,963,852,], [ 1234,5463,8796,1475]];
        grades.forEach(function(row){
            row.forEach(function(col){
                console.log(col);
            })
            console.log("-------");
        }
        )
    }
    
    
    
    {
     pow.calculated = {};
    
     function pow(x,y){
            let keyword = x+"^"+y;
            let powval = 1;
            
            if (keyword !== "undefined^undefined"){
                for (let i = 0; i<y; i++){
                powval*=x;
                }
                if (keyword in pow.calculated){
                    console.log("keyword found");
                }else{
                    pow.calculated[keyword]=powval;
                    console.log(pow.calculated);
                }
                return pow.calculated;
            }else{
                return "err: argument values not accepted";
            }
            }
     pow(2,3);
    
    }
    
    */
    }
    //constuctor and prototype 
    /*
    {
        function User(name,hobby){
            this.name = name,
            this.hobby = hobby
        }
    
        User.prototype.greet = function(){
            console.log("my name is " + this.name,this.hobby);
        }
    
        function myuser(){
            this.security = 9999;
            if (this.security>9999) this.security = 9999;
            if (this.security<1) this.security = 1;
        }
    
        var me = new User('rahul',['Drinks','coding']);
        me.greet();
        let you = new User('sarath',['smoke','coding']);
        you.greet();
    }
    */
    /*
    // Html Tests
    {
        const myHeading = document.querySelector('h2');
        myHeading.textContent = "Hello world!";
        let Quicktest = document.getElementById("Quicktest");
        let Main = document.getElementById("Main");
        Quicktest.innerHTML = "Testing Quicktest";
        Main.innerHTML = "Testing Main";
    }  
    */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            var response = JSON.parse(xhttp.responseText);
            var people = response.people;
            console.log(response.people);
            //console.log(response.people);
            var out1 = '';
            for (var i=0; i < people.length; i++){
                out1 += '<li>'+people[i].Name+'</li>';
                console.log(people[i].Name);
            }
            document.getElementById("people").innerHTML=out1;
        }
    };
    xhttp.open("GET", "People.json",true);
    xhttp.send();
   
