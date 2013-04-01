document.onsecuritypolicyviolation = function (evt) {
	console.log('Bzzp! Security violation on', evt.documentURI);
	console.log('Violated directive:', evt.violatedDirective);
	console.log('Original policy:', evt.originalPolicy);
};

