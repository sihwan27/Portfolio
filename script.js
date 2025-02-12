function checkpassword(){
    const password=document.getElementById('password').value;
    const goodpassword='kmla30'
    if (password==goodpassword){
        alert('Access granted!')
        window.location.href='page2.html';

    }
    else{
        alert('incorrect password! try again')
    }


}
function ronaldo(value){
    goodplayer='siu'
    if(value===goodplayer){
        alert('siuuuu')
        
        
    }
    else{
        alert('개인취향을 존중해주겠습니다.')
    }
}