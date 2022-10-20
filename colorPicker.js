let r = document.querySelector(':root');

let colorBlue = document.getElementById('colorBlue');
let colorRed = document.getElementById('colorRed');
let colorGreen = document.getElementById('colorGreen');
let colorYellow = document.getElementById('colorYellow');
let colorViolett = document.getElementById('colorViolett');
let colorOrange = document.getElementById('colorOrange');

colorBlue.onclick = function(){
  r.style.setProperty('--primary', '#80CED7');
  r.style.setProperty('--hover', '#80CED7b7');
  localStorage.setItem('colorPicker', 'colorBlue');
}

colorRed.onclick = function(){
  r.style.setProperty('--primary', '#D64045');
  r.style.setProperty('--hover', '#D64045b7');
  localStorage.setItem('colorPicker', 'colorRed');
}

colorGreen.onclick = function(){
  r.style.setProperty('--primary', '#63C132');
  r.style.setProperty('--hover', '#63C132b7');
  localStorage.setItem('colorPicker', 'colorGreen');
}

colorYellow.onclick = function(){
  r.style.setProperty('--primary', '#FDCA40');
  r.style.setProperty('--hover', '#FDCA40b7');
  localStorage.setItem('colorPicker', 'colorYellow');
}

colorViolett.onclick = function(){
  r.style.setProperty('--primary', '#645E9D');
  r.style.setProperty('--hover', '#645e9db7');
  localStorage.setItem('colorPicker', 'colorViolett');
}

colorOrange.onclick = function(){
    r.style.setProperty('--primary', '#eb5e28');
    r.style.setProperty('--hover', '#dd6130b7');
    localStorage.setItem('colorPicker', 'colorOrange');
}






if(localStorage.colorPicker === 'colorBlue'){
  r.style.setProperty('--primary', '#80CED7');
  r.style.setProperty('--hover', '#80CED7b7');
}else if(localStorage.colorPicker === 'colorRed'){
  r.style.setProperty('--primary', '#D64045');
  r.style.setProperty('--hover', '#D64045b7');
}else if(localStorage.colorPicker === 'colorGreen'){
  r.style.setProperty('--primary', '#63C132');
  r.style.setProperty('--hover', '#63C132b7');
}else if(localStorage.colorPicker === 'colorYellow'){
  r.style.setProperty('--primary', '#FDCA40');
  r.style.setProperty('--hover', '#FDCA40b7');
}else if(localStorage.colorPicker === 'colorViolett'){
  r.style.setProperty('--primary', '#645E9D');
  r.style.setProperty('--hover', '#645e9db7');
}else if(localStorage.colorPicker === 'colorOrange'){
  r.style.setProperty('--primary', '#eb5e28');
  r.style.setProperty('--hover', '#dd6130b7');
}