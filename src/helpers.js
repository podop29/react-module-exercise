
function choices(items){
   let rand =  Math.floor(Math.random() * items.length);
   return items[rand]
}

function remove(items,item){
    return items.filter(function(ele){ 
        return ele != item; 
    });
    return undefined
}

export {choices,remove}