// ------numberscounter----------

if (window.location.href.includes('home.html')) {
    function myNumbersCounter(){
        let var1=450;
        let var2=5;
        let var3=10;
    
        let delay1=10;
        let delay2=delay1*var1/var2;
        let delay3=delay1*var1/var3;
    
        let counts1=setInterval(updated1,delay1);
        let counts2=setInterval(updated2,delay2);
        let counts3=setInterval(updated3,delay3);
    
        let upto1=0;
        let upto2=0;
        let upto3=0;
    
        function updated1(){
            var count= document.getElementById("myValue1");
            if (count!=null){
                count.innerHTML=++upto1;
                if(upto1===450)
                {
                    clearInterval(counts1);
                }
            }
        }
    
        function updated2(){
            var count= document.getElementById("myValue2");
            if (count!=null){
                count.innerHTML=++upto2;
                if(upto2===5)
                {
                    clearInterval(counts2);
                }
            }
        }
    
        function updated3(){
            var count= document.getElementById("myValue3");
            if (count!=null){
                count.innerHTML=++upto3;
                if(upto3===10)
                {
                    clearInterval(counts3);
                }
            } 
        }
       } 
        
    const targetDiv = document.querySelector('.myNumbersContainer');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          myNumbersCounter();
          observer.disconnect();
        }
      });
    });
    
    observer.observe(targetDiv);
}

//LOGIN MODAL
var btn = document.getElementById("myLogIn");
var loginModal = document.getElementById("myLoginModal");
var signUpModal = document.getElementById("mySignUpModal");
var openSignUpModal = document.getElementById("openSignUp");
var closeLoginModal = loginModal.getElementsByClassName("close")[0];
var closeSignUpModal = signUpModal.getElementsByClassName("close")[0];

btn.addEventListener('click', () => {
    loginModal.style.display = "block";
});

closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = "none";
});

openSignUpModal.addEventListener('click', (event) => {
    loginModal.style.display = "none";
    signUpModal.style.display = "block";
  });

closeSignUpModal.addEventListener('click', () => {
    signUpModal.style.display = "none";
    loginModal.style.display = "block";
});






