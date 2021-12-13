var interval = setInterval(function(){ 
  console.log('Hello World'); 
}, 2000);
setTimeout(function() { 
  clearInterval(interval); 
}, 10000);
