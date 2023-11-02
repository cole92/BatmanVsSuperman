const batman = {
    zivot: 100,
    energija: 0,
    oruzje: ["pesnica", "udarac nogom", "surikeni(20 energije)", "none(default)"],
    odbrane: ["blok(40 energije)", "lecenje(50 energije)", "none(default)"],
    blokiranje: false,
    smanjiZivot(x) {
        this.zivot -= x;
        if (this.zivot <= 0) {
            this.zivot = 0;
            console.log('Batman je mrtav');
        }
    },
    napadni(neprijatelj, udarac) {
        let steta = 0;

        if (udarac == 'pesnica') {
            steta = 10;
            this.povecajEnergijuZaUdarac(udarac);
        } else if (udarac == 'udarac nogom') {
            steta = 15;
            this.povecajEnergijuZaUdarac(udarac);
        } else if (udarac == 'surikeni(20 energije)' && this.energija >= 20) {
            steta = 30;
            this.energija -= 20;
        } else if (udarac == 'none(default)') {
            console.log("Nema izabranog udarca.");
        } else {
            alert('Nepoznat udarac ili nedovoljno energije za surikene!')
            return;
        }

        if (neprijatelj.izbegavanje) {
            steta = 0;
            neprijatelj.izbegavanje = false;
        }
        neprijatelj.smanjiZivot(steta);
    },
    odbrana(tipOdbrane) {
        if (tipOdbrane == 'blok(40 energije)' && this.energija >= 40) {
            this.energija -= 40;
            this.blokiranje = true;
        } else if (tipOdbrane == 'lecenje(50 energije)' && this.energija >= 50) {
            this.energija -= 50;
            this.zivot += 50;
            if (this.zivot > 100) {
                this.zivot = 100;
            }
        } else if (tipOdbrane == 'none(default)') {
            console.log("Nema izabranog udarca.");
        } else {
            console.log('Nepoznata odbrana ili nedovoljno energije!');
        }

    },
    povecajEnergiju(x) {
        this.energija += x;
        if (this.energija >= 100) {
            this.energija = 100;
        }
    },
    povecajEnergijuZaUdarac(udarac) {
        if (udarac == 'pesnica' || udarac == 'udarac nogom') {
            this.povecajEnergiju(30)
        }
    }
}

const superman = {
    zivot: 100,
    energija: 0,
    oruzje: ["laser", "ledeni dah", "super udarac(30 energije)", "none(default)"],
    odbrane: ["Izbegavanje(70 energije)", "none(default)"],
    izbegavanje: false,
    smanjiZivot(x) {
        this.zivot -= x;
        if (this.zivot <= 0) {
            this.zivot = 0;
            console.log('Superman je mrtav');
        }
    },
    napadni(neprijatelj, udarac) {
        let steta = 0;

        if (udarac == 'laser') {
            steta = 15;
            this.povecajEnergijuZaUdarac(udarac);
        } else if (udarac == 'ledeni dah') {
            steta = 25;
            this.povecajEnergijuZaUdarac(udarac);
        } else if (udarac == 'super udarac(30 energije)' && this.energija >= 30) {
            steta = 40;
            this.energija -= 30;
        } else if (udarac == 'none(default)') {
            console.log("Nema izabranog udarca.");
        } else {
            alert('Nepoznat udarac ili nedovoljno energije za super udarac!')
            return;
        }

        if (neprijatelj.blokiranje) {
            steta *= 0.4;
            neprijatelj.blokiranje = false;
        }
        neprijatelj.smanjiZivot(steta);
    },
    odbrana(tipOdbrane) {
        if (tipOdbrane == 'izbegavanje(70 energije)' && this.energija >= 70) {
            this.energija -= 70;
            this.izbegavanje = true;
        } else if (tipOdbrane == 'none(default)') {
            console.log("Nema izabranog udarca.");
        }
        else {
            console.log('Nepoznata odbrana ili nema dovoljno energije!');
        }
        
    },
    povecajEnergiju(x) {
        this.energija += x;
        if (this.energija >= 100) {
            this.energija = 100;
        }
    },
    povecajEnergijuZaUdarac(udarac) {
        if (udarac == 'laser' || udarac == 'ledeni dah') {
            this.povecajEnergiju(30)
        }
    }
}
// Objekat za potrebnu energiju
const potrebnaEnegija = {
    napad: {
        'pesnica' : 0,
        'udarac nogom': 0,
        'surikeni(20 energije)' : 20,
        'laser' : 0,
        'ledeni dah': 0,
        'super udarac(30 energije)': 30,
        'none(default)' : 0
    },
    odbrana: {
        'blok(40 energije)' : 40,
        'lecenje(50 energije)': 50,
        'izbegavanje(70 energije)': 70,
        'none(default)' : 0
    }
}

// Funkcija za popunjavanje menija za napad.
function popuniSelectAtk() {
    const batmanSelectAtk = document.getElementById('batmanAttack');
    batman.oruzje.forEach(udarac => {
        const option = document.createElement('option');
        option.value = udarac;
        option.innerText = udarac;

        batmanSelectAtk.appendChild(option)
    })
    const supermanSelectAtk = document.getElementById('supermanAttack');
    superman.oruzje.forEach(udarac => {
        const option = document.createElement('option');
        option.value = udarac;
        option.innerText = udarac;

        supermanSelectAtk.appendChild(option)
    })
}
popuniSelectAtk()
// Funkcija za popunjavanje menija za odbrane.
function popuniSelectDef() {
    const batmanSelectDef = document.getElementById('batmanDefense');
    batman.odbrane.forEach(odbrana => {
        const option = document.createElement('option');
        option.value = odbrana;
        option.innerText = odbrana;

        batmanSelectDef.appendChild(option)
    })
    const supermanSelectDef = document.getElementById('supermanDefense');
    superman.odbrane.forEach(odbrana => {
        const option = document.createElement('option');
        option.value = odbrana;
        option.innerText = odbrana;

        supermanSelectDef.appendChild(option)
    })
}
popuniSelectDef()
// Funkcija za(ukljuci - iskljuci) obranu ili napad
function AtkOrDef(attackElem, defenseElem) {
    attackElem.addEventListener('change', function () {
        defenseElem.disabled = this.value ? true : false;
    });
    defenseElem.addEventListener('change', function () {
        attackElem.disabled = this.value ? true : false;
    });
}
AtkOrDef(document.getElementById('batmanAttack'), document.getElementById('batmanDefense'));
AtkOrDef(document.getElementById('supermanAttack'), document.getElementById('supermanDefense'));
// Funkcija za otkljucavanje udaraca.
function unlock(atkElem, defElem) {
    atkElem.addEventListener('change', function () {
        if (this.value === 'none(default)') {
            defElem.disabled = false;
        } else {
            defElem.disabled = true;
        }
    })
    defElem.addEventListener('change', function () {
        if (this.value === 'none(default)') {
            atkElem.disabled = false;
        } else {
            atkElem.disabled = true;
        }
    })
}
const batmanAttack = document.getElementById('batmanAttack');
const batmanDefense = document.getElementById('batmanDefense');
const supermanAttack = document.getElementById('supermanAttack');
const supermanDefense = document.getElementById('supermanDefense');
unlock(batmanAttack, batmanDefense);
unlock(supermanAttack, supermanDefense);

// Funkcija za start igre i odabir prvog igraca
let trenutniIgrac = null

function gameStart() {
    document.getElementById('gameStart').addEventListener('click', function () {
        if (trenutniIgrac === null) {
            const randomValue = Math.round(Math.random());
            trenutniIgrac = randomValue <= 0.5 ? 'batman' : 'superman';
        }
        document.getElementById('currentPlayerDisplay').innerText = `${trenutniIgrac} je na potezu`
        const start = document.getElementById('attack');
            start.disabled = false;
    })  
}
gameStart()
// Funkcija za azuriranje zivota
function updateLife(player, value) {
    console.log("updateLife is called", player, value);
    let elementId = ''
    if (player === 'batman') {
        elementId = 'batmanHealthP';
    } else if (player === 'superman') {
        elementId = 'supermanHealthP'
    }
    if (elementId) {
        document.getElementById(elementId).innerText = "Zivot:" + value;
    }
}
// Funkcija za azuriranje energije
function updateEnergy(player, value) {
    console.log('updateEnergy is called', player, value);
    let elementId = ''
    if (player === 'batman') {
        elementId = 'batmanEnergyP';
    } else if (player === 'superman') {
        elementId = 'supermanEnergyP';
    }
    if (elementId) {
        document.getElementById(elementId).innerText = `Energija: ${value}`
    }
}
// Funkcija za logiku napada

function izvrsiAkcijuZaBatman() {
    if (document.getElementById('batmanAttack').value !== 'none(default)') {
        batman.napadni(superman, document.getElementById('batmanAttack').value);
    } else if (document.getElementById('batmanDefense').value !== 'none(default)') {
        batman.odbrana(document.getElementById('batmanDefense').value);
    }
}

function izvrsiAkcijuZaSuperman() {
    if (document.getElementById('supermanAttack').value !== 'none(default)') {
        superman.napadni(batman, document.getElementById('supermanAttack').value);
    } else if (document.getElementById('supermanDefense').value !== 'none(default)') {
        superman.odbrana(document.getElementById('supermanDefense').value);
    }
}

function performAction() {
    console.log("performAction is called");
    document.getElementById('attack').addEventListener('click', function(){
       if (trenutniIgrac === 'batman') {
        izvrsiAkcijuZaBatman();
        izvrsiAkcijuZaSuperman();
        trenutniIgrac = 'superman';
       } else {
        izvrsiAkcijuZaSuperman();
        izvrsiAkcijuZaBatman();
        trenutniIgrac = 'batman'
       }

        updateLife('batman', batman.zivot);
        updateLife('superman', superman.zivot);
        updateEnergy('batman', batman.energija);
        updateEnergy('superman', superman.energija);
        document.getElementById('currentPlayerDisplay').innerText = `${trenutniIgrac} prvi napada`;
    })
    
}
performAction()