function myMove(){
    var elem = document.getElementById("dog-path");
    var pos = 0;
    var id = setInterval(frame, 5);
    document.querySelector("#dog").src = "dog.gif";
    function frame(){
        if(pos >= 81.5) {
            clearInterval(id);
            document.querySelector("#dog").src = "dogleft.gif";
            var id2 = setInterval(voltar, 5);
            function voltar(){
                if(pos<=0){
                    document.querySelector("#dog").src = "dog2.gif";
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