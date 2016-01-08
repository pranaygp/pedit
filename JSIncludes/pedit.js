var host = u2k(document.location.hostname);
var path = u2k(document.location.pathname.substr(1));
var url = host + "/" + path;
function u2k(inputURL){
    var url = inputURL;
    url = url.replace(/\./g,'(dot)');
    url = url.replace(/\//g,'(slash)');
    return url;
}


// Get a database reference to our posts
var ref = new Firebase("http://pedit.firebaseio.com/");
// Attach an asynchronous callback to read the data at our posts reference
ref.child(host).child("content").child(path).on("value", function(snapshot) {
    //  console.log(snapshot.val());
    var data = snapshot.val()
    for(var key in data){
        $("[data-pedit='"+key+"']").html(data[key]);
    }
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
