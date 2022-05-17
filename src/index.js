import {choices,remove} from './helpers'
import foodList from './food'


const randomFruit = choices(foodList)
console.log("Id like one",randomFruit,  "please")
console.log("Here you go: ",randomFruit)
console.log("Delicious, may i have another one?")
remove(foodList, randomFruit)
console.log("Im sorry we are all out of. We have ", foodList.length, " left")

