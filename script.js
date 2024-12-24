//i
let a=12;
if(a==12)
    {
        console.log("The values are equal");
    }
    if(a==12||(a==20))
        {
            console.log("The values are equal");
        }
        else
        {
            console.log("not");
        }

       // nested if
   //else if
   //switch statement
   //switch(expression)
  // {
  //  case value1:
     //   break;
      //  case value 2;
     //   break;
//default:
//statement;
   //}
   let day=3;
   let dayname;
   switch(day)
   {
    case 1:dayname='Sunday';
    break;
    case 2:dayname='Monday';
    break;
    case 3:dayname='Tuesday';
    break;
    case 4:dayname='Wednsday';
    break;
    case 5:dayname='Thursday';
    break;
    case 6:dayname='Friday';
    break;
    case 7:dayname='Saturday';
    break;
  default:dayname="Invalid";
    console.log(dayname);

   }


///Looping
//for
//for/in
//for/of
//while
//do while

//*For loop
//for(initialisation;condition;iteration;)
  //  {

   // }
   for(let i=0;i<5;i++)
    {
        console.log(i);
    }
    const person={
        name:"john",age:25,place:"TVM"
    }
let txt="";
for(let x in person)
    {
        txt+=person[x] + " ";

    }
    console.log(txt);
    /*for(let x in numbers)
        {
            txt+=numbers[x]+"<br>";
        }
        console.log(txt);
        }*/
        /*
        var person1={
            firstname:'john',
            lastname:'Doe'
        };
        for(var prop in person1)
            {
                console.log(person1[prop]);
            }*/
        //for/of
        //for(variable of iterable)
           // {

           // }
            const cars=["BMW","VOLVO","MINI"];
            let text="";
            for(let x of cars)
                {
                    text+=x + '/n'
                }
                console.log(text);
                //while looop
               // while(condition)
                 //   {
                        //statement
                  //  }
                    let count=1;
                    while(count<10)
                        {
                            console.log(count);
                            count+=2;

                        }
/*
let fruits=["Apple","Banana"];
let ab=0;
while(a<fruits.length)
    {
        console.log(`${ab+1}`.${fruits[ab]}`);
   a++;
    }*/