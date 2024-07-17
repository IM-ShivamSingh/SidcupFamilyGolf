var cursor=document.querySelector("#cursor")
var cursorBlur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+25+"px"
    cursor.style.top=dets.y+"px"
    cursorBlur.style.left=dets.x-200+"px"
    cursorBlur.style.top=dets.y-200+"px"
})
var h4all=document.querySelectorAll("#nav h4")
 h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
         cursor.style.scale=3;
         cursor.style.border="0.1px solid #fff"
         cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border="0px solid #95C11E"
        cursor.style.backgroundColor="#95C11E"
   })
 })
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

})