$.getJSON
("https://api.coingecko.com/api/v3/exchange_rates"),
  function(json) {
  console.log(json);
  
  
  for(var i=0 < json.rates.length; i=i + 1) {
    var currencies = json.rates[i];
    
$("#main").append("<p>" + rates.btc.value +"</p>");
    



});

