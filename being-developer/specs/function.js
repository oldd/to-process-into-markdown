function butcher(cow) {
	var food = cow.weight * .43; // https://www.oda.state.ok.us/food/fs-cowweight.pdf
	var message = 'deceased at ' + cow.age + ' years of age';
	return [food, message];
}

// butcher: function
// 	args: 1
// 		cow: a cow object
// 			purpose: to keep the butcher employed
// 	return: array containing two values
// 		food: the amount of food yeilded from this cow
// 		message: a polite message commemorating the cow's life
// 	behavior: calculates the amount of yield from the given cow and constructs a polite message
// 	purpose: this is a farm app, not a petting zoo app.