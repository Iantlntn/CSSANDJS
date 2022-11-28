function navlink(){
   const cssv = document.getElementById('cssid');
   const hp = document.getElementById('home-page');
   const csp = document.getElementById('css-page');
   const jsp = document.getElementById('js-page');
    if (cssv.className == "change") {
      cssv.className = "change1";
      hp.style.display = "none";
      csp.style.display = "block";
      jsp.style.display = "none";
    } 
    else {
      cssv.className = "change";
      hp.style.display = "block";
      csp.style.display = "none";
    }

   document.getElementById('jsid').className = "change";
}

function jsnavlink(){
   const jsv = document.getElementById('jsid');
   const hp = document.getElementById('home-page');

   const jsp = document.getElementById('js-page');
   const csp = document.getElementById('css-page');

    if (jsv.className == "change") {
      jsv.className = "change1";
      hp.style.display = "none";
      jsp.style.display = "block";
      csp.style.display = "none";
    } 
    else {
      jsv.className = "change";
      hp.style.display = "block";
      jsp.style.display = "none";
    }
    
   document.getElementById('cssid').className = "change";

}

//let username = window.prompt("whats ur name: ");

///////////////////////NAME SLICE PROJECT////////////////////////////////////////////////////////////
function press(){
   let userx = document.getElementById("inputed").value
   if(userx === ""){
       alert("please enter your name")
   }
  else{
    window.alert("your name is " + userx)
    let f;  
    let l;
    f = userx.slice(0, userx.indexOf(" ")).toUpperCase()
    l = userx.slice(userx.indexOf(" ") + 1).toUpperCase()
    document.getElementById("fname").innerHTML = f
    document.getElementById("lname").innerHTML = l
  }
  document.getElementById("inputed").value = ""
}

///////////////////////COUNTER PROJECT////////////////////////////////////////////////////////////
let count = 0
let sv = 0
let countarray = []
document.getElementById("subbtn").onclick = function(){
    count -= 1
    document.getElementById("countnum").innerHTML = count 
}
document.getElementById("resetbtn").onclick = function(){
  count = 0  
  sv = 0
  countarray = []
  document.getElementById("rcntnum").innerText = ""
  document.getElementById("totalnum").innerText = ""
  document.getElementById("countnum").innerText = count 
}
document.getElementById("addbtn").onclick = function(){
  count += 1  
  document.getElementById("countnum").innerHTML = count       
}

document.getElementById("savebtn").onclick = function(){
    countarray.push(count)
    sv += count
    document.getElementById("rcntnum").innerText = countarray
    document.getElementById("totalnum").innerText = sv
}

///////////////////////////////////////////////////////////////////////////////////
// let rd = Math.floor(Math.random() * 6) + 1  
// console.log(rd)

///////////////////////RANDOM PROJECT////////////////////////////////////////////////////////////
document.getElementById("rdmbtn").onclick = function(){
     let max = document.getElementById("rdmmax").value
     let a = Math.floor(Math.random() * max) + 1   
     document.getElementById("resrdm").innerHTML = a  
}


///////////////////////IMAGE CHANGE SRC PROJECT////////////////////////////////////////////////////////////
document.getElementById('imgvalue').onmouseover = function(){
      let fc = document.getElementById('imgvalue')
      let val = fc.getAttribute("src")
      if(val == "img/meme1.png"){
        fc.src = "img/meme2.png"
      }
      else{
        fc.src = "img/meme1.png"
      }
}   

document.getElementById('imgvalue').onmouseout = function(){
     document.getElementById('imgvalue').src = "img/meme1.png"
}

///////////////////////CHECKED PROPERTY////////////////////////////////////////////////////////////
document.getElementById("checkbox").onclick = function(){
  let state = document.getElementById("checkbox")
  let contentState = document.getElementById("checkedfollow")
  if(state.checked){
    contentState.innerText = "Following"
  }
  else{
    contentState.innerText = "Follow"
  }
}

//////////////////SIMPLE CALCULATOR//////////////
let nm1 = 0;
let nm2 = 0;
let OP = ""
let inputVal = document.getElementById('calnum1')

function calbtn(val){ 
        inputVal.value += val.innerHTML
}

document.getElementById("cal-add").onclick = function(){
      nm1 = inputVal.value
      OP = "A"
      inputVal.value = ""
}

document.getElementById("cal-sub").onclick = function(){
      nm1 = inputVal.value
      OP = "S"
      inputVal.value = ""
}

document.getElementById("cal-dv").onclick = function(){
      nm1 = inputVal.value
      OP = "D"
      inputVal.value = ""
}

document.getElementById("cal-mul").onclick = function(){
      nm1 = inputVal.value
      OP = "M"
      inputVal.value = ""
}

let res = 0
document.getElementById("cal-equal").onclick = function(){
     nm2 = inputVal.value

     switch(OP){
      case "A":
      inputVal.value = Number(nm1) + Number(nm2) 
      break;
      case "S":
      inputVal.value = Number(nm1) - Number(nm2) 
      break;
      case "D":
      inputVal.value = Number(nm1) / Number(nm2) 
      break;
      case "M":
      inputVal.value = Number(nm1) * Number(nm2) 
      break;
     }
}

document.getElementById("cal-clear").onclick = function(){
     inputVal.value = ""
     nm1 = 0;
     nm2 = 0;
     OP = ""

}

///////////////NUMBER GUESSING GAME//////////
let guesses = 0
let rdnum = Math.floor(Math.random() * 10 + 1);
let guess = document.getElementById("guess-input")
let guessres = document.getElementById("guess-result") 
document.getElementById("guess-btn").onclick = function(){
       guesses += 1
       if(guess.value == rdnum){
        guessres.innerHTML = `CORRECT! it took you ${guesses} guesess`
        rdnum = Math.floor(Math.random() * 10 + 1)
        guesses = 0
       }
       else if(guess.value < rdnum){
        guessres.innerHTML = "GO HIGHER!"
        guess.value = ""
       }
       else if(guess.value > rdnum){
        guessres.innerHTML = "GO LOWER!"
        guess.value = ""
       }
       else{
        guessres.innerHTML = "INVALID"
       }
}


let one = ["ex", "ex1", "ex2"]
let two = ["2", "e3", "e5 "]

let merge = [one, two]

for(let items of merge){
  for(let item of items){
     console.log(item)
  }
}