import { Project } from "../interfaces";
import { react, reactNative } from "./skills";

const projects: Project[] = [
    {
        id: 0,
        title: "Bloom Habit Tracker",
        category: "Mobile",
        description: "React Native Habit Tracker",
        skills: [
            reactNative
        ],
        githubLink: 'https://github.com/AbeGue02/bloom',
        backendLink: 'https://github.com/AbeGue02/bloom-back-end'
    },
    {
        id: 1,
        title: "Splash",
        category: "Web",
        description: "React social media platform for artists.",
        skills: [
            react
        ],
        githubLink: 'https://github.com/AbeGue02/splash'
    },
    {
        id: 2,
        title: "PONG",
        category: "Web",
        description: `Have you ever played the classic game of PONG? PONG is one of the most classic video game out there. Although it has a basic design, it is as addictive as games can get. It was created in 1972 by Atari founder Nolan Bushnell. Although the charm of PONG is its simplicity, there are ways to keep the game simple while also adding some spice to it. This game is much faster than the original PONG, and you can chose whether you want to play by yourself, or against the computer. Either way, the game is endlessly fun!`,
        skills: [
            react
        ],
        githubLink: 'https://github.com/AbeGue02/splash'
    },
]

export default projects