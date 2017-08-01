// object-name:  object
// 	properties:  x of them
// 		propertyA:  type
// 			initialized:  initial value
// 			purpose:  why does this thing exist in the app
// 	methods:  y of them
// 		methodA:  function
// 			args:  z of them
// 				argA:  type
// 					purpose:  what does this arg do in the method
// 			return:  type
// 				purpose:  why does the app care that this is returned
// 			behavior:  what happend between '{' and '}'
// 			purpose:  why does this thing exist in the app
// 	purpose:  why does this thing exist in the app

// ------------------------------------------------------ //

var cow = {
	age: 0,
	weight: 100,
	eat: function(food) {
		var poop = 'used ' + food;
		return poop;
	}
}

// cow: object
// 	properties: 2
// 		age: number
// 			initialized: 0
// 			purpose:  how old is said cow?
//		weight: number
//			initialized: 100
//			purpose: how much food will it produce?
// 	methods: 1
// 		eat: function
// 			args: 1
// 				food: string
// 					purpose: determines the type of poop
// 			return: string
// 				purpose: to have access to the used food
// 			behavior: takes the type of food and contatinates 'used' to the front
// 			purpose: so the cow can eat food
// 	purpose: our application is a cow simulator, it needs cows

