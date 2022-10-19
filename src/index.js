"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_gyoztesgolszam, _Football_vesztesgolszam, _Calvinball_winner;
class Football {
    constructor(winner, gyoztesgolszam, vesztesgolszam, date) {
        _Football_gyoztesgolszam.set(this, void 0);
        _Football_vesztesgolszam.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_gyoztesgolszam, gyoztesgolszam, "f");
        __classPrivateFieldSet(this, _Football_vesztesgolszam, vesztesgolszam, "f");
        this.date = date;
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_gyoztesgolszam, "f") + " - " + __classPrivateFieldGet(this, _Football_vesztesgolszam, "f");
    }
}
_Football_gyoztesgolszam = new WeakMap(), _Football_vesztesgolszam = new WeakMap();
class Marathon {
    constructor(futottido, winner, date) {
        this.winner = winner;
        this.futottido = futottido;
        this.date = date;
    }
    result() {
        return "Marathon: " + (Math.floor(this.futottido / 60)) + " min " + (Math.floor(this.futottido % 60)) + " s";
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, void 0);
        this.rnd = Math.random() * 90 + 10;
        __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        this.date = date;
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    set winner(winner) {
        if (winner != "Calvin") {
            __classPrivateFieldSet(this, _Calvinball_winner, "Calvin", "f");
        }
        else {
            __classPrivateFieldSet(this, _Calvinball_winner, "Hobbes", "f");
        }
    }
    result() {
        return "Calvinball: " + Math.floor(this.rnd) + " points";
    }
}
_Calvinball_winner = new WeakMap();
let Results = [
    new Football("Barcelona", 6, 3, new Date("2022-10-19")),
    new Football("Arsenal", 3, 1, new Date("2022-10-10")),
    new Marathon(197, "Futó Johhny", new Date("2022-09-09")),
    new Marathon(215, "Runner Béla", new Date("2022-08-08")),
    new Calvinball("Calvin", new Date("2022-07-07")),
    new Calvinball("Hobbes", new Date("2022-06-06"))
];
for (let eredmeny of Results) {
    console.log(eredmeny.result());
}
