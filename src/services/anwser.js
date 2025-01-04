export function good(choix, index) {
    document.getElementById('choix' + choix + index).style.background = "green";
}
export function goodAll(index) {
    document.getElementById('choixA' + index).style.background = "green";
    document.getElementById('choixB' + index).style.background = "green";
    document.getElementById('choixC' + index).style.background = "green";
    document.getElementById('choixD' + index).style.background = "green";
}

export function bad(choix, answer, index) {
    document.getElementById('choix' + answer + index).style.background = "green";
    document.getElementById('choix' + choix + index).style.background = "red";
}

export function reset(choix, answer, index) {
    document.getElementById('choix' + answer + index).style.background = "darkblue";
    document.getElementById(choix + index).checked = false;
    document.getElementById('choix' + choix + index).style.background = "darkblue";
}

export function intrusGood(id) {
    document.getElementById(id).style.background = "green";
}

export function intrusBad(id) {

    document.getElementById(id).style.background = "red";
}

export function resetIntrus(nbr) {

    for (let i = 0; i < nbr; i++) {
        document.getElementById("choix" + i).style.background = "white";
    }
}

export function disableNext() {
    document.getElementById("nextIntrus").style.display = "none";
}

export function answerTheme(answer, index) {
    document.getElementById('choix' + answer + index).style.background = "green";
}

export function resetTheme(answer, index) {
    document.getElementById('choix' + answer + index).style.background = "rgba(255, 255, 255, 0.849)";
}