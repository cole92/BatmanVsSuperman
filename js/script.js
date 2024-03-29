const batman = {
    zivot: 100,
    energija: 0,
    oruzje: ["Pesnica(10 dmg)", "Udarac nogom(15 dmg)", "Surikeni(20 energije)(30 dmg)", "none(default)"],
    odbrane: ["Blok(40 energije)", "Lecenje(50 energije)", "none(default)"],
    blokiranje: false,
    smanjiZivot(x) {
        this.zivot -= x;
        if (this.zivot <= 0) {
            this.zivot = 0;
            const poruka = this === batman ? 'Batman je mrtav, Superman je pobedio!' : 'Superman je mrtav, Batman je pobedio!';
            document.getElementById('krajIgre').innerText = poruka;
            document.getElementById("attack").disabled = true;
            document.getElementById("gameStart").disabled = true;
        }
    },
    // Metode za napad i odbranu.  
    napadni(neprijatelj, udarac, checkOnly) {
        let steta = 0;
        let napadUspesan = true;
    
        if (udarac == 'Pesnica(10 dmg)') {
            steta = 10;
        } else if (udarac == 'Udarac nogom(15 dmg)') {
            steta = 15;
        } else if (udarac == 'Surikeni(20 energije)(30 dmg)') {
            if (this.energija >= 20) {
                steta = 30;
            } else {
                console.log('Nedovoljno energije za surikene!');
                napadUspesan = false;
            }
        } else if (udarac == 'none(default)') {
            console.log('Nema izabranog udarca!');
            napadUspesan = false;
        }
    
        if (napadUspesan && !checkOnly) {
            if (udarac == 'Surikeni(20 energije)(30 dmg)') {
                this.energija -= 20;
            }
            if (neprijatelj.blokiranje) {
                steta = 0;
                neprijatelj.blokiranje = false;
            }
            this.povecajEnergijuZaUdarac(udarac);
            neprijatelj.smanjiZivot(steta);
        }
        return napadUspesan;
    },
    
    odbrana(tipOdbrane, checkOnly) {
        let odbranaUspesna = true;
    
        if (tipOdbrane == 'Blok(40 energije)') {
            if (this.energija >= 40) {
                if (!checkOnly) {
                    this.energija -= 40;
                    this.blokiranje = true;
                }
            } else {
                console.log('Nedovoljno energije za blok!');
                odbranaUspesna = false;
            }
        } else if (tipOdbrane == 'Lecenje(50 energije)') {
            if (this.energija >= 50) {
                if (!checkOnly) {
                    this.energija -= 50;
                    this.zivot += 50;
                    if (this.zivot > 100) {
                        this.zivot = 100;
                    }
                }
            } else {
                console.log('Nedovoljno energije za lecenje!');
                odbranaUspesna = false;
            }
        } else if (tipOdbrane == 'none(default)') {
            console.log('Nema izabranog tipa odbrane.');
            odbranaUspesna = false;
        }
        return odbranaUspesna;
    },
    
    povecajEnergiju(x) {
        this.energija += x;
        if (this.energija >= 100) {
            this.energija = 100;
        }
    },
    
    povecajEnergijuZaUdarac(udarac) {
        if (udarac == 'Pesnica(10 dmg)' || udarac == 'Udarac nogom(15 dmg)') {
            this.povecajEnergiju(30)
        }
    }
}

const superman = {
    zivot: 100,
    energija: 0,
    oruzje: ["Laser(15 dmg)", "Ledeni dah(25 dmg)", "Super udarac(30 energije)(40 dmg)", "none(default)"],
    odbrane: ["Izbegavanje(70 energije)", "none(default)"],
    izbegavanje: false,
    smanjiZivot(x) {
        this.zivot -= x;
        if (this.zivot <= 0) {
            this.zivot = 0;
            const poruka = this === batman ? 'Batman je mrtav, Superman je pobedio!' : 'Superman je mrtav, Batman je pobedio!';
            document.getElementById('krajIgre').innerText = poruka;
            document.getElementById("attack").disabled = true;
            document.getElementById("gameStart").disabled = true;
        }
    },
    napadni(neprijatelj, udarac, checkOnly) {
        let steta = 0;
        let napadUspesan = true;
    
        if (udarac == 'Laser(15 dmg)') {
            steta = 15;
        } else if (udarac == 'Ledeni dah(25 dmg)') {
            steta = 25;
        } else if (udarac == 'Super udarac(30 energije)(40 dmg)') {
            if (this.energija >= 30) {
                steta = 40;
            } else {
                console.log('Nedovoljno energije za super udarac!');
                napadUspesan = false;
            }
        } else if (udarac == 'none(default)') {
            console.log("Nema izabranog udarca.");
            napadUspesan = false;
        }
    
        if (napadUspesan && !checkOnly) {
            if (udarac == 'Super udarac(30 energije)(40 dmg)') {
                this.energija -= 30;
            }
            if (neprijatelj.blokiranje) {
                steta *= 0.4;
                neprijatelj.blokiranje = false;
            }
            this.povecajEnergijuZaUdarac(udarac);
            neprijatelj.smanjiZivot(steta);
        }
        return napadUspesan;
    },
    
    odbrana(tipOdbrane, checkOnly) {
        let odbranaUspesna = true;
    
        if (tipOdbrane == 'Izbegavanje(70 energije)') {
            if (this.energija >= 70) {
                if (!checkOnly) {
                    this.energija -= 70;
                    this.izbegavanje = true;
                }
            } else {
                console.log('Nedovoljno energije za izbegavanje!');
                odbranaUspesna = false;
            }
        } else if (tipOdbrane == 'none(default)') {
            console.log("Nema izabranog tipa odbrane.");
            odbranaUspesna = false;
        }
        return odbranaUspesna;
    },
    
    povecajEnergiju(x) {
        this.energija += x;
        if (this.energija >= 100) {
            this.energija = 100;
        }
    },
    
    povecajEnergijuZaUdarac(udarac) {
        if (udarac == 'Laser(15 dmg)' || udarac == 'Ledeni dah(25 dmg)') {
            this.povecajEnergiju(30)
        }
    }
}
// Objekat za potrebnu energiju
const potrebnaEnegija = {
    napad: {
        'Pesnica(10 dmg)' : 0,
        'Udarac nogom(15 dmg)': 0,
        'Surikeni(20 energije)(30 dmg)' : 20,
        'Laser(15 dmg)' : 0,
        'Ledeni dah(25 dmg)': 0,
        'Super udarac(30 energije)(40 dmg)': 30,
        'none(default)' : 0
    },
    odbrana: {
        'Blok(40 energije)' : 40,
        'Lecenje(50 energije)': 50,
        'Izbegavanje(70 energije)': 70,
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
        document.getElementById('currentPlayerDisplay').innerText = `${trenutniIgrac} prvi napada`
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
        document.getElementById(elementId).innerText = "Zivot:" + " " + value;
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

function izvrsiAkcijuZaBatman(checkOnly) {
    let napadUspesan = true;
    const odabraniNapad = document.getElementById('batmanAttack').value;
    const odabranaOdbrana = document.getElementById('batmanDefense').value;

    if (odabraniNapad !== 'none(default)') {
        napadUspesan = batman.napadni(superman, odabraniNapad, checkOnly);
    } else if (odabranaOdbrana !== 'none(default)') {
        napadUspesan = batman.odbrana(odabranaOdbrana, checkOnly);
    }
    return napadUspesan;
}

function izvrsiAkcijuZaSuperman(checkOnly) {
    let napadUspesan = true;
    const odabraniNapad = document.getElementById('supermanAttack').value;
    const odabranaOdbrana = document.getElementById('supermanDefense').value;

    if (odabraniNapad !== 'none(default)') {
        napadUspesan = superman.napadni(batman, odabraniNapad, checkOnly);
    } else if (odabranaOdbrana !== 'none(default)') {
        napadUspesan = superman.odbrana(odabranaOdbrana, checkOnly);
    }
    return napadUspesan;
}

function performAction() {
    document.getElementById('attack').addEventListener('click', function () {
        const mozeBatman = izvrsiAkcijuZaBatman(true);
        const mozeSuperman = izvrsiAkcijuZaSuperman(true);

        if (mozeBatman && mozeSuperman) {
            izvrsiAkcijuZaBatman(false);
            setTimeout(() => {                      //  Mozda malo srediti timer.
                izvrsiAkcijuZaSuperman(false);
                nakonAkcije();
            }, 1000);
        } else {
            alert('Jedan od igrača ne može da izvede akciju!');
        }
    })
}

function nakonAkcije() {
    trenutniIgrac = trenutniIgrac === 'batman' ? 'superman' : 'batman';
    updateLife('batman', batman.zivot);
    updateLife('superman', superman.zivot);
    updateEnergy('batman', batman.energija);
    updateEnergy('superman', superman.energija);
    document.getElementById('currentPlayerDisplay').innerText = `${trenutniIgrac} prvi napada`;
}

function nakonAkcije() {
    trenutniIgrac = trenutniIgrac === 'batman' ? 'superman' : 'batman';
    updateLife('batman', batman.zivot);
    updateLife('superman', superman.zivot);
    updateEnergy('batman', batman.energija);
    updateEnergy('superman', superman.energija);
    document.getElementById('currentPlayerDisplay').innerText = `${trenutniIgrac} prvi napada`;
}
performAction()
// Funkcija za restart
function restartIgre() {
    batman.zivot = 100;
    batman.energija = 0;
    batman.blokiranje = false;

    superman.zivot = 100;
    superman.energija = 0;
    superman.blokiranje = false;

    trenutniIgrac = null;

    updateLife('batman', batman.zivot);
    updateLife('superman', superman.zivot);
    updateEnergy('batman', batman.energija);
    updateEnergy('superman', superman.energija);
    document.getElementById('currentPlayerDisplay').innerText = 'Pritisni START za pocetak igre';
    document.getElementById('krajIgre').innerText = ''

    document.getElementById('batmanAttack').selectedIndex = 0;
    document.getElementById('batmanDefense').selectedIndex = 0;
    document.getElementById('supermanAttack').selectedIndex = 0;
    document.getElementById('supermanDefense').selectedIndex = 0;

    document.getElementById('gameStart').disabled = false;
    document.getElementById('attack').disabled = true;
}
document.getElementById('restart').addEventListener('click', restartIgre);