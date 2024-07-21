var scrollinterval
var scrollspeed = 1;

function scrollmenow(direction){
    document.getElementById("top-nav-bar").scrollLeft += 50
    scrollinterval = window.setInterval(function() {
    document.getElementById("top-nav-bar").scrollLeft += 10
    console.log("test scroll left = "+document.getElementById("top-nav-bar").scrollLeft);
        scrollspeed = scrollspeed * 1.1;
/*        if (scrollspeed > 10) {scro}
        document.getElementById("scroll_left_btn").scrollLeft
        console.log("test");*/

    },10);
    console.log(direction)
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