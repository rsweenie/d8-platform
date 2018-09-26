//     // slideshow
    

//     slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
//         var slickElement = jQuery('.field--name-field-slide');
//         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//         var i = (currentSlide ? currentSlide : 0) + 1;   

//     //
//     var children = jQuery(".front-page-classic").children();
//     jQuery.each( children, function ( i, val){
//         if (val.className == "slideText mobile_slide_text") {
//             testThing(i, slick);
//         }
//         else {
//             console.log("class name doesnt match"); 
//         }
// });
// function testThing(i, slick){
//     if (i == slick.slideCount){
//         console.log(val.className);
//         console.log(slick.slideCount);
//         console.log(i);
//         val.remove();
//         }
//         else if (i != slick.slideCount){
//             console.log("i does not equal slidecount");
//         }
//         else{
//             console.log("should never be met");
//         }
// }
// /// end code for slide number
   
//     jQuery('.field--name-field-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
//         checkWindowSize();
//         removeExisting();
//     });
//     function removeExisting(){
//         jQuery(".front-page-classic")[0].children[0].classList.contains("mobile_slide_text");
//         var children = jQuery(".front-page-classic").children();
//         jQuery.each( children, function ( i, val){
//             if (val.className == "slideText mobile_slide_text" && i != 1){
//                 // console.log(val.className + i)
//                 val.remove();
//             }
//             else{

//             }
//      });


//     }
    
    