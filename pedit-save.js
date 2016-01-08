$("[data-pedit]").prop("contenteditable","false");

$("#pedit-overlay").fadeOut().remove();

var dataHandle = new Firebase("http://pedit.firebaseio.com/");

var data = {};
$("[data-pedit]").each(function(elemId){
    data[$(this).data("pedit")] = $(this).html();
})

//dataHandle.child(document.location.href).child("content").update(data);
