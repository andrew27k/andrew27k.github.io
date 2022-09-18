let cookie = 0;

let perClick = 1;

document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');




function add(){


    	if(localStorage.cookie){
            localStorage.cookie = Number(localStorage.cookie) + Number(localStorage.perClick);
        }else{
            localStorage.cookie = 1;
        }
        
        document.getElementById("cookies").innerHTML = localStorage.getItem('cookie');
        document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
        
    
        if(localStorage.cookie >= 100){
            document.getElementById('reset').style.display = "block";
        }else {
            document.getElementById('reset').style.display = "none";
        }

   
}

// Upgrades

function upgrade1(){
    

    if(localStorage.cookie >= 15){
        localStorage.cookie -=15;
        localStorage.perClick ++;
        document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
        document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
        
    }else{
        window.alert('Du hast zu wenig Coins!');
    }
}
function upgrade100(){
    

    if(localStorage.cookie >= 10000){
        localStorage.cookie -=10000;
        localStorage.perClick = Number(localStorage.perClick) + 100;
        document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
        document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
        
    }else{
        window.alert('Du hast zu wenig Coins!');
    }
}

// document.getElementById('1000plus').onclick = function(){
//   if(localStorage.cookie >= 10000){
//     localStorage.cookie -= 100000;
//     localStorage.perClick = Number(localStorage.perClick) + 1000;
//     document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
//     document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perclick');
//   }
// }

function upgrade1000(){
  if(localStorage.cookie >= 10000){
      localStorage.cookie -=100000;
      localStorage.perClick = Number(localStorage.perClick) + 1000;
      document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
      document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
  }
}


function addCookie(){
  localStorage.cookie = Number(localStorage.cookie) + 1000;
  document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
}


// Upgrades

const userName = localStorage.myName;

document.getElementById('infoBoxBtn').onclick = function(){
  closeInfoBox();
}

function openInfoBox(){
  infoBox.classList.add('active');
  document.getElementById('msg').innerHTML = "Willkommen zurück " + userName + " 😎";
}

function closeInfoBox(){
  infoBox.classList.remove('active');
}



function loadSite(){

  if(localStorage.visited == "false" || "true" || "undefined" || "NaN"){
    localStorage.getItem('visited');
  } else {
    localStorage.setItem('visited', NaN); //Legt einen neuen localstorage an!


  }
     
     document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
     document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
     
     perClick = localStorage.getItem('perClick');
     
     if(perClick < 1){
         perClick = 1;
         
         localStorage.setItem('perClick', perClick);
         document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
     }

     if(localStorage.cookie == undefined || NaN){
         localStorage.cookie = 0;
    }

    if(localStorage.visited == "true"){
        testLoad();
    } else if(localStorage.visited == "false" || "undefined" || "NaN" || " "){
      openInfo();
    }

  }

  // ColorPicker

  let colorPickerValue = localStorage.colorPicker;

  if(colorPickerValue === '' || 'true' || 'false' || 'NaN' || 'Default'){
    // localStorage.setItem('colorPicker', 'colorOrange')
  }else if(colorPickerValue === 'colorBlue' || 'colorRed' || 'colorGreen' || 'colorYellow' || 'colorViolett' || 'colorOrange'){
    localStorage.setItem('colorPicker', colorPickerValue);
  }


  // ColorPicker

  document.getElementById('usernameID').innerHTML = localStorage.getItem('myName');

  
  
  function testLoad(){

    const myName = localStorage.getItem('myName');

    if(myName == ''){
      console.log("myName is leer!");
    }else if(myName !== ''){
      openInfoBox();                   //Willkommens Nachricht!
    }
  
    setTimeout(closeInfoBox, 3000);
  }






  function shop(){
      document.getElementById('content').style.display ="none";
      document.getElementById('shop').style.display ="flex";
      document.getElementById('shop-icon').style.display ="none";
      document.getElementById('back-icon').style.display ="block";
  }
  function back(){
      document.getElementById('content').style.display ="flex";
      document.getElementById('shop').style.display ="none";
      document.getElementById('shop-icon').style.display ="flex";
      document.getElementById('back-icon').style.display ="none";
  }


    

  function toDefault(){
      localStorage.cookie = 0;
      localStorage.perClick = 1;
      localStorage.autoClick = 0;
      document.getElementById('cookies').innerHTML = localStorage.getItem('cookie');
      document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');

      window.alert('Alle Stats werden zurückgesezt!')
      back();
      loadSite();
  }




const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  showInfo();
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Other things

function showInfo(){
  const headLine = document.getElementById('headline');
  const customText = document.getElementById('modal-body-text');
  const infoText = '"' + localStorage.getItem('cookie') + '🍪s" gehen verloren';

  headLine.innerHTML = "Alles auf anfang!";
  customText.innerHTML = "Bist du dir sicher das du alles zurücksetzen willst? 😲 " + infoText;
}



document.getElementById('myButton').onclick = function(){

    let myName = document.getElementById('myName').value
      localStorage.setItem('myName', myName);

      localStorage.setItem('visited', true);



  // closeInfo();
}


function closeInfo(){
  firstLoadView.classList.remove('active');
  overlay.classList.remove('active');
}



function openInfo(){
  firstLoadView.classList.add('active');
  overlay.classList.add('active');
}

document.getElementById('settings').onclick = function(){
  settingMenu.classList.toggle('active');
}

document.getElementById('settingMenuClose').onclick = function(){
  settingMenu.classList.remove('active');
}


document.getElementById('renameBtn').onclick = function(){
  openInfo();
}

// document.getElementById('closeBtn').onclick = function(){
//   closeInfo();
// }

// document.getElementById('btn').onclick = function(){
//   openInfo();
// }

// Timeout function!!!!

// document.getElementById('btn').onclick = function(){
//   openInfo();
//   timeout = setTimeout(closeInfo, 3000);
// }


// document.getElementById('myName').onclick = function(){
//   clearTimeout(timeout);
// }

// Timeout function!!!!
