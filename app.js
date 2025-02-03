let userPoint=0;
let comPoint=0;
let RPS= document.querySelectorAll(".rps");
console.log(RPS);
let userSelection="";
let comSelection="";
let Game=["Rock","Paper","Scizzer"];
let msg=document.querySelector("#msg");
let floatMsg = document.querySelector(".floatmsg");
let userImg=document.querySelector(".userimg");
let compImg=document.querySelector(".compimg");
let gameImg=["assates/rock.png","assates/paper.png","assates/Scissor.png"];
let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
let userimgani=document.querySelector(".userimgani");
let compimgani=document.querySelector(".compimgani");

floatMsg.style.display="none";

RPS.forEach((rps,index) => {
    
    rps.addEventListener("click", function(){
        userImg.style.backgroundImage=`url('${gameImg[0]}')`;
        compImg.style.backgroundImage=`url('${gameImg[0]}')`;
        userimgani.classList.add("uAnime");
        compimgani.classList.add("cAnime");
        
        setTimeout(() => {

            game();
            
        }, 3900);

        function game(){
        userimgani.classList.remove("uAnime");
        compimgani.classList.remove("cAnime");

        userSelection=Game[index];
        userImg.style.backgroundImage=`url('${gameImg[index]}')`;
        // console.log(userSelection);
        let comindex=Math.floor(Math.random()*3);
        comSelection=Game[comindex];
        compImg.style.backgroundImage=`url('${gameImg[comindex]}')`;
        // console.log(comSelection);

        compare();
        }
    
    })
});

function compare(){
    if(userSelection==comSelection){
        msg.innerText="It's Tia, Play again!";
        floatMsg.style.backgroundColor='#604CC3';
        floatMsg.style.display="";
            setTimeout(() => {

                floatMsg.style.display="none";  ;
            
                             }, 4000);
        return 0;
    }
    
    else if (userSelection=="Rock"){
        var userWin = comSelection=="Paper" ? true :false;
        var userWin = comSelection=="Scizzer" ? true :false;
        
    }

    else if(userSelection=="Paper"){
        var userWin = comSelection=="Rock" ? true :false;
        var userWin = comSelection=="Scizzer" ? false :true;
        
    }

    else{
        var userWin = comSelection=="Rock" ? false :true;
        var userWin = comSelection=="Paper" ? true :false;
        
    }

    
    winnerName(userWin);
}

function winnerName(userWin){
    if(userWin){
        winMsg(userSelection,comSelection)
        floatMsg.style.display="";
            setTimeout(() => {

                floatMsg.style.display="none";  ;
            
                             }, 4000);
    }
    else{
        
        lossMsg(userSelection,comSelection);
        floatMsg.style.display="";
            setTimeout(() => {

                floatMsg.style.display="none";  ;
            
                             }, 4000);
    }
}

function winMsg(userMove,compMove){
    msg.innerText=`You Win!, Your ${userMove} beat Computer's ${compMove}`;
    floatMsg.style.backgroundColor='green';
    userPoint++;
    userScore.innerText=`Score: ${userPoint}`;
}

function lossMsg(userMove,compMove){
    msg.innerText=`You Loss!, Computer's ${compMove} beat Your ${userMove}`;
    floatMsg.style.backgroundColor='red';
    comPoint++;
    compScore.innerText=`Score: ${comPoint}`;
}




