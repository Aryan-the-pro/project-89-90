function login() 
{ 
    var player1 = document.getElementById("player1_input").value ;  
    var player2 = document.getElementById("player2_input").value;  


    localStorage.setItem("key_player1",player1); 
    localStorage.setItem("key_player2",player2); 

    window.location.replace("2page.html"); 
    
} 
