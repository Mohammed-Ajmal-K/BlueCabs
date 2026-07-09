document.addEventListener("DOMContentLoaded",()=>{
  const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
  window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),350));
  AOS.init({duration:750,once:true,offset:80});
  new Swiper(".swiper",{slidesPerView:1,spaceBetween:16,loop:true,autoplay:{delay:4200},pagination:{el:".swiper-pagination",clickable:true},breakpoints:{700:{slidesPerView:2},1000:{slidesPerView:3}}});
  if(window.gsap) gsap.from(".hero-content > *",{opacity:0,y:28,duration:.75,stagger:.11,delay:.35});
  const menu=$("#menu"), burger=$("#hamburger");
  burger.addEventListener("click",()=>menu.classList.toggle("open"));
  $$("#menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
  $("#theme").addEventListener("click",e=>{document.body.classList.toggle("dark");e.currentTarget.innerHTML=document.body.classList.contains("dark")?'<i class="fa-regular fa-sun"></i>':'<i class="fa-regular fa-moon"></i>'});
  window.addEventListener("scroll",()=>{
    $("#progress").style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+"%";
    $("#top").style.opacity=scrollY>600?1:0;
    $(".hero-bg").style.transform=`scale(1.04) translateY(${scrollY*.08}px)`;
  },{passive:true});
  $("#top").addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  const counter=$("[data-count]"); let counted=false;
  new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!counted){counted=true;let n=0,t=+counter.dataset.count;const tick=()=>{n+=100;counter.textContent=Math.min(n,t).toLocaleString()+"+";if(n<t)requestAnimationFrame(tick)};tick()}},{threshold:.5}).observe(counter);
  $$(".faq article button").forEach(btn=>btn.addEventListener("click",()=>{const row=btn.parentElement;$$(".faq article").forEach(x=>x!==row&&x.classList.remove("open"));row.classList.toggle("open")}));
  const lb=$("#lightbox");
  $$(".masonry button").forEach(btn=>btn.addEventListener("click",()=>{const img=$("img",btn);$("img",lb).src=img.src;$("img",lb).alt=img.alt;lb.classList.add("show")}));
  $("button",lb).addEventListener("click",()=>lb.classList.remove("show")); lb.addEventListener("click",e=>e.target===lb&&lb.classList.remove("show"));
  $("#bookingForm").addEventListener("submit",e=>{e.preventDefault();$("#toast").classList.add("show");e.target.reset();setTimeout(()=>$("#toast").classList.remove("show"),4000)});
});
