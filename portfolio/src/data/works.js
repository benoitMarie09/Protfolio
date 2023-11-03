const projects = {
    projectsItems: [
        {
            type: "text",
            title: "Introduction",
            size: 5,
            desc: "Projet : Lowatt-mandate"
        },
        {
            type: "diapo",
            title: "Présentation Lowatt",
            image: "/images/diapos/lowatt.png"
        },
        {
            type: "diapo",
            title: "Contrat",
            image: "/images/diapos/contrat.png"
        },
        {
            type: "text",
            title: "Partie 1",
            size: 5,
            desc: "Le cahier des charges"
        },
        {
            type: "diapo",
            title: "Etude de l’existant",
            image: "/images/diapos/paperasse.jpeg"
        },
        {
            type: "diapo",
            title: "Le besoin",
            image: "/images/diapos/besoin.png"
        },
        {
            type: "diapo",
            title: "La stack backend",
            image: "/images/diapos/stack_back.png"
        },
        {
            type: "diapo",
            title: "La stack frontent",
            image: "/images/diapos/stack_front.png"
        },
        {
            type: "diapo",
            title: "Le developpement",
            image: "/images/diapos/developpement.png"
        },
        {
            type: "diapo",
            title: "Use case",
            image: "/images/diapos/usecase1.png"
        },
        {
            type: "diapo",
            title: "MLD",
            image: "/images/diapos/MLD.png"
        },
        {
            type: "text",
            title: "Partie 2",
            size: 5,
            desc: "Les test unitaires"
        },
        {
            type: "diapo",
            title: "test fixture",
            image: "/images/diapos/fixture.png"
        },
        {
            type: "diapo",
            title: "test mutation mandat",
            image: "/images/diapos/codeTest.png"
        },
        {
            type: "diapo",
            title: "Console",
            image: "/images/diapos/testsPassed.png"
        },
        {
            type: "diapo",
            title: "Conclusion sur les tests",
            image: "/images/diapos/conclusion_test.png"
        },
        {
            type: "text",
            title: "Partie 3",
            size: 4,
            desc: "Réalisation : Affichage détail d'un client"
        },
        {
            type: "diapo",
            title: "Réalisation : Détail client #1",
            image: "/images/diapos/schema_detail_client.png"
        },
        {
            type: "diapo",
            title: "Réalisation : Requete GraphQL",
            image: "/images/diapos/requete.png"
        },
        {
            type: "diapo",
            title: "Réalisation : Schéma de la requête",
            image: "/images/diapos/SchemasGQL.png"
        },
        {
            type: "diapo",
            title: "Réalisation : Code GQL",
            image: "/images/diapos/code.png"
        },
        {
            type: "diapo",
            title: "Réalisation : front",
            image: "/images/diapos/codeReact.png"
        },
        {
            type: "project",
            details: {
                name: "Lowatt-Mandates",
                desc: "Application de gestion de mandats pour les distributeurs d'énergie",
                technos: ["FastAPI", "GraphQL", "React"],
                roles: ["front-end", "back-end"],
                year: 2023,
                url: "",
                git: ""
            },
            images: [
                "/images/lowatt/img_1.png",
                "/images/lowatt/img_2.png",
                "/images/lowatt/img_3.png",
                "/images/lowatt/img_4.png",
                "/images/lowatt/img_5.png",
                "/images/lowatt/img_6.png"
            ]
        },
        {
            type: "text",
            title: "Partie 4",
            size: 4,
            desc: "Mes autres projets"
        },
        {
            type: "project",
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
            type: "project",
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
            type: "project",
            details: {
                name: "Portfolio C. Lamy",
                desc: "Portfolio pour l'artiste peintre illustratrice Coline Lamy, avec galeries, diaporamas, et une partie admin.",
                technos: ["Django"],
                roles: ["front-end", "back-end"],
                year: 2022,
                url: "",
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
            type: "text",
            title: "FIN",
            size: 6,
            desc: "MERCI"
        },
    ],
    getProjects: () => projects.projectsItems
};

export default projects;
