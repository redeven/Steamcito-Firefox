// Corro función por primera vez
(async() => {
  await getUsdExchangeRate();
  getPrices("standard");
  getPrices("search");

  // Trigger recursivo
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  const observer = new MutationObserver(function(mutations, observer) {
    getPrices("standard");
    getPrices("search");
  });

  observer.observe(document, {
    subtree: true,
    attributes: true
  });

})();








