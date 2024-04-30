import { Project } from "../interfaces";
import { css, expo, expressjs, html, javaScript, mongodb, nodejs, react, reactNative } from "./skills";

const projects: Project[] = [
    {
        id: 0,
        title: "Bloom Habit Tracker",
        category: "Mobile",
        pictures: [
            'https://github.com/AbeGue02/bloom/raw/main/assets/loginScreen.jpeg',
            'https://github.com/AbeGue02/bloom/raw/main/assets/homeScreen.jpeg',
            'https://github.com/AbeGue02/bloom/raw/main/assets/profileScreen.jpeg'
        ],
        description: `
            Bloom represents an innovative approach to habit tracking, harnessing the power of React Native technology to provide users with a comprehensive platform for monitoring their daily routines. By seamlessly integrating habit tracking with virtual plant cultivation, Bloom offers a unique and engaging experience designed to facilitate personal growth and development. Through its intuitive interface and robust feature set, Bloom empowers users to cultivate positive habits while nurturing virtual flora. At the heart of Bloom lies its sophisticated scoring system, meticulously crafted to incentivize and reward users for their habit completion. This system not only tracks users' progress but also encourages consistent engagement by offering tangible rewards in the form of plant growth within their profile. By gamifying the habit-tracking process, Bloom fosters a sense of achievement and motivation, motivating users to stay committed to their goals.
        `,
        skills: [
            reactNative, expressjs, mongodb, nodejs, javaScript, expo
        ],
        githubLink: 'https://github.com/AbeGue02/bloom',
        backendLink: 'https://github.com/AbeGue02/bloom-back-end'
    },
    {
        id: 1,
        title: "Splash",
        category: "Web",
        description: "Splash is an social media platform for artists and people seeking some relaxing time for their mental wellbeing. It is the ideal place for those seeking inspiration and/or relaxation. Come and chill with us.",
        skills: [
            react, expressjs, mongodb, nodejs, css, html, javaScript
        ],
        pictures: [
            'https://github.com/AbeGue02/splash/raw/main/imgs/feed-screen.png',
            'https://github.com/AbeGue02/splash/raw/main/imgs/user-screens.png',
            'https://github.com/AbeGue02/splash/raw/main/imgs/edit-user-screen.png'
        ],
        githubLink: 'https://github.com/AbeGue02/splash'
    },
    {
        id: 2,
        title: "PONG",
        category: "Web",
        description: `Have you ever played the classic game of PONG? PONG is one of the most classic video game out there. Although it has a basic design, it is as addictive as games can get. It was created in 1972 by Atari founder Nolan Bushnell. Although the charm of PONG is its simplicity, there are ways to keep the game simple while also adding some spice to it. This game is much faster than the original PONG, and you can chose whether you want to play by yourself, or against the computer. Either way, the game is endlessly fun!`,
        skills: [
            html, javaScript, css, nodejs
        ],
        pictures: [
            'https://i.imgur.com/nbzIgQH.png'
        ],
        githubLink: 'https://github.com/AbeGue02/pong',
        deployedLink: 'https://abrahamguerrero-pong.surge.sh/'
    },
]

export default projects