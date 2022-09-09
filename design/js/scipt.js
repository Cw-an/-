window.onload = () => {

    function times(){
        var now = new Date();
        var nowTime = now.toLocaleTimeString();
        document.getElementsByClassName('time')[0].innerHTML=nowTime;
    }

    setInterval(times,1000);
}