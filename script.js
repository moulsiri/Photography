const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true }
});

let images=[
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1598261465894-780e76afc52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    "https://images.unsplash.com/photo-1643321744244-6ffbe9a7e230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1607326552485-5375c21ef014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1643233963072-b38c7ff3e512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80",
    "https://images.unsplash.com/photo-1598074845153-30602c820962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1643051861827-4c04aba8c6b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1643122918217-c414e8f97b27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1643133277733-66a476f7f32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1639667851375-49c6c8c04b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80"
]
let count=0;
anime();
document.querySelector("#txtBx").addEventListener("mousemove",function(e){
    let curX=e.clientX;
    let curY=e.clientY;
    count++;
    if(count===5){
        setTimeout(function(){
            // let diff=curX-count;
            // console.log(diff)
                creatImg(curX-300,curY-300,images[Math.floor(Math.random()*(images.length))])
            count=0;
    
        },100)
    }
    e.stopPropagation();
    // console.log(count);


}) 
document.querySelector("#mssg").addEventListener("mousemove",function(e){
    anime();
    // e.stopPropagation();
})
function creatImg(x,y,sr){
    let img=document.createElement("img");
    img.src=sr;
    img.classList.add("abs");
    img.style.left=x+"px";
    img.style.top=y+"px";
    // setTimeout(anime,100)
    anime()
    document.querySelector("#txtBx").append(img);
}
function anime(){
    gsap.to(".abs",{
        y:10,
        // stagger:.05,
        opacity:0,
        ease: "power2.out",
        // duration:2
    
    })
}
// anime();



function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("cirTxt")[classIndex];
  
    var deg = 360 / txt.length,
      origin = 0;
  
    txt.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
   
  }
  
  circularText(`ALL RIGHT RESERVED All RIGHT RESERVED`, 50, 0);

//   Gsap Timeline 
let tl=gsap.timeline({paused:true});
// // function start(){
  
// // }
// gsap.set("#mssg", {transformOrigin:"100% 50%"});
// // gsap.from("#txtBx", 2.2, {width:0,  ease:Power0.easeNone, repeat:-1, repeatDelay:2})

tl.from("nav",{
    y:-40,
    opacity:0
})
.from(".mftr",{
    width:0
})
.to("#txtBx",{
    width:"170%",
    // repeat:-1
})
.from("#copyRight",{
    opacity:0,
    y:40
},"-=1")
.from("svg circle",{
    cx:0,
    cy:0,
    r:0
},"-=2")
.from("#sideElm a",{
    y:10,
    opacity:0
},"-=1")
// gsap.set(".vl",{transformOrign:"(-50%,-50%)"});
let tc=gsap.timeline();

tc.from("h3#logo",{
    x:10,
    opacity:0
})
.from("#v1",{
    height:0,
    duration:1.5
})
.from("#v5",{
    width:0,
    duration:.5

})
.from("#v4",{
    height:0,
    duration:.5

})
.from("#v3",{
    width:0,
    duration:.5

})
.from("#v2",{
    width:0,
    duration:.5

})
.from("#v6",{
    width:0,
    duration:.5

})
.from("#v7",{
    height:0,
    duration:.5

})
.from("#ovlay",{
    opacity:0,
    duration:.5
})

setTimeout(function(){
document.querySelector("#videos").style.display="none";
tl.play();
},5900)