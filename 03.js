const showbtn = document.querySelector('.show-btn')
const showbtn1 = document.querySelector('.show-btn1')
const showbtn0 = document.querySelector('.show-btn0')
const begin = document.querySelector('.begin');
const dialog = document.querySelector("dialog")
const form_dialog = document.querySelector(".form-dialog")
const confirms = document.querySelector(".confirm")
const round = document.querySelector('.round');
const selectEl = document.querySelector(".select");
const roundnum = document.querySelector('.roundnum');
const playersname = document.querySelector('.name');
const winner = document.querySelector(".win");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const roscores = document.querySelector('.cscore')
const mescores = document.querySelector('.myscore')
const last_win = document.querySelector('.last-win')
const r_player = document.querySelector('.r-player')
const imgs = document.querySelectorAll('.img')


let num = 1;
let roundmax = 0;
let names = ['robbot','你']

const cscore ={
    win:0,
    fail:0
}
const myscore = {
    win:0,
    fail:0
}

const robbots = ['img/01.jpg','img/02.jpg','img/03.jpg'];
const players = ['img/01.jpg','img/02.jpg','img/03.jpg'];

////////////////////begin//////////////////////////////
showbtn0.onclick = function(){
    begin.style.display = "block"
    begin.addEventListener("submit",(e)=>{ 
    e.preventDefault();
    roundmax = parseInt(roundnum.value)
    r_player.innerHTML = playersname.value;
    showbtn0.style.display = "none";
    showbtn.style.display = "block";
    begin.style.display = "none";
})
}


/////////////////////////新局//////////////////////
showbtn1.onclick = (e) => {
    e.preventDefault()
    left.innerHTML = `<span class="pend">?</span>`
    right.innerHTML = ` <span class="pend">?</span>`
   num = 1;
   playersname.innerHTML = "";
   last_win.innerHTML = "";
   winner.innerHTML = "";
   r_player.innerHTML = "";
   round.innerHTML = "";
   showbtn1.style.display = "none";
   showbtn0.style.display = "block";
    cscore.win = 0;
    cscore.fail = 0;
    myscore.win = 0;
    myscore.fail = 0;
    roscores.innerHTML = `胜：${cscore.win} | 负：${cscore.fail}`;
    mescores.innerHTML = `胜：${myscore.win} | 负：${myscore.fail}`;
}

////////////////// //////////////dialog////////////////
init();
function init() {

    showbtn.onclick = 
        () => {
            dialog.showModal();
        };
       
       form_dialog.addEventListener("submit", (e) => {
                e.preventDefault();
                let i = Math.floor(Math.random()*3);
                let a = parseInt(selectEl.value);
                // console.log(i,a);
                addactive(i);
                adduser(a);
                round.innerHTML = `第${num}回合(${roundmax})`
                win(i,a);
                gameover();
                num++;
                dialog.close();
            });
}

////////////////渲染机器人图片/////////////
function addactive(a){
    left.innerHTML = `<img class="img" src="${robbots[a]}" />`
    
}

////////////////渲染我方图片/////////////
function adduser(j){
    right.innerHTML = `<img class="img" src="${players[j]}" />`
}

/////////////////////////胜负局////////////////

const win = (robbot,me) => {
        if (me-robbot === 1 || (me === 0 && robbot === 2)) {
            winner.innerHTML = "本回合你赢"
            myscore.win++
            cscore.fail++
        } else if (me === robbot) {
            winner.innerHTML = "本回合平"
        } else {
            winner.innerHTML = "本回合机器人赢"
            myscore.fail++
            cscore.win++
        }
        roscores.innerHTML = `胜：${cscore.win} | 负：${cscore.fail}`;
        mescores.innerHTML = `胜：${myscore.win} | 负：${myscore.fail}`;
}


const gameover = ( ) =>  {
    if(num === roundmax){
        showbtn.style.display = "none";
        showbtn1.style.display = "block";
        if(myscore.win > cscore.win) {
            winner.innerHTML = " ";
            last_win.innerHTML = `
                (≧v≦)o~~好棒，恭喜${names[1]}获得胜利！`;
        }else if(myscore.win < cscore.win){
            winner.innerHTML = " ";
            last_win.innerHTML = 
                `(*>﹏<*)′再接再厉，抱歉${names[0]}获得胜利！`;
        } else{
            winner.innerHTML = " ";
            last_win.innerHTML = "不错嘛，平局了";
        }
    }else{
        if(myscore.win >= Math.ceil(roundmax/2)){
            winner.innerHTML = " ";
            showbtn.style.display = "none";
            showbtn1.style.display = "block";
             last_win.innerHTML = `
                  (≧v≦)o~~好棒，恭喜${names[1]}获得胜利！`;
        }else if(cscore.win >= Math.ceil(roundmax/2)){
            winner.innerHTML = " ";
            showbtn.style.display = "none";
            showbtn1.style.display = "block";
             last_win.innerHTML = 
                  `(*>﹏<*)′再接再厉，抱歉${names[0]}获得胜利！`;

         }
    } 
}

