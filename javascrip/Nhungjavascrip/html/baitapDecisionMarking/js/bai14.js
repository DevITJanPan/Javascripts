let n = Number(prompt("Nhập vào một số nguyên n: "));
if(n>1){
 for(let index =2;index<n; index++){
  let checkPrime=true;
  for(let i=2; i<=Math.sqrt(index);i++){
    if (index%i==0){
      checkPrime=false;
      break;
    }
  }
  if(checkPrime){
    console.log(index);
  }
 }
}else{
  alert("Không có số nguyên tố nào");
}


