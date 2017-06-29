var readandparse = require('./json-file-reader.js');

readandparse.file('countries.json', function(obj) {
	for(var x = 0; x < obj.length; x++){
	if (obj[x].name === process.argv[2]){
		console.log("Country " + obj[x].name + '\n' + "Top Level Domain " + obj[x].topLevelDomain)
	}
 }
});