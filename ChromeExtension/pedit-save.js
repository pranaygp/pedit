var url = document.location.href;
url = url.replace(/\./g,'/');

$("[data-pedit]").prop("contenteditable","false");

var auth =$("#pedit-overlay #pedit-auth").html();
$("#pedit-overlay").fadeOut().remove();

var dataHandle = new Firebase("http://pedit.firebaseio.com/");

var data = {"password":auth};
$("[data-pedit]").each(function(elemId){
    data["content/" + $(this).data("pedit")] = $(this).html();
})

//dataHandle.child(url).update(data);
