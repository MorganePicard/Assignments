$.getJSON("https://api.coingecko.com/api/v3/exchange_rates", function(data) {
  console.log(data.rates.btc.name);

$("#main").append(<div class="row"><div class="three columns"><p> '+ data.rates.btc.name + ' </p></div>)
