const button = document.getElementById('btn')
const number = document.getElementById('num')

function myFunction(a){
    alert(`Entered value is ${a}`)
}


button.addEventListener('click',()=> {
  const num = number.value
    
  if (num== ''){
    alert('please enter the value')
  }
   else if(num % 2 == 0){
    myFunction('even')
  }
else{
  myFunction('odd')
}
})
