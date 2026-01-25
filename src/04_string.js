const name ="saloni"
const repoCount=50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
 const gameName= new String("saloni")

 console.log(gameName[4]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());

 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('l'));

 const anotherString=gameName.substring(0,4)
    console.log(anotherString);

    const sliceString=gameName.slice(0,4)
    console.log(sliceString);

 const newString=gameName.slice(-4)
    console.log(newString);

    // console.log(gameName.includes("sal"));
    // console.log(gameName.includes("sol"));

    // console.log(gameName.split(''));
    // console.log(gameName.split('o'));

    // console.log(gameName.replace('loni','ny'));   

    const newStringOne= " saloni "
    console.log(newStringOne.trim());

    console.log(gameName.valueOf());

    const url="https://www.youtube.com/watch?v=ysz5S6PUM-U&ab_channel=JavaScriptMastery"

    console.log(url.replace('20%','-'));