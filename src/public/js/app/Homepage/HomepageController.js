(function(ng) {

    'use strict';
    ng.module('lok_web').controller('HomepageController', HomepageController);
    
    function HomepageController() {
        var ctrl = this;
        
        ctrl.posts = [
            {
                imgSrc: "https://i.ytimg.com/vi/mnSQ9Ime-9E/maxresdefault.jpg",
                link: "http://playoverwatch.com/",
                title: "PLAY OVERWATCH",
                subtitle: "Oficialus Overwatch puslapis. Vieta kur pirmiausia patalpinami naujienų pranešimai. Informacija apie herojus, žemėlapius, game-modes, žaidėjų forumas anglų kalba.",
                order: 1,
            },
            {
                imgSrc: "https://pmcvariety.files.wordpress.com/2015/09/facebook_2015_logo.png?w=640&h=360&crop=1",
                link: "https://www.facebook.com/overwatchlietuva1/",
                title: "Overwatch Lietuva",
                subtitle: "Overwatch lietuvių facebook puslapis. Kviečiame prisijungti prie diskusijų.",
                tags: ["community"],
                order: 2,
            },
            {
                imgSrc: "../images/twitch.jpg",
                link: "https://www.twitch.tv/directory/game/Overwatch",
                title: "STREAMERS",
                subtitle: "Twitch.tv Overwatch streamai. Jei šiuo metu negalime žaisti patys, visada yra galimybė apsilankyti adresu twitch.tv ir mėgautis translacijomis.",
                tags: ["community"],
                order: 3,
            },
            {
                imgSrc: "../images/oc.jpg",
                link: "https://www.youtube.com/c/overwatchcentral/videos",
                title: "Overwatch Central",
                subtitle: "Youtube bendruomenė, kurianti guidus ir kitokį contentą anglų kalba. Vienas didžiausių youtube overwatch kanalų.",
                tags: ["community"],
                order: 4,
            },
        ];
    };    
    
})(angular);