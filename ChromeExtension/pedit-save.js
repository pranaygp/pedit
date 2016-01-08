var url = u2k(document.location.hostname) + "/" + u2k(document.location.pathname.substr(1));
function u2k(inputURL){
    var url = inputURL;
    url = url.replace(/\./g,'(dot)');
    url = url.replace(/\//g,'(slash)');
    return url;
}

$("[data-pedit]").prop("contenteditable","false");

var auth =$("#pedit-overlay #pedit-auth").html();
$("#pedit-overlay").fadeOut().remove();

if(auth != undefined){

    var dataHandle = new Firebase("http://pedit.firebaseio.com/");

    var data = {"password":auth};
    $("[data-pedit]").each(function(elemId){
        data["content/" + $(this).data("pedit")] = $(this).html();
    })

    dataHandle.child(url).update(data, function(error){
        if(error){
            alert("pedit was not authenticated properly.");
            console.log(error);
        }
    });
}
