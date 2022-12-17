export class UserInfo {
    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
    }

    pageon() { //какой путь на сайте
        return window.location.pathname;
    }

    referrer() { //откуда пришел подльзователь какой сайт
        return document.referrer
    }

    previousSite() { // сколько пользователь прошел сайтов прежде чем попать на страницу
        return history.length
    }

    //вся информация о браузере пользователя
    browserInfo(){return navigator}

    dataCookies(){return decodeURIComponent(document.cookie.split(";"))}

    dataStorege(){return localStorage}

    async position() {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            heading: pos.coords.heading,
            timestamp: pos.coords.timestamp,
            speed: pos.coords.speed,
        }
    }

    async battery() {
        return await navigator.getBattery();
    }

    async ip() {
        let res = await(await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json();
        return data;
    }
}