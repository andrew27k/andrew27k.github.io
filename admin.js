const admin = document.querySelector('#admin-control');
const mainCon = document.querySelector('.main-container');
const body = document.body;




const cookies = document.getElementById('cookies');
const clicks = document.getElementById('valueOfPerClick');



admin.addEventListener('click', () => {
    const aksPwCon = document.createElement('div');
    aksPwCon.classList.add('askPwContainer');
    body.appendChild(aksPwCon);

    const overlay = document.getElementById('overlay');

    overlay.classList.add('active')

    const pwInput = document.createElement('input');
    pwInput.setAttribute('type', 'password');
    pwInput.setAttribute('name', 'password');
    pwInput.setAttribute('id', 'askPw');
    pwInput.setAttribute('placeholder', 'PASSWORT');
    aksPwCon.appendChild(pwInput);

    const pwEnter = document.createElement('button');
    pwEnter.textContent = 'Enter';
    pwEnter.classList.add('askPwBtn');
    aksPwCon.appendChild(pwEnter);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close');
    closeBtn.setAttribute('id', 'close');
    closeBtn.innerHTML = '&times;';
    aksPwCon.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        body.removeChild(aksPwCon);
        overlay.classList.remove('active');
    });

    pwEnter.addEventListener('click', () => {
        if(pwInput.value !== '1478963'){
            console.log('Passwort ist Falsch!');
        }else {
            body.removeChild(aksPwCon);
            overlay.classList.remove('active');

                const currCookies = localStorage.cookie;
                const currClicks = localStorage.getItem('perClick') 
            
                // Create Admin Panel
            
                const container = document.createElement('div');
                container.classList.add('admin-con');
                body.appendChild(container);
            
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = `&times;`;
                closeBtn.classList.add('close');
                container.appendChild(closeBtn);
            
                const headline = document.createElement('h1');
                headline.textContent = 'Admin Menu';
                container.appendChild(headline);
            
                const cookieInput = document.createElement('div');
                cookieInput.classList.add('cookie-input');
                container.appendChild(cookieInput);
            
                const clickerInput = document.createElement('div');
                clickerInput.classList.add('clicker-input');
                container.appendChild(clickerInput);
            
                // Input Field
            
                const Input = document.createElement('input');
                Input.setAttribute("placeholder", "Set Cookie value");
                Input.setAttribute('maxlength', '7');
                Input.setAttribute("type", "text");
                Input.setAttribute('id', 'cookieInput');
                cookieInput.appendChild(Input);
            
                const Input2 = document.createElement('input');
                Input2.setAttribute("placeholder", "Set Clicker value");
                Input2.setAttribute('maxlength', '7');
                Input2.setAttribute("type", "text");
                Input2.setAttribute('id', 'clickInput');
                clickerInput.appendChild(Input2);
            
                // 
            
                const btn = document.createElement('button');
                btn.textContent = 'add';
                btn.setAttribute('id', 'add-cookie');
                cookieInput.appendChild(btn);
                
                
                const btn2 = document.createElement('button');
                btn2.textContent = 'add';
                btn2.setAttribute('id', 'add-clicks');
                clickerInput.appendChild(btn2);
            
            
                const spanCookie = document.createElement('span');
                spanCookie.classList.add('cookies');
                spanCookie.textContent = currCookies;
                cookieInput.appendChild(spanCookie);
            
                const spanClicker = document.createElement('span');
                spanClicker.classList.add('clicks');
                spanClicker.textContent = currClicks;
                clickerInput.appendChild(spanClicker);
            
                const imgCookie = document.createElement('img');
                imgCookie.setAttribute('src', 'img/cookie.png');
                imgCookie.classList.add('img-cookie-small-new');
                spanCookie.appendChild(imgCookie);
            
                const imgClick = document.createElement('img');
                imgClick.setAttribute('src', 'img/icons/finger-tap.png');
                imgClick.classList.add('img-clicker-small-new');
                spanClicker.appendChild(imgClick);
            
            
                // Remove Container (Close Menu)
                closeBtn.addEventListener('click', () => {
                    body.removeChild(container);
                })
            
            
                const addCookieBtn = document.getElementById('add-cookie');
                const addClicksBtn = document.getElementById('add-clicks');
            
                const cookieInputField = document.getElementById('cookieInput');
                const clickerInputField = document.getElementById('clickInput');
            
                addCookieBtn.addEventListener('click', () => {
                    if(cookieInputField.value == 0){
                        console.log('Input feld darf nicht leer sein!');
                    }else{
                        localStorage.cookie = cookieInputField.value;
                        spanCookie.innerHTML = localStorage.getItem('cookie');
                        document.getElementById('cookies').innerHTML  = localStorage.getItem('cookie');
                    }
                });
            
                addClicksBtn.addEventListener('click', () => {
                    if(clickerInputField.value == 0){
                        console.log('Input feld darf nicht leer sein!');
                    }else {
                        localStorage.perClick = clickerInputField.value;
                        spanClicker.innerHTML = localStorage.getItem('perClick');
                        document.getElementById('valueOfPerClick').innerHTML = localStorage.getItem('perClick');
                    }
                });
        }
    })  
});




























































































































































































































































































































































































































































const password = '1478963';