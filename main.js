$.getJSON('https://api.coingecko.com/api/v3/exchange_rates', function(rates) {
  console.log(rates);
});
var rates 

$("body").append("<p>" + rates.btc +"</p>")