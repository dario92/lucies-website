// routes for the sites
module.exports = function( app ){

	// set the directory view and 
	// the tempalte engine
	app.set('views', './views');
	app.set('view engine', 'jade');
	

	// when in developemnt mode 
	// make the rendered html pretty
	if( app.get('env') === 'development'){
		app.locals.pretty = true;
	}


	app.get('*', function(req, res){
		res.render('main');
	});

};