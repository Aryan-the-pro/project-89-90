var score = 0 ; 


function updateScore() 
{ 
score = score+1 ;  
document.getElementById("score").innerHTML = "Score :"+score; 

} 
function saveScore() 
{ 
 localStorage.setItem("key_score",score); 

} 


function nextPage() 
{ 
    window.location="2page.html"; 
    
} 
