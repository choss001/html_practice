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
        scrollbtn_visible();
    },10);

}

function test(){
    test = window.setInterval(function() {
    }, 10)
}
function stopscrollmenow(){
    scrollspeed = 1;
    window.clearInterval(scrollinterval);
}


var p_s_l = 0;
var x_s_l = 0;
function scrollbtn_visible() {
  let c_s_l = document.getElementById("top-nav-bar").scrollLeft;
  if (c_s_l < 1) {
    document.getElementById("btn_container_subtopnav_left").style.display = "none";    
  } else {
    document.getElementById("btn_container_subtopnav_left").style.display = "block";    
  }
  console.log("c_s_l = " + c_s_l)
  console.log("p_s_l = " + p_s_l)
  console.log("x_s_l = " + x_s_l)
  if (c_s_l > 1 && c_s_l == p_s_l) {
    x_s_l++;
  } else {
    x_s_l = 0;  
  }
  if (x_s_l > 3){
    document.getElementById("btn_container_subtopnav_right").style.display = "none";    
  } else {
    document.getElementById("btn_container_subtopnav_right").style.display = "block";  
  }
  p_s_l = document.getElementById("top-nav-bar").scrollLeft;
}