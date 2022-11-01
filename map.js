var myMap = new Map();

myMap.set('key1', "Bangladesh");
myMap.set('key2', "India");
myMap.set('key3', "srilangka");
myMap.set('key4', "Maldip");
myMap.set('key5', "Nepal");
myMap.set('key6', "Vutan");
myMap.set('key7', "Mayanmar");

console.log(myMap.get("key7"));
//myMap.clear();
// myMap.delete("key1")
// myMap.delete("key2")

//console.log(myMap.keys(),myMap.values());
// for(let myvalue of myMap.values()){
//     console.log(myvalue);
// }
// for(let mykeys of myMap.keys()){
//     console.log(mykeys);
// }
if(myMap.has("key9")){
    console.log("yes")
}
else
{
    console.log("no")
}