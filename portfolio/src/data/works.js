const projects = {
    projectsItems: [
        {
            key: 1,
            details: {
                name: "Portfolio C. Lamy",
                desc: "Portfolio pour l'artiste peintre illustratrice Coline Lamy, avec galeries, diaporamas, et une partie admin.",
                technos: ["Django"],
                roles: ["front-end", "back-end"],
                year: 2022,
                url: "https://colinelamy.fr",
                git: ""
            },
            images: [
                "/images/site_coline/img_1.png",
                "/images/site_coline/img_2.png",
                "/images/site_coline/img_3.png",
                "/images/site_coline/img_4.png",
                "/images/site_coline/img_5.png",
                "/images/site_coline/img_6.png"
            ]
        },
        {
            key: 2,
            details: {
                name: "D&D 5 API",
                desc: "API restfull du jeu de rôle Donjon & Dragon avec l'ensemble des règles du jeu. Classes ,races, équipements, sort, monstres et bien d'autres.",
                technos: ["Django", "Django-Rest Framework"],
                roles: ["front-end", "back-end"],
                year: 2022,
                url: "https://bouduben31.pythonanywhere.com",
                git: "https://github.com/benoitMarie09/DD5APIv2"
            },
            images: [
                "/images/DD5API/img_1.png",
                "/images/DD5API/img_2.png",
                "/images/DD5API/img_3.png",
                "/images/DD5API/img_4.png",
                "/images/DD5API/img_5.png",
                "/images/DD5API/img_6.png"
            ]
        },
        {
            key: 3,
            details: {
                name: "Liste de naissance",
                desc: "Liste de naissance créée pour mon premier enfant, les utilisateurs peuvent réserver (partiellement ou totalement) des cadeaux à partir d'une liste créée par les futurs parents.",
                technos: ["Django", "crispyform", "Boostrap"],
                roles: ["front-end", "back-end"],
                year: 2023,
                url: "https://benoitmarie.pythonanywhere.com",
                git: "https://github.com/benoitMarie09/ListeNaissance"
            },
            images: [
                "/images/ListeN/img_1.png",
                "/images/ListeN/img_2.png",
                "/images/ListeN/img_3.png",
                "/images/ListeN/img_4.png",
                "/images/ListeN/img_5.png",
                "/images/ListeN/img_6.png"
            ]
        },
        {
            key: 4,
            details: {
                name: "ToneSide(en construction)",
                desc: "Portfolio pour le l'artiste compositeur ToneSide.",
                technos: ["React"],
                roles: ["front-end"],
                year: 2022,
                url: "https://toneside.vercel.app/",
                git: "https://github.com/benoitMarie09/toneside"
            },
            images: [
                "/images/toneside/img_1.png",
                "/images/toneside/img_2.png",
                "/images/toneside/img_3.png",
                "/images/toneside/img_4.png",
                "/images/toneside/img_5.png",
                "/images/toneside/img_6.png"
            ]
        }
    ],
    getProjects: () => projects.projectsItems
};

export default projects;
