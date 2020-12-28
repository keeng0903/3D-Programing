var loading = function(){
    var interval_obj = setInterval(function(){
        var loading = document.getElementById("loading")
        loading.style.display ="none";
        clearInterval(interval_obj);
    }, 5000);
}