// $(document).ready(function(){
//     $(".field").focusout(function(){
//         if($(this).val().length < 5){
//             $(this).parent().addClass("has-error");
//             $(this).tooltip("show");
//         }
//         else{
//             $(this).parent().removeClass("has-error");
//             $(this).parent().addClass("has-success");
//         }
//     });
//     $("#confirm").focusout(function(){
//         if($(this).val() != $("#password").val()){
//             $("#password").parent().removeClass("has-success");
//             $("#password").parent().addClass("has-error");
//             $("#confirm").parent().addClass("has-error");
//             $(this).popover("show");
//             $(this).tooltip("hide");
//         }
//     });
//     $("#signin").click(function(e){
//         if($("input").val() = 0 || $("input").val() < 5){
//             e.preventDefault();
//
//         }
//
//     });
// });
$(document).ready(function(){
    $("#inputPassword").pwstrength();
});
