const menuTrigger=document.querySelector(".menu-trigger"),theHeader=document.querySelector(".the-header"),mainMenu=document.querySelector(".main-menu"),body=document.querySelector("body");let menuOpen=!1;menuTrigger.addEventListener("click",(()=>{menuOpen?(menuTrigger.classList.remove("open"),theHeader.classList.remove("open"),mainMenu.classList.remove("open"),menuOpen=!1,body.style.paddingTop="0"):(menuTrigger.classList.add("open"),theHeader.classList.add("open"),mainMenu.classList.add("open"),menuOpen=!0,body.style.paddingTop="72px")}));const scrollToTopBtn=document.querySelector("#backToTopBtn");function scrollToTop(){body.scrollTo({top:0,behavior:"smooth"})}scrollToTopBtn.addEventListner("click",scrollToTop);