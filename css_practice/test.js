var scrollinterval
var scrollspeed = 1;

function scrollmenow(direction){
    scrollinterval = window.setInterval(function() {
        scrollspeed = scrollspeed * 1.1;
        if (scrollspeed > 15) {
            scrollspeed = 15;
        }
        if (direction == 1){
            document.getElementById("top-nav-bar").scrollLeft += scrollspeed;
        }else{
            document.getElementById("top-nav-bar").scrollLeft -= scrollspeed;
        }

    },10);
}

function test(){
    test = window.setInterval(function() {
        console.log("tset!!!")
    }, 10)
}
function stopscrollmenow(){
    scrollspeed = 1;
    window.clearInterval(scrollinterval);
}