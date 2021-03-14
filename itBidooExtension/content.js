function swap(n1,n2)
{
  var temp=n1;
  n1=n2;
  n2=temp;

  return n1,n2
}
function randomTime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


localStorage.clear()
chrome.runtime.onMessage.addListener(

  function(request, sender, sendResponse) {
    
    if( request.message === "start" ) {



        console.log(request.minTime,request.maxTime)
        
        var randTime=randomTime(request.minTime,request.maxTime)
        var randTimeY=Math.abs(request.yminTime)



        console.log(randTime,randTimeY,randTime+randTimeY)
        sleep(randTime).then(() => {

          if($(".text-countdown-progressbar").text()==0)
          {
            console.log('yes it is zero now u can append')
            $('head').append(`<script>
            function sleep (time) {
              return new Promise((resolve) => setTimeout(resolve, time));
            }
              
                setInterval(function check() {
                  if($(".text-countdown-progressbar").text()==0)
                  {
                  
                      sleep(${randTime+randTimeY}).then( () =>{
                  
                  
                   console.log(${randTime+randTimeY})
                      if($(".text-countdown-progressbar").text()==0)
                      {
                        console.log('yes it is zeo')
                        console.log($(".text-countdown-progressbar").text())
                          if($(".text-countdown-progressbar").text()==0)
                          {
                            console.log('first check')
                            console.log($(".text-countdown-progressbar").text())
                           if($(".text-countdown-progressbar").text()==0) 
                           {
                            console.log('second check')
                            if($(".text-countdown-progressbar").text()==0) 
                            {
                              console.log('third check')
                              $(document).find('a.bid-button.button-default.button-rounded.button-full.ripple-button.button-big-text.auction-btn-bid.button-mint-flat.bid-button-active.hidden-xs').trigger('click');
                            }
                           }
                  
                          }
                        
                        console.log('aafter click');
                      }
                    })
                  
                  
                  }
                  
                  else{
                      console.log($(".text-countdown-progressbar").text());
                  
                  }
                }, 600);
            </script> `);
          }
          else{
            $('head').append(`<script>
            function sleep (time) {
              return new Promise((resolve) => setTimeout(resolve, time));
            }
              
                setInterval(function check() {
                  if($(".text-countdown-progressbar").text()==0)
                  {
                  
                      sleep(${randTime+randTimeY}).then( () =>{
                  
                  
                   console.log(${randTime+randTimeY})
                      if($(".text-countdown-progressbar").text()==0)
                      {
                        console.log('yes it is zeo')
                        console.log($(".text-countdown-progressbar").text())
                          if($(".text-countdown-progressbar").text()==0)
                          {
                            console.log('first check')
                            console.log($(".text-countdown-progressbar").text())
                           if($(".text-countdown-progressbar").text()==0) 
                           {
                            console.log('second check')
                            if($(".text-countdown-progressbar").text()==0) 
                            {
                              console.log('third check')
                              if($(".text-countdown-progressbar").text()==0) 
                              {
                              console.log('fourth check')
                              $(document).find('a.bid-button.button-default.button-rounded.button-full.ripple-button.button-big-text.auction-btn-bid.button-mint-flat.bid-button-active.hidden-xs').trigger('click');
                              }
                            }
                           }
                  
                          }
                        
                        console.log('aafter click');
                      }
                    })
                  
                  
                  }
                  
                  else{
                      console.log($(".text-countdown-progressbar").text());
                  
                  }
                }, 600);
            </script> `);
            console.log('no u cant')
          }



                  console.log('appeneded')

        });


        start();


      }
  }
);

var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("templates.htm");

document.body.insertBefore (iFrame, document.body.firstChild);

function start(){
    // alert("started");
}





