var mySet = new Set(['A','B','C']);

mySet.add("Bangladesh");
mySet.add("Nepal");
mySet.add("Bhutan");
mySet.add("Chaina");
mySet.add("Maldip");
mySet.add("Mayanmar");
mySet.add("Mayanmar");
//mySet.clear();
mySet.delete("Nepal");

console.log(mySet.size);
console.log(mySet.values());
if (mySet.has("canada")){
console.log("yes");
}
else {console.log("No")};