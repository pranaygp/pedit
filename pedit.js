// The MIT License (MIT)
// 
// Copyright (c) 2016 Pranay Prakash <pranay.gp@gmail.com>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of 
// this software and associated documentation files (the "Software"), to deal in the 
// Software without restriction, including without limitation the rights to use, 
// copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
// Software, and to permit persons to whom the Software is furnished to do so, 
// subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all 
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

if (typeof (Storage) !== "undefined") {
    replaceDataInDOM(JSON.parse(localStorage.getItem("peditData")));
}

var host = u2k(document.location.hostname);

function u2k(inputURL) {
    var url = inputURL;
    if(url.match(/^www\./))
    {
        url = url.substring(4);
    }
    url = url.replace(/\./g,'(dot)');
    url = url.replace(/\//g,'(slash)');
    return url;
}

function getAllElementsWithAttribute(attribute) {
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

function replaceDataInDOM(peditData) {
    if(peditData == null)
        return;
    var peditObjects = getAllElementsWithAttribute("data-pedit");
    for(var i = 0; i < peditObjects.length; i++){
        peditObjects[i].innerHTML = (peditData[peditObjects[i].getAttribute("data-pedit")] == undefined) ? peditObjects[i].innerHTML : peditData[peditObjects[i].getAttribute("data-pedit")];
    };
}

function init(){
  // Get a database reference to our posts
  var ref = new XMLHttpRequest();
  ref.open('GET', 'http://pedit.firebaseio.com/' + host + '/content.json');
  ref.send(null);

  ref.onreadystatechange = function () {
    var DONE = 4;
    var OK = 200; 
    if (ref.readyState === DONE) {
      if (ref.status === OK) {
        var responseData = JSON.parse(ref.responseText);
        replaceDataInDOM(responseData);
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("peditData", ref.responseText);
        }
      } else {
        console.log('Error: ' + ref.status); // An error occurred during the request.
      }
    }
  };
}

init();