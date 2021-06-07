var dino = document.getElementById("dino");
var block = document.getElementById("block");

function jump()
{
	dino.classList.add("animate");
		
    setTimeout(function(){
        dino.classList.remove("animate");
    }, 600);
}

function check()
{
    document.getElementById("block").classList.add("blockAnimate");
    
    var count = 0,flag = 0;
    var Dino = window.getComputedStyle(dino);
    var Block = window.getComputedStyle(block);
    
    document.getElementById("score").innerText = "Score: " + count;

    var timer = setInterval(function() {
        var dinoTop = parseFloat(Dino.getPropertyValue("top"));
    
        var blockLeft = parseFloat(Block.getPropertyValue("left"));
        
        if(blockLeft > 80)
            {
                flag = 0;
            }
        
        if(blockLeft <= 80 && blockLeft >= 20 && dinoTop >= 410)
            {
                block.classList.remove("blockAnimate");
                alert("Lol, You Lose... Your final score: " + count);
                
                clearInterval(timer);
            }
        
        if(blockLeft < 10)
            {
                flag+=1;
                
                if(flag == 1)
                    {
                        count+=1;
                        document.getElementById("score").innerText = "Score: " + count;
                    }
            }
    }, 10);
}