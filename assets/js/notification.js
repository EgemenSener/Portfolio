function kapat(){

    document.getElementById("bildirim").style.display = "none" ;
    document.getElementById("news").style.display="block";
        document.getElementById("close_all").style.display="none";
    
    
    }
    
    
    
    function new_btn(){
    
        document.getElementById("bildirim").style.display = "block" ;
        document.getElementById("news").style.display="none";
        document.getElementById("close_all").style.display="block";
        document.getElementById("new_button_bg").style.display= "none";
    
    }
    
    
    
    
    function turk(){
        document.getElementById("english_flag").style.display = "block" ;
        document.getElementById("turkish_notification").style.display = "block" ;
        document.getElementById("yeni_mesaj").style.display = "block" ;
        document.getElementById("new_message").style.display = "none" ;
        document.getElementById("english_notification").style.display = "none" ;
        document.getElementById("turkish_flag").style.display = "none" ;
       
        }
        function eng(){
            document.getElementById("english_flag").style.display = "none" ;
            document.getElementById("turkish_notification").style.display = "none" ;
            document.getElementById("yeni_mesaj").style.display = "none" ;
            document.getElementById("new_message").style.display = "block" ;
            document.getElementById("english_notification").style.display = "block" ;
            document.getElementById("turkish_flag").style.display = "block" ;
           
            }
        