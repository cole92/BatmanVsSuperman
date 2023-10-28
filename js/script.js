const batman = {
    zivot: 100,
    energija: 0,
    rezervisanaEnergija: 0,
    oruzje: ["pesnica", "udarac nogom", "surikeni", "none(default)"],
    odbrane: ["blok", "lecenje", "none(default)"],
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
        } else if (udarac == 'surikeni' && this.energija >= 20) {
            steta = 30;
            this.energija -= 20;
        } else if (udarac == 'none(default)') {
            console.log("Nema izabranog udarca.");
        } else {
            alert('Nepoznat udarac ili nedovoljno energije za surikene!')
            return;
        }

        handleReservedEnergy(this, udarac, 'napad', 'batmanReservedEnergy')

        if (neprijatelj.izbegavanje) {
            steta = 0;
            neprijatelj.izbegavanje = false;
        }
        neprijatelj.smanjiZivot(steta);
    },
    odbrana(tipOdbrane) {
        if (tipOdbrane == 'blok' && this.energija >= 40) {
            this.energija -= 40;
            this.blokiranje = true;
        } else if (tipOdbrane == 'lecenje' && this.energija >= 50) {
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
        handleReservedEnergy(this, tipOdbrane, 'odbrana', 'batmanReservedEnergy')
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
    rezervisanaEnergija: 0,
    oruzje: ["laser", "ledeni dah", "super udarac", "none(default)"],
    odbrane: ["Izbegavanje", "none(default)"],
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
        } else if (udarac == 'super udarac' && this.energija >= 30) {
            steta = 40;
            this.energija -= 30;
        } else if (udarac == 'none(default)') {
            console.log("Nema izabranog udarca.");
        } else {
            alert('Nepoznat udarac ili nedovoljno energije za super udarac!')
            return;
        }

        handleReservedEnergy(this, udarac, 'napad', 'supermanReservedEnergy')

        if (neprijatelj.blokiranje) {
            steta *= 0.4;
            neprijatelj.blokiranje = false;
        }
        neprijatelj.smanjiZivot(steta);
    },
    odbrana(tipOdbrane) {
        if (tipOdbrane == 'izbegavanje' && this.energija >= 70) {
            this.energija -= 70;
            this.izbegavanje = true;
        } else if (tipOdbrane == 'none(default)') {
            console.log("Nema izabranog udarca.");
        }
        else {
            console.log('Nepoznata odbrana ili nema dovoljno energije!');
        }

        handleReservedEnergy(this, tipOdbrane, 'odbrana', 'supermanReservedEnergy')

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

function performAction() {
    console.log("performAction is called");
    document.getElementById('attack').addEventListener('click', function(){
        const batmanAtk = document.getElementById('batmanAttack').value;
        const batmanDef = document.getElementById('batmanDefense').value;
        const supermanAtk = document.getElementById('supermanAttack').value;
        const supermanDef = document.getElementById('supermanDefense').value;

        if (trenutniIgrac === 'batman') {
            if (batmanAtk !== 'none(default)') {
                batman.napadni(superman, batmanAtk);
            } else if (batmanDef !== 'none(default)') {
                batman.odbrana(batmanDef)
            }
            trenutniIgrac = 'superman';
        } else {
            if (supermanAtk !== 'none(default)') {
                superman.napadni(batman, supermanAtk);
            } else if (supermanDef !== 'none(default)') {
                superman.odbrana(supermanDef)
            }
            trenutniIgrac = 'batman';
        }
        updateLife('batman', batman.zivot);
        updateLife('superman', superman.zivot);
        updateEnergy('batman', batman.energija);
        updateEnergy('superman', superman.energija);
        document.getElementById('currentPlayerDisplay').innerText = `${trenutniIgrac} prvi napada`;
    })
    
}
performAction()

function handleReservedEnergy(player, akcija, tip, elementId) {
    let energyRequired = 0;
    if (tip === 'napad') {
        if (akcija === 'surikeni') {
            energyRequired = 20;
        } else if (akcija === 'super udarac') {
            energyRequired = 30;
        } else if (akcija === 'pesnica' || akcija === 'udarac nogom' || akcija === 'laser' || akcija === 'ledeni dah' || akcija === 'none(default)') {
            energyRequired = 0;
        }
    } else if (tip === 'odbrana') {
        if (akcija === 'blok') {
            energyRequired = 40;
        } else if (akcija === 'lecenje') {
            energyRequired = 50;
        } else if (akcija === 'izbegavanje') {
            energyRequired = 70;
        } else if ( akcija === 'none(default)') {
            energyRequired = 0;
        }
    }

    if (energyRequired > 0) {
        player.rezervisanaEnergija += energyRequired;
    } else {
        player.energija += player.rezervisanaEnergija;
        player.rezervisanaEnergija = 0
    }
    document.getElementById(elementId).innerText = 'Rezervisana Energija:' + player.rezervisanaEnergija;
}
