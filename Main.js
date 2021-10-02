let Omega = document.getElementById("Omega");
let counter = document.getElementById("counter");
let autoclicker = document.getElementById("autoclicker");
let autoclicker2 = document.getElementById("autoclicker2");
let autoclicker3 = document.getElementById("autoclicker3");
let autoclicker4 = document.getElementById("autoclicker4");
let autoclicker5 = document.getElementById("autoclicker5");
let autoclicker6 = document.getElementById("autoclicker6");
let autoclicker7 = document.getElementById("autoclicker7");
let autoclicker8 = document.getElementById("autoclicker8");

let LULs = 0;
let OMEGALUL = new Audio(`sounds/OMEGALUL.mp3`);
let ZULUL = new Audio(`sounds/ZULUL.mp3`);
let TriHard = new Audio(`sounds/TriHard.mp3`);
let pepeJ = new Audio(`sounds/pepeJAM.mp3`);
let KEKW = new Audio(`sounds/KEKW.mp3`);
let herE = new Audio(`sounds/Murloc.mp3`);
let agrE = new Audio(`sounds/Plyn.mp3`);
let zaludE = new Audio(`sounds/Coze.mp3`);
let forsenScoots = new Audio(`sounds/forsenScoots.mp3`);
let forsenCD = new Audio(`sounds/forsenCD.mp3`);

const change = () => {
    LULs++;
    counter.innerText = "LULs : " + LULs;
    omegaLul.apply();
    Zulul.apply();
    triHard.apply();
    pepeJAM.apply();
    kek.apply();
    Her.apply();
    Agr.apply();
    zalud.apply();
    ForsenScoots.apply();
    forsenCd.apply();
}

Omega.onclick = change;

const omegaLul = () => {
    if (LULs >= 50) {
        Omega.src = "img/OMEGALUL.png";
        counter.innerText = "OMEGALULs : " + LULs;
    }
    if (LULs == 50) {
        OMEGALUL.volume = 0.1;
        OMEGALUL.play();
    }
    if (LULs >= 60 && LULs <= 63){
        Omega.src = "img/flygunSUCK.gif";
    }
}

const Zulul = () => {
    if (LULs >= 75) {
        Omega.src = "img/ZULUL.png";
        counter.innerText = "ZULULs : " + LULs;
    }
    if (LULs == 75) {
        ZULUL.volume = 0.1;
        ZULUL.play();
        OMEGALUL.volume = 0;
    }
}

const triHard = () => {
    if (LULs >= 100) {
        Omega.src = "img/TriHard.png";
        counter.innerText = "TriHards : " + LULs;
    }
    if (LULs == 100) {
        TriHard.volume = 0.1;
        TriHard.play();
        ZULUL.volume = 0;
    }
}

const pepeJAM = () => {
    if (LULs >= 125) {
        Omega.src = "img/pepeJAM.png";
        counter.innerText = "JAMs : " + LULs;
    }
    if (LULs == 125) {
        pepeJ.volume = 0.1;
        pepeJ.play();
        TriHard.volume = 0;
    }
}

const kek = () => {
    if (LULs >= 150) {
        Omega.src = "img/KEKW.png";
        counter.innerText = "Paelleras : " + LULs;
    }
    if (LULs == 150) {
        KEKW.volume = 0.1;
        KEKW.play();
        pepeJ.volume = 0;
    }
}

const Her = () => {
    if (LULs >= 200) {
        Omega.src = "img/herE.png";
        counter.innerText = "Knights : " + LULs;

    }
    if (LULs == 200) {
        herE.volume = 0.1;
        herE.play();
        KEKW.volume = 0;

    }
}

const Agr = () => {
    if (LULs >= 250) {
        Omega.src = "img/agrE.png";
        counter.innerText = "bajs : " + LULs;
    }
    if (LULs == 250) {
        agrE.volume = 0.1;
        agrE.play();
        herE.volume = 0;
    }
}

const zalud = () => {
    if (LULs >= 300) {
        Omega.src = "img/zaludE.png";
        counter.innerText = "reactions : " + LULs;
    }
    if (LULs == 300) {
        zaludE.volume = 0.1;
        zaludE.play();
        agrE.volume = 0;
    }
}

const ForsenScoots = () => {
    if (LULs >= 350) {
        Omega.src = "img/forsenScoots.png";
        counter.innerText = "IQ : " + LULs;
    }
    if (LULs == 350) {
        forsenScoots.volume = 0.1;
        forsenScoots.play();
        zaludE.volume = 0;
    }
}

const forsenCd = () => {
    if (LULs >= 400) {
        Omega.src = "img/forsenCD.png";
        counter.innerText = "shungites : " + LULs;
    }
    if (LULs == 400) {
        forsenCD.volume = 0.1;
        forsenCD.play();
        forsenScoots.volume = 0;
    }
}

let Interval;

const autoclickerH = () => {
    if (LULs >= 200) {
        autoclicker.style.display = "none";
        Interval = setInterval(() => {
            change();
        }, 1000);
    }
}

autoclicker.onclick = autoclickerH;

const autoclickerA = () => {
    if (LULs >= 250) {
        autoclicker2.style.display = "none";
        Interval = setInterval(() => {
            change();
        }, 1000);
    }
}

autoclicker2.onclick = autoclickerA;

const autoclickerZ = () => {
    if (LULs >= 300) {
        autoclicker3.style.display = "none";
        Interval = setInterval(() => {
            change();
        }, 500);
    }
}

autoclicker3.onclick = autoclickerZ;

const autoclickerSc = () => {
    if (LULs >= 350) {
        autoclicker4.style.display = "none";
        Interval = setInterval(() => {
            change();
        }, 500);
    }
}

autoclicker4.onclick = autoclickerSc;

const ZululWarriors = () => {
    if (LULs >= 75) {
        autoclicker5.style.display = "none";
        LULs += 10;
    }
}

autoclicker5.onclick = ZululWarriors;

const Yoink = () => {
    if (LULs >= 100) {
        autoclicker6.style.display = "none";
        LULs -= 10;
    }
};

autoclicker6.onclick = Yoink;

const autoclickerJ = () => {
    if (LULs >= 125) {
        autoclicker7.style.display = "none";
        LULs += 20;
    }
}

autoclicker7.onclick = autoclickerJ;

const autoclickerKek = () => {
    if (LULs >= 150) {
        autoclicker8.style.display = "none";
        LULs += 0 //KEKW
    }
}

autoclicker8.onclick = autoclickerKek;