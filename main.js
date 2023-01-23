let button = document.getElementById("bt");
let p = document.getElementById("test");
button.addEventListener("click", geoLocatio);

function geoLocatio() {

    if(navigator.geolocation){
       
        navigator.geolocation.getCurrentPosition(showPosition,showError)
    }
    else{
        p.innerHTML="it's not supported in your browser"
    }
}

function showPosition(position){
    var lat=position.coords.latitude
    var long=position.coords.longitude
    var url = "http://maps.google.com/maps?q="+lat+","+long
    window.open(url,'_self') 

}
function showError(err){

    switch(err.code)
    {
        case err.PERMISSION_DENIED:
            para.innerHTML="permission denied"
            break;
            case err.TIMEOUT:
                para.innerHTML="it tooke alonge time"
                break;
                case err.UNKNOWN_ERROR:
                    para.innerHTML="unknown error occured"
                break;
    }
  
}