const impactValues = {
    camiseta_manga_curta: {
        algodao: { water: 3750, co2: 1.965 },
        poliester: { water: 500, co2: 2.272 },
        la: { water: 1800, co2: 7.758 },
        seda: { water: 750, co2: 2.379 },
        viscose: { water: 1500, co2: 1.948 },
        linho: { water: 1000, co2: 1.965 },
        bambu: { water: 750, co2: 1.965 },
        nylon: { water: 600, co2: 2.258 },
        jeans: { water: 10500, co2: 2.926 },
        couro_sintetico: { water: 12000, co2: 14.316 },
        reciclavel: { water: 600, co2: 1.572 }
    },
    camiseta_manga_longa: {
        algodao: { water: 4500, co2: 2.358 },
        poliester: { water: 625, co2: 2.84 },
        la: { water: 2400, co2: 10.344 },
        seda: { water: 750, co2: 2.379 },
        viscose: { water: 1875, co2: 2.435 },
        linho: { water: 1200, co2: 2.358 },
        bambu: { water: 900, co2: 2.358 },
        nylon: { water: 750, co2: 2.8225 },
        jeans: { water: 18000, co2: 5.016 },
        couro_sintetico: { water: 16000, co2: 19.088 },
        reciclavel: { water: 750, co2: 1.965 }
    },
    blusa_la_leve: {
        la: { water: 2400, co2: 10.344 }
    },
    blusa_la_media: {
        la: { water: 3000, co2: 12.93 }
    },
    blusa_la_grossa: {
        la: { water: 3600, co2: 15.516 }
    },
    calca: {
        algodao: { water: 9000, co2: 4.716 },
        poliester: { water: 1000, co2: 4.544 },
        jeans: { water: 24000, co2: 6.688 },
        couro_sintetico: { water: 24000, co2: 28.632 },
        reciclavel: { water: 1200, co2: 3.144 }
    },
    bermuda: {
        algodao: { water: 4500, co2: 2.358 },
        poliester: { water: 625, co2: 2.84 },
        la: { water: 2400, co2: 10.344 },
        seda: { water: 750, co2: 2.379 },
        viscose: { water: 1875, co2: 2.435 },
        linho: { water: 1200, co2: 2.358 },
        bambu: { water: 900, co2: 2.358 },
        nylon: { water: 750, co2: 2.8225 },
        jeans: { water: 18000, co2: 5.016 },
        couro_sintetico: { water: 14000, co2: 16.702 },
        reciclavel: { water: 750, co2: 1.965 }
    },
    shorts: {
        algodao: { water: 3750, co2: 1.965 },
        poliester: { water: 500, co2: 2.272 },
        la: { water: 1800, co2: 7.758 },
        seda: { water: 750, co2: 2.379 },
        viscose: { water: 1500, co2: 1.948 },
        linho: { water: 1000, co2: 1.965 },
        bambu: { water: 750, co2: 1.965 },
        nylon: { water: 600, co2: 2.258 },
        jeans: { water: 12000, co2: 3.344 },
        couro_sintetico: { water: 10000, co2: 11.93 },
        reciclavel: { water: 600, co2: 1.572 }
    },
    saia: {
        algodao: { water: 6000, co2: 3.144 },
        poliester: { water: 750, co2: 3.408 },
        la: { water: 3000, co2: 12.93 },
        seda: { water: 1250, co2: 3.965 },
        viscose: { water: 2250, co2: 2.922 },
        linho: { water: 1200, co2: 2.358 },
        bambu: { water: 1200, co2: 3.144 },
        nylon: { water: 900, co2: 3.387 },
        jeans: { water: 18000, co2: 5.016 },
        couro_sintetico: { water: 14000, co2: 16.702 },
        reciclavel: { water: 900, co2: 2.358 }
    },
    jaqueta: {
        algodao: { water: 12000, co2: 6.288 },
        poliester: { water: 1750, co2: 7.952 },
        la: { water: 6000, co2: 25.86 },
        seda: { water: 2500, co2: 7.93 },
        viscose: { water: 5250, co2: 6.818 },
        linho: { water: 3200, co2: 6.288 },
        bambu: { water: 2400, co2: 6.288 },
        nylon: { water: 2100, co2: 7.903 },
        jeans: { water: 36000, co2: 10.032 },
        couro_sintetico: { water: 30000, co2: 35.79 },
        reciclavel: { water: 2100, co2: 5.502 }
    },
    vestido: {
        algodao: { water: 9000, co2: 4.716 },
        poliester: { water: 1250, co2: 5.68 },
        la: { water: 6000, co2: 25.86 },
        seda: { water: 2000, co2: 6.344 },
        viscose: { water: 4500, co2: 5.844 },
        linho: { water: 2400, co2: 4.716 },
        bambu: { water: 1800, co2: 4.716 },
        nylon: { water: 1500, co2: 5.645 },
        jeans: { water: 30000, co2: 8.36 },
        couro_sintetico: { water: 24000, co2: 28.632 },
        reciclavel: { water: 1500, co2: 3.93 }
    },
    moletom: {
        algodao: { water: 12000, co2: 6.288 },
        poliester: { water: 1750, co2: 7.952 }
    }
};

let totalWaterImpact = 0;
let totalCo2Impact = 0;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addClothing() {
    const clothingType = document.getElementById('clothing-type').value;
    const fabricType = document.getElementById('fabric-type').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    // if (!clothingType || !fabricType || quantity < 1) {
    //     alert("Por favor, preencha todos os campos corretamente.");
    //     return;
    // }

    const clothingList = document.getElementById('clothes-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${quantity}x ${capitalizeFirstLetter(clothingType.replace(/_/g, ' '))} (${capitalizeFirstLetter(fabricType)})`;
    clothingList.appendChild(listItem);

    const clothingImpact = impactValues[clothingType][fabricType];
    if (clothingImpact) {
        const totalClothingWaterImpact = quantity * clothingImpact.water;
        const totalClothingCo2Impact = quantity * clothingImpact.co2;

        totalWaterImpact += totalClothingWaterImpact;
        totalCo2Impact += totalClothingCo2Impact;

        document.getElementById('water-impact').textContent = `${totalWaterImpact.toFixed(2)} litros`;
        document.getElementById('co2-impact').textContent = `${totalCo2Impact.toFixed(2)} kg`;
    } else {
        alert("Tipo de roupa ou tecido inválido.");
    }
}