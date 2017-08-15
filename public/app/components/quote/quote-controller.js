function QuoteController(){

	var qs = new QuoteService()

	function renderQuote(){
	qs.getQuote(function(quote){
		console.log(quote)
		document.getElementById('quote').innerHTML = `
		<p class="flow-text">"${quote.quote}"</p>
		<p1 class="flow-text author center-align">-${quote.author}
		`
	})
	}
renderQuote()
}
