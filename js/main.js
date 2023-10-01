// toggle menu nav bar 
let menu = document.querySelector("ul") ; 
let toggle_menu = document.querySelector(".toggle-menu") ; 
let icon = document.querySelector(".toggle-menu i ") ; 

toggle_menu.addEventListener ('click' , function () { 
    icon.classList.toggle('fa-x') ; 
    menu.classList.toggle('show')
})  ; 

//  toggle menu nav bar  ; 



// nav and tab of section about 

const tabs = document.querySelectorAll('.about li') ; 


tabs.forEach(function (tabs) {
    tabs.addEventListener('click' , function (e) {
        deactive() ; 
        e.target.classList.add('active-1') ; 
    })
}) ; 

function deactive() {
    tabs.forEach(function(tabs) {
        tabs.classList.remove('active-1') ; 
        
    })
    
} ; 

//  end nav and tab section about 



// owl carousel 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 4 ,
        margin :10 , 
        dots :false ,
        nav : false ,
        loop : true , 
        autoplay : true , 
        autoplayTimeout : 2000 ,

    });
});


//  end owl-carousel 


//  nav and tab for section tabs

const tab = document.querySelectorAll('.tabs ul li') ; 
const items = document.querySelectorAll('.tabs .tabs-body .items') ; 




tab.forEach(function (tab) {
    tab.addEventListener('click' , function (e) {
        let tab_id = tab.getAttribute("id")  ;
        deactive_2() ; 
        e.target.classList.add('active-2') ; 
        items.forEach(function (items) {
            let data_id = items.getAttribute("data-target") ; 
            if (data_id == tab_id) {
                hidden() ; 
                items.classList.add("show") ; 
            }
            
        })
    })
}) ; 

function deactive_2() {
    tab.forEach(function(tab) {
        tab.classList.remove('active-2') ; 
        
    })
    
} ; 

function hidden() {
    items.forEach(function (items) {
        items.classList.remove("show")
        
    })
    
} ; 


//  end nav and tabs 



//  filter array with all product 

let list = document.querySelectorAll(".our-portfolio ul li ") ; 
let img_list = document.querySelectorAll(".our-portfolio .img-list") ;

list.forEach(function (list) {

    list.addEventListener("click" , function (e) {
        let list_id = list.getAttribute("id")  ;
        removeActive() ; 
        e.target.classList.add("active-5") ;
        img_list.forEach(function (img_list) {
            let img_list_id = img_list.getAttribute("data-target") ; 
            if (list_id == img_list_id) {
                hide() ; 
                img_list.classList.add("show-img") ; 
            }
        })
    })
    
}) ; 

function removeActive() {
    list.forEach(function (list) {
        list.classList.remove("active-5")
        
    })
    
} ; 

function hide() {
    img_list.forEach(function (img_list) {
        img_list.classList.remove("show-img")
        
    })
    
} ;  

// end filter array with all product 



// btn scroll top

let span = document.querySelector(".up") ; 
window.onscroll = function () {
    if (this.scrollY>100) {
        span.classList.add("return-scroll") ;
    }
    else{
        span.classList.remove("return-scroll") ;
    }
} ; 

span.addEventListener("click" , function () {

    window.scrollTo({
        top:0 , 
        behavior: "smooth" , 

    })
})













