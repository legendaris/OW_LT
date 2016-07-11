(function(ng) {

    'use strict';
    ng.module('lok_web').controller('HomepageController', HomepageController);
    
    function HomepageController() {
        var ctrl = this;
        
        ctrl.posts = [
            {
                imgSrc: "../images/pfgg.png",
                link: "https://pf.gg/",
                title: "Party finderis",
                subtitle: "Puslapis skirtas rasti grupę ar trūkstamą narį grupei. Pritaikyta visoms platformoms ir regionams.",
                tags: ["community"],
                order: 1,
            },
            {
                imgSrc: "https://pmcvariety.files.wordpress.com/2015/09/facebook_2015_logo.png?w=640&h=360&crop=1",
                link: "https://www.facebook.com/overwatchlietuva1/",
                title: "Overwatch Lietuva",
                subtitle: "Overwatch lietuvių facebook puslapis",
                tags: ["community"],
                order: 2,
            },
            {
                imgSrc: "https://i.ytimg.com/vi/9kGPCNYx4aA/maxresdefault.jpg",
                link: "https://www.youtube.com/c/overwatchcentral/videos",
                title: "Overwatch Central",
                subtitle: "Youtube bendruomenė, kurianti guidus ir kitokį contentą anglų kalba. Vienas didžiausių youtube overwatch kanalų.",
                tags: ["community"],
                order: 3,
            },

        ];
    };    
    
})(angular);