import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    json,
    pokemon,
    cookies,
    cvs,
    vscode
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
    imageUrl: json,
        name: "JSON",
        type: "Frontend",
},
{
imageUrl: vscode,
        name: "Visual Studio Code",
        type: "IDE",
}
];

export const experiences = [
    {
        title: "Crumbl Cookies",
        company_name: "Bakery Associate",
        icon: cookies,
        iconBg: "#accbe1",
        date: "Mar 2022 - Jun 2022",
        points: [
            "Provided efficient customer service and handled cashiering duties",
            "Worked with a team of 6 and developed teamwork, leadership, team project skills",
            "Produced and boxed cookies, ensuring quality and presentation",
            "Maintained cleanliness through dishwashing and garbage clearance",
        ],
    },
    {
        title: "Store Associate",
        company_name: "CVS Health",
        icon: cvs,
        iconBg: "#fbc3bc",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Processed customer transactions efficiently at the front of the store, enhancing the customer experience",
            "Organized and restocked aisles regularly to maintain store presentation and product availability",
            "Assisted customers in finding products, processing refunds, and applying coupons, ensuring customer satisfaction",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pokemon,
        theme: 'btn-back-red',
        name: 'Web Pokedex',
        description: 'Developed a full-stack Pokedex application utilizing Node.js, Express, and Axios to fetch and filter Pokémon data from the PokéAPI, with a responsive front-end built using HTML, CSS, and JavaScript',
        link: 'https://github.com/ayubahmed901/Pokedex',
    },
    
];