window.addEventListener('scroll',()=>{
    let navbar = document.querySelector(".navbar");
    if(window.scrollY >= 20){
        navbar.classList.add('navShadow');
        document.querySelector(".arrowUp").style.cssText = 'display:block';
    }else if(window.scrollY <= 20){
        navbar.classList.remove('navShadow')
        document.querySelector(".arrowUp").style.cssText = 'display:none';
    }
});

// start arrow up
let arrow = document.querySelector(".arrowUp svg");
arrow.addEventListener('click',()=>{
    window.scroll({
        top: 0
    });
});
// start slide
richSnippetReviewsWidgets("carousel-widget", {
    store: "babypavilion-com",
    primaryClr: "#f47e27",
    neutralClr: "#cccccc",
    reviewTextClr: "#333333",
    widgetName: "carousel",
    layout: "fullWidth",
    numReviews: 40,
    contentMode: "company",
    hideDates: false
});

richSnippetReviewsWidgets("carousel-widgett", {
    store: "babypavilion-com",
    primaryClr: "#f47e27",
    neutralClr: "#cccccc",
    reviewTextClr: "#333333",
    widgetName: "carousel",
    layout: "fullWidth",
    numReviews: 40,
    contentMode: "company",
    hideDates: false
});
richSnippetReviewsWidgets("carousel-widgettt", {
    store: "babypavilion-com",
    primaryClr: "#f47e27",
    neutralClr: "#cccccc",
    reviewTextClr: "#333333",
    widgetName: "carousel",
    layout: "fullWidth",
    numReviews: 40,
    contentMode: "company",
    hideDates: false
});
richSnippetReviewsWidgets("text-banner-widget", {
    store: "babypavilion-com",
    starsClr: "#f47e27",
    textClr: "#313131",
    logoClr: "#12cf6c",
    widgetName: "text-banner",
});

$(document).ready(function () {
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
      });
    
      $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
      });
});

window.__pagefly_global_settings__={fontFamilies:["Playfair Display","Lato","Source Sans Pro"],selectedFonts:{"Playfair Display":{"400":0},"Lato":{"400":0},"Source Sans Pro":{"400":0}}};
!function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.1","shopDomain":"baby-pavilion.myshopify.com","elementData":{},"pageTitle":"Breast Pumps","pageType":"page","pageId":"69419fc2-98b4-4fde-bc3f-77eee5968630","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Lato":{"400":0},"Playfair Display":{"400":0},"Source Sans Pro":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat="\u003cspan class=hidden\u003e${{amount}} USD\u003c\/span\u003e"}();
window.__pagefly_global_settings__={fontFamilies:["Playfair Display","Lato","Source Sans Pro"],selectedFonts:{"Playfair Display":{"400":0},"Lato":{"400":0},"Source Sans Pro":{"400":0}}};
!function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.8","shopDomain":"baby-pavilion.myshopify.com","elementData":{},"pageTitle":"Tricare Accessory Reorder Page","pageType":"page","pageId":"5ae06441-fad0-40ac-b7de-fa008ea4e2c8","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Lato":{"400":0,"700":0},"Playfair Display":{"400":0},"Source Sans Pro":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat="\u003cspan class=hidden\u003e${{amount}} USD\u003c\/span\u003e"}();