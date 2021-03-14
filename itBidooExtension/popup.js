document.addEventListener('DOMContentLoaded', function() {

  function popup(){
      var minTime =  document.getElementById('minTime').value
      var maxTime =  document.getElementById('maxTime').value
      var yminTime =  document.getElementById('yminTime').value

      if(maxTime == '')
        {maxTime=0}
      if(minTime == '')
        {minTime=0}

      if(yminTime == '')
        {yminTime=0}        

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, 
          {"message": "start","maxTime":maxTime,"minTime":minTime,"yminTime":yminTime}
          );


      });
  }

  document.getElementById("clickIt").addEventListener("click", popup);


  }, false);


  