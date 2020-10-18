$.getJSON("https://api.coingecko.com/api/v3/exchange_rates", function(data) {
  console.log(data.rates.btc.name);
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.btc.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.btc.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.btc.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.btc.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.eth.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eth.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eth.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eth.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.ltc.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ltc.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ltc.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ltc.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.bch.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bch.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bch.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bch.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.bnb.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bnb.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bnb.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bnb.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.eos.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eos.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eos.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eos.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.xrp.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xrp.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xrp.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xrp.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.xlm.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xlm.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xlm.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xlm.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.link.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.link.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.link.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.link.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.dot.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.dot.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.dot.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.dot.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.yfi.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.yfi.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.yfi.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.yfi.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.usd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.usd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.usd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.usd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.aed.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.aed.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.aed.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.aed.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.ars.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ars.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ars.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ars.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.aud.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.aud.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.aud.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.aud.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.bdt.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bdt.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bdt.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bdt.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.bhd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bhd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bhd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bhd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.bmd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bmd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bmd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.bmd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.brl.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.brl.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.brl.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.brl.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.cad.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.cad.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.cad.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.cad.type +
      "</p></div> </div>"
  );

  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.chf.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.chf.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.chf.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.chf.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.clp.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.clp.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.clp.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.clp.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.cny.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.cny.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.cny.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.cny.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.czk.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.czk.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.czk.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.czk.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.dkk.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.dkk.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.dkk.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.dkk.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.eur.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eur.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eur.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.eur.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.gbp.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.gbp.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.gbp.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.gbp.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.hkd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.hkd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.hkd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.hkd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.huf.name +
      '</p></div> <div class="four columns"><p> ' +
      data.rates.huf.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.huf.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.huf.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.idr.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.idr.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.idr.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.idr.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.ils.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ils.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ils.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ils.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.inr.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.inr.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.inr.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.inr.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.jpy.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.jpy.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.jpy.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.jpy.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.krw.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.krw.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.krw.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.krw.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.kwd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.kwd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.kwd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.kwd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.lkr.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.lkr.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.lkr.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.lkr.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.mmk.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.mmk.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.mmk.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.mmk.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.mxn.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.mxn.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.mxn.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.mxn.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.myr.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.myr.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.myr.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.myr.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.ngn.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ngn.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ngn.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.ngn.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.nok.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.nok.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.nok.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.nok.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.nzd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.nzd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.nzd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.nzd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.php.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.php.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.php.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.php.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.pkr.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.pkr.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.pkr.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.pkr.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.pln.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.pln.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.pln.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.pln.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.rub.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.rub.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.rub.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.rub.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.sar.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sar.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sar.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sar.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.sek.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sek.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sek.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sek.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.sgd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sgd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sgd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.sgd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.thb.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.thb.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.thb.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.thb.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.try.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.try.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.try.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.try.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.twd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.twd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.twd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.twd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.uah.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.uah.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.uah.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.uah.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.vef.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.vef.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.vef.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.vef.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.vnd.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.vnd.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.vnd.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.vnd.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.zar.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.zar.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.zar.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.zar.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.xdr.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xdr.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xdr.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xdr.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.xag.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xag.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xag.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xag.type +
      "</p></div> </div>"
  );
  $("#main").append(
    '<div class="row"><div class="three columns"><p> ' +
      data.rates.xau.name +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xau.value +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xau.unit +
      '</p></div> <div class="three columns"><p> ' +
      data.rates.xau.type +
      "</p></div> </div>"
  );
});
