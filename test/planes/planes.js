const planes = {
	free: "bla free",
	Basic: "bla blabasic",
	Expert: "bla expert",
	Expert_plus: "expert plus",
}
let respuestaUser = "Basic"

let keys = Object.keys(planes)

for (let i = 0; i < keys.length; i++) {
	if (respuestaUser == keys[i]) {
		console.log(planes[respuestaUser])
	}
}
