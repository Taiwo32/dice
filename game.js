var scores, roundUp, Player, dice;

scores = [0,0]
roundUp = 0
Player = 1;



document.querySelector('.btn--roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random() * 6) + 1
    

    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice +'.png'
});

document.querySelector('#box-score1').textContent = dice 
document.querySelector('.dice').style.display = 'none'
document.getElementById('score1').textContent = '0'
document.getElementById('score2').textContent = '0'
document.getElementById('box-score1').textContent = '0'
document.getElementById('box-score2').textContent = '0'
