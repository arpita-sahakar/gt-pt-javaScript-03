// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number



const findOddOrEven = num =>{
  if(num%2===0){
    return "even"
  }else{
    return "odd"
  }
};

const ans = findOddOrEven(10);
console.log(ans);