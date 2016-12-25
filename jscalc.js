function addValue(){
  var num1,num2;
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("result").value = num1+num2;
}
var prev, curr, sign, num, prev_sign, curr_sign, sum;
curr = "";
sign = null;
num = "";

var numbers = ["zero","one","two","three","four","five","six",
"seven","eight","nine"];
function getValue(id){
  var text = 5 + "." + 6;
  var  inputVal;
  //num = "";

  if(numbers.includes(id) == true){
    inputVal = parseInt(document.getElementById("result").value);
    console.log("number is : " + num);
    console.log(sign);
    if (inputVal == "0" || sign == null){
      num += document.getElementById(id).innerHTML;
      console.log("Inside isNan ");
      prev = num;
      document.getElementById("result").value = prev;
      console.log(curr);
    }
    else if(prev != null && sign == "+"){
      if(curr == null){
        num = "";
        num += document.getElementById(id).innerHTML;
        console.log("inside elseif");
        curr += num;
      }
      else if(curr != null){
        num = "";
        num += document.getElementById(id).innerHTML;
        curr += num;
      }
      sum = parseInt(curr) + parseInt(prev);
      //prev=sum;
      document.getElementById("result").value = curr;
    }
    else if(prev != null && sign == "-"){
      if(curr == null){
        num = "";
        num += document.getElementById(id).innerHTML;
        console.log("inside elseif");
        curr += num;
      }
      else if(curr != null){
        num = "";
        num += document.getElementById(id).innerHTML;
        curr += num;
      }
      sum = parseInt(prev) - parseInt(curr);
      //prev=sum;
      document.getElementById("result").value = curr;
    }
    else if(prev != null && sign == "*"){
      if(curr == null){
        num = "";
        num += document.getElementById(id).innerHTML;
        console.log("inside elseif");
        curr += num;
      }
      else if(curr != null){
        num = "";
        num += document.getElementById(id).innerHTML;
        curr += num;
      }
      sum = parseInt(curr) * parseInt(prev);
      document.getElementById("result").value = curr;
    }
    else if(prev != null&& sign == "/"){
      if(curr == null){
        num = "";
        num += document.getElementById(id).innerHTML;
        console.log("inside elseif");
        curr += num;
      }
      else if(curr != null){
        num = "";
        num += document.getElementById(id).innerHTML;
        curr += num;
      }
      sum = parseInt(prev)/parseInt(curr);
      document.getElementById("result").value = curr;
    }
  }

  else{
    sign = document.getElementById(id).innerHTML;
    if(sign=="C"){
      prev = null;
      curr = "";
      sign = null;
      document.getElementById("result").value = "0";
      num = "";
    }
    else if(sign == "="){
        console.log("inside = ");
        document.getElementById("result").value = sum;
        curr = "";
        prev=sum;
    }
    console.log("sign is " + sign);
  }
  //document.getElementById("result").value = sumVal.toString();
}
