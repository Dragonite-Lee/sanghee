// navi 클릭 시 해당 영역으로 scroll ✅
var navi = document.querySelectorAll(".navi-text")
var navion = document.querySelectorAll(".navi-on-btn")

navi[0].addEventListener("click", function() {
    for(let i=0; i<navi.length; i++) {
        navion[i].classList.remove("show")
    }
    navion[0].classList.add("show")
    window.scrollTo({top: document.querySelector(".event-coupon").offsetTop - 180, behavior: 'smooth'})
})
navi[1].addEventListener("click", function() {
    for(let i=0; i<navi.length; i++) {
        navion[i].classList.remove("show")
    }
    navion[1].classList.add("show")
    window.scrollTo({top: document.querySelector(".event-free").offsetTop - 180, behavior: 'smooth'})
})

navi[2].addEventListener("click", function() {
    for(let i=0; i<navi.length; i++) {
        navion[i].classList.remove("show")
    }
    navion[2].classList.add("show")
    window.scrollTo({top: document.querySelector(".event-extreme").offsetTop - 180, behavior: 'smooth'})
})

// 스크롤로 해당 영역 진입 시 navi ON
var scrollPosition = this.window.scrollY
var totalevent = document.querySelector(".main-event")
var fevent_sp = document.querySelector(".event-coupon").offsetTop - 180
var sevent_sp = document.querySelector(".event-free").offsetTop - 180
var tevent_sp = document.querySelector(".event-extreme").offsetTop - 180

window.addEventListener('scroll',function(){
    console.log(window.scrollY)//현재내가 스크롤하는 양
    if(window.scrollY>fevent_sp) {
        for(let i=0; i<navi.length; i++) {
            navion[i].classList.remove("show")
        }
        navion[0].classList.add("show")
    }
    if(window.scrollY>sevent_sp) {
        for(let i=0; i<navi.length; i++) {
            navion[i].classList.remove("show")
        }
        navion[1].classList.add("show")
    }
    if(window.scrollY>tevent_sp) {
        for(let i=0; i<navi.length; i++) {
            navion[i].classList.remove("show")
        }
        navion[2].classList.add("show")
    }
})
// console.log(scrollPosition)
// totalevent.addEventListener("scroll", function() {
//     if(fevent_sp<scrollPosition<totaleventh-sevent_sp) {
//         for(let i=0; i<navi.length; i++) {
//             navion[i].classList.remove("show")
//         }
//         navion[0].classList.add("show")
//     }
// })
// window.addEventListener("scroll", (event) => {
//     let scrollY = this.scrollY;
//     if(fevent_sp<scrollY<sevent_sp) {
//         for(let i=0; i<navi.length; i++) {
//             navion[i].classList.remove("show")
//         }
//         navion[0].classList.add("show")
//     }
// });
// window.addEventListener('scroll', function(){
//     if(fevent_sp<scrollPosition<sevent_sp){
//         for(let i=0; i<navi.length; i++) {
//             navion[i].classList.remove("show")
//         }
//         navion[0].classList.add("show")
//     }
//     else if(sevent_sp<scrollPosition<tevent_sp){
//         for(let i=0; i<navi.length; i++) {
//             navion[i].classList.remove("show")
//         }
//         navion[1].classList.add("show")
//     }
//     else if(tevent_sp<scrollPosition) {
//         for(let i=0; i<navi.length; i++) {
//             navion[i].classList.remove("show")
//         }
//         navion[2].classList.add("show")
//     }
// })

// 쿠폰 클릭 시 얼럿 ✅
document.querySelector(".event-coupon-content-img").addEventListener("click", function () {
    alert("쿠폰이 발급되었습니다.")
});

// 탭 클릭 시 해당 상품그룹 show ✅
var tab = document.querySelectorAll(".tab-off")
var product = document.querySelectorAll(".tab-content")

for(let j=0; j<tab.length; j++) {
tab[j].addEventListener("click", function() {
    for(let i=0; i<tab.length; i++) {
        tab[i].classList.remove("tab-on")
        product[i].classList.remove("show")
    };
    tab[j].classList.add("tab-on")
    product[j].classList.add("show")
})
};

// 콘텐츠 클릭 시 해당 cmodal show ✅
var content = document.querySelectorAll(".content-unit")
var cmodal = document.querySelectorAll(".cmodal-wrapper")
var cclose = document.querySelectorAll(".cmodal-content-close")
var contentre = document.querySelectorAll(".content-unit-re")

for (let i=0; i<content.length; i++) {
content[i].addEventListener("click", function() {
    cmodal[i].classList.add("show")
})
cclose[i].addEventListener("click", function () {
    cmodal[i].classList.remove("show")
    contentre[i].classList.add("show")
})
cmodal[i].addEventListener("click", function (e) {
    if(e.target === e.currentTarget) {
    cmodal[i].classList.remove("show")
    contentre[i].classList.add("show")}
})
}

// 콘텐츠 끝까지 다 읽을 시 무료 상품 모달(html도 구현 안해둠)

// 유의사항 쉐브론 클릭 시 펼친 상태 show ✅
document.querySelector(".chevron-off").addEventListener("click", function() {
    document.querySelector(".chevron-off").classList.remove("show")
    document.querySelector(".event-free-detail-title").classList.add("chevron-on-tt")
    document.querySelector(".event-free-detail-title-tt").classList.add("chevron-on-tt")
    document.querySelector(".chevron-on").classList.add("show")
    document.querySelector(".event-free-detail-content").classList.add("show")
})
document.querySelector(".chevron-on").addEventListener("click", function() {
    document.querySelector(".chevron-on").classList.remove("show")
    document.querySelector(".event-free-detail-title").classList.remove("chevron-on-tt")
    document.querySelector(".event-free-detail-title-tt").classList.remove("chevron-on-tt")
    document.querySelector(".chevron-off").classList.add("show")
    document.querySelector(".event-free-detail-content").classList.remove("show")
})

// 마케팅 수신 동의 버튼 클릭 시 해당 mmodal show ✅
var mbtn = document.querySelector(".mkt-choice")
var mmodal = document.querySelector(".mmodal-wrapper")
var mclose = document.querySelector(".gray")
var magree = document.querySelector(".black")

mbtn.addEventListener("click", function() {
    mmodal.classList.add("show")
})

mclose.addEventListener("click", function() {
    mmodal.classList.remove("show")
})

magree.addEventListener("click", function() {
    mmodal.classList.remove("show")
    alert("마케팅 수신 동의 완료되었습니다.")
})

mmodal.addEventListener("click", function(e) {
    if(e.target === e.currentTarget) {
    mmodal.classList.remove("show")
    }
})