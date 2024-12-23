// Exemple de données des motos
const motos = [
    { 
        id: 1,
        name: "Yamaha MT-07",
        description: "La Yamaha MT-07 est une moto polyvalente et dynamique conçue pour les amateurs de sensations fortes, qu’ils soient en ville ou sur route ouverte. Grâce à son moteur performant et à son design audacieux, la MT-07 offre une expérience de conduite captivante tout en restant accessible aux motards de tous niveaux.",
        details: {
            "Déplacement": "689 cc",
            "Puissance maximale": "73.4 ch à 8 750 tr/min",
            "Couple maximal": "67 Nm à 6 500 tr/min",
            "Transmission": "Manuelle à 6 vitesses",
            "Modèle de changement de vitesse": "1 vers le bas, 5 vers le haut",
            "Cylindres": "Bicylindre en ligne",
            "Circuit de refroidissement": "Refroidi par liquide",
            "Norme d’émission": "BS6 Phase 2",
            "Type de carburant": "Essence",
            "Poids": "184 kg (tous pleins faits)",
            "Capacité du réservoir": "14 litres",
            "Type de frein avant": "Double disque hydraulique Ø 282 mm",
            "Type de frein arrière": "Disque hydraulique Ø 245 mm",
            "Type de suspension avant": "Fourche télescopique",
            "Type de suspension arrière": "Amortisseur réglable",
            "Pneus avant": "120/70 ZR17",
            "Pneus arrière": "180/55 ZR17"
           



        },
        price: "70€ / jour",
        images: [
            "images/mt07.jpeg",
            "images/mt071.jpg",
            "images/mt072.jpeg",
            "images/mt073.jpeg"
        ]
    },
    { 
        id: 2,
        name: "Harley-Davidson V Rod",
        description: "La Harley-Davidson V Rod est une moto emblématique qui combine puissance brute et design distinctif. Équipée d'un moteur Revolution refroidi par liquide, elle est idéale pour les passionnés de motos custom et les amateurs de performances sur route ouverte.",
        details: {
            "Déplacement": "1 247 cc",
            "Puissance maximale": "115 ch à 8 250 tr/min",
            "Couple maximal": "115 Nm à 6 500 tr/min",
            "Transmission": "Manuelle à 5 vitesses",
            "Modèle de changement de vitesse": "1 vers le bas, 4 vers le haut",
            "Cylindres": "Bicylindre en V",
            "Circuit de refroidissement": "Refroidi par liquide",
            "Norme d’émission": "EURO 5",
            "Type de carburant": "Essence",
            "Poids": "307 kg (tous pleins faits)",
            "Capacité du réservoir": "18.9 litres",
            "Type de frein avant": "Double disque hydraulique Ø 300 mm",
            "Type de frein arrière": "Disque hydraulique Ø 292 mm",
            "Type de suspension avant": "Fourche inversée",
            "Type de suspension arrière": "Amortisseur réglable",
            "Pneus avant": "120/70 ZR19",
            "Pneus arrière": "240/40 R18"
        },
        price: "100€ / jour",
        images: [
            "images/harley01.jpg",
            "images/harley02.jpg",
            "images/harley03.jpg",
            "images/harley04.jpg",
            "images/harley05.jpg"
        ]
    },

    { 
        id: 3,
        name: "BMW F 450 GS",
        description: "Puissance et performance",
        details: {
            "Déplacement": "450 cc",
            "Puissance maximale": "48 ch",
            "Couple max.": "45 Nm",
            "Modes de conduite": "Oui",
            "Transmission": "Manuelle à 6 vitesses",
            "Modèle de changement de vitesse": "1 vers le bas, 5 vers le haut",
            "Cylindres": "2",
            "Circuit de refroidissement": "Refroidi par liquide",
            "Norme d'émission": "BS6 Phase 2",
            "Type de carburant": "Essence"


        },
        price: "100€ / jour",
        images: [
                "images/bmw01.jpg",
                "images/bmw02.jpg",
                "images/bmw03.jpg"
        ]
    },

    { 
        id: 4,
        name: "Honda X-ADV",
        description: "Le Honda X-ADV combine le confort d’un scooter avec la performance et le style d’un trail, offrant une expérience de conduite unique.",
        price: "100€ / jour",
        details: {
            "Déplacement": "745 cc",
            "Puissance maximale": "57.8 ch à 6 750 tr/min",
            "Couple maximal": "69 Nm à 4 750 tr/min",
            "Transmission": "Automatique à double embrayage (DCT)",
            "Type de carburant": "Essence",
            "Poids": "238 kg",
            "Capacité du réservoir": "13.2 litres"
        },
        images: [
                "images/xadv01.jpg",
                "images/xadv02.jpg",
                "images/xadv03.jpg"
        ]
    },

    { 
        id: 5,
        name: "Yamaha R1",
        description: "La Yamaha R1 est une superbike puissante, conçue pour les amateurs de vitesse et de performance sur piste.",
        price: "100€ / jour",
        details: {
            "Déplacement": "998 cc",
            "Puissance maximale": "200 ch à 13 500 tr/min",
            "Couple maximal": "112.4 Nm à 11 500 tr/min",
            "Transmission": "Manuelle à 6 vitesses",
            "Cylindres": "4 cylindres en ligne",
            "Type de carburant": "Essence",
            "Poids": "200 kg",
            "Capacité du réservoir": "17 litres"
        },
        images: [
                "images/r01.jpg",
                "images/r02.jpg",
                "images/r03.jpg",
                "images/r04.jpg",
                "images/r05.jpg"
        ]
    },

    { 
        id: 6,
        name: "Yamaha Tmax Tech Max",
        description: "Le Yamaha Tmax Tech Max est le scooter haut de gamme par excellence, combinant technologie avancée et confort exceptionnel.",
        price: "100€ / jour",
        details: {
            "Déplacement": "562 cc",
            "Puissance maximale": "47.6 ch à 7 500 tr/min",
            "Couple maximal": "55.7 Nm à 5 250 tr/min",
            "Transmission": "Automatique (CVT)",
            "Type de carburant": "Essence",
            "Poids": "220 kg",
            "Capacité du réservoir": "15 litres"
        },
        images: [
                "images/tmax01.jpg",
                "images/tmax02.jpg",
                "images/tmax03.jpg",
                "images/tmax04.jpg",
                "images/tmax05.jpg"
        ]
    },


    { 
        id: 7,
        name: "Quad électrique sportif",
        description: "Un quad électrique performant, conçu pour les amateurs de sensations fortes en tout-terrain.",
        price: "100€ / jour",
        details: {
            "Type de moteur": "Électrique",
            "Puissance maximale": "20 kW",
            "Autonomie": "80 km",
            "Vitesse maximale": "85 km/h",
            "Temps de charge": "4 à 6 heures",
            "Poids": "150 kg",
            "Type de frein": "Disque hydraulique"
        },
        images: [
                "images/q01.jpg",
                "images/q02.jpg",
                "images/q03.jpg"
        ]
    },



    { 
        id: 8,
        name: "scooter BMW CE 04",
        description: "Le BMW CE 04 est un scooter électrique innovant, idéal pour les trajets urbains avec style et efficacité.",
        price: "100€ / jour",
        details: {
            "Type de moteur": "Électrique",
            "Puissance maximale": "31 kW",
            "Autonomie": "130 km",
            "Vitesse maximale": "120 km/h",
            "Temps de charge": "4 heures",
            "Poids": "231 kg",
            "Type de frein": "Disque hydraulique"
        },
        images: [
                "images/bmwe01.png",
                "images/bmwe05.jpg",
                "images/bmwe06.jpg",
                "images/bmwe02.jpg",
                "images/bmwe03.jpg",
                "images/bmwe04.jpg",
                "images/bmwe07.jpg"
            ]
    
    }


];

// Récupérer l'ID de la moto depuis l'URL
function getMotoIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Charger les détails de la moto avec diaporama
function loadMotoDetails() {
    const motoId = getMotoIdFromURL();
    const moto = motos.find(m => m.id == motoId);

    if (moto) {
        let currentImageIndex = 0;

        // Mettre à jour les détails
        document.getElementById("moto-name").textContent = moto.name;
        document.getElementById("moto-description").textContent = moto.description;
        const detailsContainer = document.getElementById("moto-details");
        detailsContainer.innerHTML = ""; // Vider le conteneur au cas où
        for (const [key, value] of Object.entries(moto.details)) {
            const listItem = document.createElement("li");
            listItem.textContent = `${key} : ${value}`;
            detailsContainer.appendChild(listItem);
        }

    
    
        document.getElementById("moto-price").textContent = moto.price;

        // Initialiser le slider
        const sliderImage = document.getElementById("slider-image");
        sliderImage.src = moto.images[currentImageIndex];

        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");

        prevBtn.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex - 1 + moto.images.length) % moto.images.length;
            sliderImage.src = moto.images[currentImageIndex];
        });

        nextBtn.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex + 1) % moto.images.length;
            sliderImage.src = moto.images[currentImageIndex];
        });
    } else {
        document.querySelector(".moto-details").innerHTML = "<p>Moto introuvable.</p>";
    }
}

// Charger les détails une fois la page chargée
document.addEventListener("DOMContentLoaded", loadMotoDetails);
