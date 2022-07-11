const ProjectsData = [
  {
    title: "Cookbook App",
    description: `Full stack web app that displays over 200 meals to a user. 
                            Project features recipe browsing/search, filtering recipes,
                            user authentication via a cookie-based session and PostgreSQL,
                            add/delete meals from favorites when logged in.`,
    links: [
      {
        url: "https://github.com/hsingh17/Cookbook",
        logo: require("../img/github.svg"),
        alt: "github",
      },

      {
        url: "https://hsingh17-cookbook.herokuapp.com/",
        logo: require("../img/heroku.svg"),
        alt: "heroku",
      },
    ],
    date: "June 2022",
    image: require("../img/projects/cookbook_app.png"),
    skills: ["React", "Node", "Express", "PostgreSQL", "Heroku", "Bootstrap"],
  },

  {
    title: "MNIST Handwritten Digit Classifier",
    description: `Developed a basic Convolutional Neural Network (CNN) that classifies 
                            handwritten numbers. Designed a frontend where users can 
                            write numbers,and the CNN makes a prediction on what user wrote. 
                            Hosted on Heroku`,
    links: [
      {
        url: "https://github.com/hsingh17/Handwritten-Digit-Classifier",
        logo: require("../img/github.svg"),
        alt: "github",
      },

      {
        url: "https://handwritten-digit-classifier.herokuapp.com/",
        logo: require("../img/heroku.svg"),
        alt: "heroku",
      },
    ],
    date: "August 2021",
    image: require("../img/projects/mnist_project.png"),
    skills: [
      "Javascript",
      "Python",
      "Tensorflow",
      "Node",
      "Express",
      "HTML",
      "CSS",
      "Heroku",
    ],
  },

  {
    title: "Connect 4",
    description: `Developed a recreation of Connect 4 in Javascript. 
                            Game features working local and online multiplayer. 
                            Implemented a simple opponent AI with the minimax algorithm. 
                            Project is hosted on Heroku`,
    links: [
      {
        url: "https://github.com/hsingh17/Connect4",
        logo: require("../img/github.svg"),
        alt: "github",
      },

      {
        url: "https://hsingh17-connect4.herokuapp.com/",
        logo: require("../img/heroku.svg"),
        alt: "heroku",
      },
    ],
    date: "October 2020",
    image: require("../img/projects/connect4.png"),
    skills: ["Javascript", "Node", "Express", "Socket.io", "Heroku"],
  },

  {
    title: "Tetris",
    description: `Developed a recreation of Tetris in C++ with the 
                            Simple Fast Media Library (SFML)`,
    links: [
      {
        url: "https://github.com/hsingh17/Tetris",
        logo: require("../img/github.svg"),
        alt: "github",
      },
    ],
    date: "August 2019",
    image: require("../img/projects/tetris.gif"),
    skills: ["C++", "SFML"],
  },

  {
    title: "A* Maze Solver",
    description: `Developed a text-based maze solver in C++ 
                            using the A* pathfinding algorithm.`,
    links: [
      {
        url: "https://github.com/hsingh17/MazeSolver",
        logo: require("../img/github.svg"),
        alt: "github",
      },
    ],
    date: "July 2019",
    image: require("../img/projects/maze_solver.jpg"),
    skills: ["C++"],
  },

  {
    title: "Discord Chat Bot",
    description: `Developed a chat bot for the communication software Discord in Python 
                            using the Discord.py library. Chat bot made requests to Riot Games' 
                            public API to fetch a user's League of Legends statistics.`,
    links: [
      {
        url: "https://github.com/hsingh17/Nexus_Bot",
        logo: require("../img/github.svg"),
        alt: "github",
      },
    ],
    date: "December 2018",
    image: require("../img/projects/nexus_bot.jpg"),
    skills: ["Python", "Discord.py", "Riot Games API"],
  },
];

export default ProjectsData;
