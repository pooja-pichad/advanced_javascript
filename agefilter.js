const ages=[32,44,56,33,7]
const result=ages.filter(checkAdult)
function checkAdult(ages){
    return ages>=18
}
console.log(result)