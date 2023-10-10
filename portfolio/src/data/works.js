const projects = {
    projectsItems: [
        {
            key: 1,
            type: "text",
            title: "Introduction",
            size: 5,
            desc: "Projet : Lowatt-mandate"
        },
        {
            key: 2,
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
            key: 3,
            type: "diapo",
            title: "Présentation Lowatt",
            image: "/images/diapos/presentation_Lowatt_mandate.jpg"
        },
        {
            key: 4,
            type: "diapo",
            title: "La stack backend",
            image: "/images/diapos/stack_back.png"
        },
        {
            key: 5,
            type: "diapo",
            title: "La stack frontent",
            image: "/images/diapos/stack_front.png"
        },
        {
            key: 6,
            type: "diapo",
            title: "Use case 1",
            image: "/images/diapos/usecase1.png"
        },
        {
            key: 7,
            type: "diapo",
            title: "Use case 2",
            image: "/images/diapos/usecase2.png"
        },
        {
            key: 8,
            type: "diapo",
            title: "MLD",
            image: "/images/diapos/MLD.png"
        },
        {
            key: 9,
            type: "text",
            title: "Réalisation : les tests",
            size: 5,
            desc: "Les test unitaires"
        },
        {
            key: 10,
            type: "diapo",
            title: "Réalisation : les tests #1",
            image: "/images/diapos/test_1.png"
        },
        {
            key: 11,
            type: "diapo",
            title: "Réalisation : les tests #2",
            image: "/images/diapos/test_2.png"
        },
        {
            key: 12,
            type: "diapo",
            title: "Réalisation : les tests #3",
            image: "/images/diapos/testsPassed.png"
        },
        {
            key: 13,
            type: "text",
            title: "Réalisation : Détail client",
            size: 4,
            desc: "Réalisation : Affichage détail d'un client"
        },
        {
            key: 14,
            type: "diapo",
            title: "Réalisation : Détail client #1",
            image: "/images/diapos/schema_detail_client.png"
        },
        {
            key: 15,
            type: "diapo",
            title: "Réalisation : Requete GraphQL",
            image: "/images/diapos/requete.png"
        },
        {
            key: 16,
            type: "diapo",
            title: "Réalisation : Schéma de la requête",
            image: "/images/diapos/SchemasGQL.png"
        },
        {
            key: 17,
            type: "diapo",
            title: "Réalisation : Code GQL",
            image: "/images/diapos/code.png"
        },
        {
            key: 18,
            type: "diapo",
            title: "Réalisation : front",
            image: "/images/diapos/codeReact.png"
        },
        {
            key: 101,
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
            key: 102,
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
            key: 103,
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
        }
    ],
    getProjects: () => projects.projectsItems
};

export default projects;
