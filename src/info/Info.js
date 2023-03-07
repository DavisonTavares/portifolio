import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

//export let colors = ["rgb(248, 248, 255)", "rgb(174, 174, 255)"];
export let colors = ["rgb(248, 248, 255)", "rgb(248, 248, 255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Davison",
    lastName: "Tavares",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Brazilian'
        },
        {
            emoji: "💼",
            text: "computer engineering student"
        },
        {
            emoji: "📧",
            text: "davisontavares0@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/davison.tavares",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DavisonTavares",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://br.linkedin.com/in/davison-tavares",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Olá, me chamo Davison. Nasci no interior da Paraíba e atualmente estou cursando Engenharia de Computação na Universidade Federal da Paraíba - UFPB. Apaixonado por desafios e novas tecnologias acabei embarcando nas Stacks web/mobile e a cada dia gostando ainda mais. Além de uns bons desafios gosto muito de bater uma bolinha e assitir um bom filme",
    skills:
        {
            proficientWith: ['javascript', 'react', 'bootstrap', 'html5', 'css', 'figma', 'C', 'C++', 'react native', 'ionic', 'axios', 'insomnia', 'jwt'],
            exposedTo: ['nodejs', 'python',  'git', 'github', 'angular', 'typescript', 'prisma', 'koa', 'express', 'mongodb', 'firebase', 'planetscale']
        }
    ,
    hobbies: [
        {
            label: 'futebol',
        },
        {
            label: 'DIY',
        },
        {
            label: 'movies',
        },
        {
            label: 'violão',
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Sou Peladeiro",
            descricao: "Aplicativo foi desenvolvido utilizando o Framework Ionic, afim de ser um organizador prático para gerenciar partidas de futebol amador (com o sistema também é possivel sortear times de otras modalidades já que conta com um modificador de jogadores por equipe) com o app é possivel sortear equipes, realizar rancking por assistências e gols, e acompanhar a partida já que o mesmo conta com um cronômetro.",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Gerenciador de Caixa",
            descricao: "Aplicativo foi desenvolvido utilizando o Framework Ionic, o mesmo consiste em uma aplicação para gerenciar o estoque de produto e o valor total das vendas já consolidadas. O projeto é um CRUD utilizando o firebase onde na aplicação pode-se adicionar novos produtos, realizar vendas e deletar vendas ou produtos.",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Bolão World Cup",
            descricao: "Aplicação mobile desenvolvida utilizando o React Native e Expo, a app foi desenvolvido para jogar um bolão da copa do mundo, o sistema conta com um Back-End utilizando o NodeJS, koa, e o planetscale como o bd, além do prisma para facilitar a comunicação com o mesmo. O app também conta com o sistema de autenticação utilizando token, para login automático. para a comunicação com a api foi utilizado o axios",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Bolão World Cup (web)",
            descricao: "Aplicação web desenvolvida utilizando o React, a app foi desenvolvido para jogar um bolão da copa do mundo, o sistema conta com um Back-End utilizando o NodeJS, koa, e o planetscale como o bd, além do prisma para facilitar a comunicação com o mesmo. O app também conta com o sistema de autenticação utilizando token, para login automático. para a comunicação com a api foi utilizado o axios",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
    ]
}
