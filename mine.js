let switchbtn = document.querySelector('.switch');

switchbtn.addEventListener('change', function(){
    if(switchbtn.checked === true){
    $('body').removeClass("light");
    $('body').addClass("dark");
    window.localStorage.setItem('mode', 'dark');
  } else {
    $('body').removeClass("dark");
    $('body').addClass("light");
    window.localStorage.setItem('mode', 'light');

}

});
let mode = localStorage.getItem('mode');
if(mode === 'dark'){
    $('body').removeClass("light");
    $('body').addClass("dark");
    switchbtn.checked = true;
}
if(mode === 'light'){
    $('body').removeClass("dark");
    $('body').addClass("light")  ;
    switchbtn.checked = false;
}



