const batman = {
    zivot: 100,
    energija: 0,
    oruzje: ["pesnica", "udarac nogom", "surikeni"],
    odbrane: ["blok", "lecenje"],
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
        } else {
            alert ('Nepoznat udarac ili nedovoljno energije za surikene!')
            return;
        }
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
    oruzje: ["laser", "ledeni dah", "super udarac"],
    odbrane: ["Izbegavanje"],
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
        } else {
            alert ('Nepoznat udarac ili nedovoljno energije za super udarac!')
            return;
        }
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