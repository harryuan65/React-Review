function asyncfunc(){
    return new Promise (function(resolve,reject){
    var value = Math.random()*10 % 10;
    if(value>100){
        resolve(value);
    }else{
        reject('fuck, promise failed');
    }
})
}
async function asd()
{

} 
asyncfunc()
    .then( e => console.log(e) )
    .catch( e => console.log(e))

fetch('https://jsonplaceholder.typicode.com/users')
.then(d => console.log(d))
.catch(d => console.log(d))