function openCar(car){

let title=document.getElementById("carTitle")
let desc=document.getElementById("carDescription")
let img=document.getElementById("modalImg")

let sound = new Audio(car + ".mp3")

if(car==="r34"){

title.innerText="Nissan Skyline R34 GTR"

desc.innerText="The R34 GTR is one of the most legendary JDM cars ever built. It features the RB26 twin turbo engine and the advanced ATTESA AWD system."

img.src="r34.jpg"

}

if(car==="rx7"){

title.innerText="Mazda RX7"

desc.innerText="The RX7 uses a rotary engine which makes it lightweight and extremely fun to drive. It became a JDM icon thanks to drifting culture."

img.src="rx7.jpg"

}

if(car==="nsx"){

title.innerText="Honda NSX"

desc.innerText="The Honda NSX was developed with input from Formula 1 legend Ayrton Senna. It was designed to rival Ferrari while maintaining reliability."

img.src="nsx.jpg"

}

if(car==="evox"){

title.innerText="Mitsubishi Lancer Evolution X"

desc.innerText="The Evo X is a turbocharged AWD rally machine known for its aggressive styling and insane cornering ability."

img.src="evox.jpg"

}

document.getElementById("modal").style.display="flex"

sound.play()

}

function closeCar(){

document.getElementById("modal").style.display="none"

}