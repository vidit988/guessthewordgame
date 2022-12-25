var user1=localStorage.getItem('username1')
var user2=localStorage.getItem('username2')
document.getElementById('user1').innerHTML=user1
document.getElementById('user2').innerHTML=user2
document.getElementById('quser1').innerHTML='question turn-'+user1
document.getElementById('auser2').innerHTML='answer turn-'+user2
function send(){
   
    word= document.getElementById('word').value//achieve
    if(word.length>=5){
      question=word.toLowerCase()//achieve
      length=question.length//7
     
     
     l1=length-1//6
     l2=Math.floor(length/2)//3
     l3=1//1
     
     c1=question.charAt(l1)//e
     c2=question.charAt(l2)//i
     c3=question.charAt(l3)//c
     
     r1=question.replace(c1,'-')//achiev-
     r2=r1.replace(c2,'-')//ach-ev-
     r3=r2.replace(c3,'-')//a-h-ev-
     document.getElementById('output').innerHTML='<h3 id="word_display">question :'+r3+'</h3><br>'+"<input type='text' id='answer'><br>"+"<button class='btn btn-primary' onclick='check()'>check</button>"
     
     document.getElementById('word').value=''
    }
 else{
   document.getElementById('word').value=''
   document.getElementById('word').placeholder='type word with greater than 5 letters'
   document.getElementById('word').style.border='1px solid red'
 }
}
var questionturn=user1
var answerturn=user2
var user1score=0
var user2score=0
function check(){
  if (question==document.getElementById('answer').value){
   if(questionturn==user1){
       user2score=user2score+1
      document.getElementById('user2').innerHTML=user2+':'+user2score
   }
   else{
      user1score=user1score+1
      document.getElementById('user1').innerHTML=user1+':'+user1score
   }

  }
if (questionturn==user1) {
questionturn=user2
answerturn=user1
document.getElementById('quser1').innerHTML='question turn-'+user2
document.getElementById('auser2').innerHTML='answer turn-'+user1
}
else{
   questionturn=user1
   answerturn=user2
   document.getElementById('quser1').innerHTML='question turn-'+user1
   document.getElementById('auser2').innerHTML='answer turn-'+user2
}
document.getElementById('answer').value=''
document.getElementById('output').innerHTML=''
}