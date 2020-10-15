 
 

/*************** for transport sub page***********************/
        /*************************for image transition*****************************/
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("transport_transition_slides");
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 3500); 
        }
        /*************************for image transition*****************************/
        function myFunction() {
            var x = document.getElementById("alert-for-submition");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }
        /*************************contact***************************/
        function checkbox()
        {
            var checking=document.getElementById("check_command");
            var to_dis=document.getElementById("for_check");
            if (checking.checked==true) 
            {
                to_dis.style.display = "block";
            }
            else
            {
                to_dis.style.display = "none";
            }
        }