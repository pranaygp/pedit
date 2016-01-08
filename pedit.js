var host = u2k(document.location.hostname);
function u2k(inputURL){
    var url = inputURL;
    url = url.replace(/\./g,'(dot)');
    url = url.replace(/\//g,'(slash)');
    return url;
}

function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}


// Get a database reference to our posts
var ref = new Firebase("http://pedit.firebaseio.com/");
// Attach an asynchronous callback to read the data at our posts reference
ref.child(host).child("content").on("value", function(snapshot) {
    var peditData = snapshot.val();
    if(peditData == null)
        return;
    var peditObjects = getAllElementsWithAttribute("data-pedit");
    for(var i = 0; i < peditObjects.length; i++){
        peditObjects[i].innerHTML = (peditData[peditObjects[i].getAttribute("data-pedit")] == undefined) ? peditObjects[i].innerHTML : peditData[peditObjects[i].getAttribute("data-pedit")];
    };
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
