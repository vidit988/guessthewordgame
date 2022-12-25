
function nextpage(){
    var input1=document.getElementById('input1').value
    var input2=document.getElementById('input2').value
    window.location='game_page.html'
    localStorage.setItem('username1',input1)
    localStorage.setItem('username2',input2)
}