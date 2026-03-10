function showInfo(car){

let title = document.getElementById("carTitle")
let desc = document.getElementById("carDescription")
let box = document.getElementById("infoBox")

if(car === "r34"){
title.innerText = "Nissan Skyline R34 GTR"
desc.innerText = "The R34 GTR is one of the most iconic JDM cars ever made. Powered by the legendary RB26DETT twin-turbo engine and known from Fast & Furious, it represents the peak of Japanese performance engineering."
}

if(car === "rx7"){
title.innerText = "Mazda RX-7"
desc.innerText = "The RX-7 is famous for its lightweight design and rotary engine. Its unique sound and incredible handling made it one of the most loved sports cars in the JDM community."
}

if(car === "nsx"){
title.innerText = "Honda NSX"
desc.innerText = "The Honda NSX was Japan’s answer to Ferrari. Developed with input from Ayrton Senna, it combines exotic performance with Honda reliability."
}

if(car === "evox"){
title.innerText = "Mitsubishi Lancer Evolution X"
desc.innerText = "The Evo X is a rally-inspired monster with all-wheel drive and turbocharged power. Known for its aggressive styling and incredible cornering ability."
}

box.style.display = "block"

}