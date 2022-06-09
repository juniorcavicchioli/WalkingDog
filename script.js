function myMove(){
    var elem = document.getElementById("dog-path");
    var pos = 0;
    var id = setInterval(frame, 5);
    document.querySelector("#cachorro").src = "dog.gif";
    function frame(){
        if(pos >= 83) {
            clearInterval(id);
            document.querySelector("#cachorro").src = "dogleft.gif";
            var id2 = setInterval(voltar, 5);
            function voltar(){
                if(pos<=0){
                    document.querySelector("#cachorro").src = "dog1.gif";
                    clearInterval(id2);
                } else {
                    pos -= 0.1;
                    elem.style.left = pos + "%";
                }
            }
        } else {
            pos += 0.1;
            elem.style.left = pos + "%";
        }
    }
}