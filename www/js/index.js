
//document.addEventListener("deviceready", onDeviceReady, false);
//
//// device APIs are available
//function onDeviceReady() {
//
//
//    alert("device ready");
//}



$( document ).ready(function() {
    
    var key = "pen";
    var value ="blue";
    
    window.localstorage.setitem(key, value );
    
    var key = "pen";
    var value = window.localstorage.getitem(key); 
    

    console.log( "ready!" );
});
