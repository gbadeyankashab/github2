// let a = {name:'teslim',age:10,hobbies:['coding','Eating','Dancing']}
// let {name:usernmae} = a
// let {hobbies:[b,c,d]} =a
// console.log(b);
// let a = [{name:'Teslim',hobbies:['dancing',['hob1','hob2',{size:20}]]}]
// let [{hobbies:[,[,,{size}]]}]=a
// console.log(size);
// let a = [1,2,,3,4,5,6,7]
// let b =[...a]
// a[0]=100
// console.log(a,b);
let {log}=console
let p = new Promise((resolve,reject)=>{
    setInterval(()=>{
        reject('hello')
    },2000)
})
p.then((respo)=>{

  log(respo)
})
// function getdata(){
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// }