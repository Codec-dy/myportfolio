import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'
import address from './address.png'
import telephone from './telephone.png' 
import email from './email.png'
import available from './available.png'
import completed from './completed.jpg'


//certificates
import GS_forageCert from "../certificates/GS_completion_cert.pdf"
import infosec from "../certificates/infosec.pdf"
// Projects imports
import background1 from './background1.jpg'
import bgInfoPic from './bgInfoPic.jpg'
import eduPic from './eduPic.webp'
import skillsPic from './skillsPic.jpg'
import hobPic from './hobPic.jpg'
import mbalisPortfolio from '../projects/mbalisportfolio.png'
import ecommerce from '../projects/ecommerce.png'


export const graphicDesignImages = []

export const assets = {
   address,
    telephone,
    email,
    available,
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    cross_icon,
    background1,
    completed,
}
export const projects = [
    {
        id: 1,
        title: 'Ecommerce Project',
        category: 'Web development',
        description: 'This responsive e-commerce website provides a seamless and user-friendly shopping experience. It features a modern and intuitive design, showcasing a variety of products with detailed descriptions, prices, and high-quality images. It provides dynamic product listings with filtering options for easy navigation, Fully optimized for desktop and mobile devices, Smooth transitions and animations for an engaging interface.',
        img: ecommerce,
        vid: '',
        projlink:'https://codec-dy.github.io/ecommerce',
        images:[],
        techUsed: 'Reactjs, tailwindcss, vite, VScode',
    },
    {
        id: 2,
        title: 'Portfolio Project',
        category: 'Web Development',
        description: 'This sleek and modern portfolio website showcases my skills, projects, and experiences in web development and programming. Designed with a clean and intuitive layout, it effectively highlights my clients professional journey and creative work.It is fully optimized for desktop and mobile devices, ensuring accessibility across all platforms',
        img: mbalisPortfolio,
        vid: '',
        projlink:'https://codec-dy.github.io/mbalisportfolio/',
        techUsed: 'Reactjs, tailwindcss, vite, VScode',
    },
    {
        id: 3,
        title: 'Graphic Design',
        category: 'Designs',
        description: 'This collection showcases my skills in graphic design, focusing on the art of poster creation. Each design blends creativity, typography, and visual storytelling to deliver compelling messages. From bold event promotions to thought-provoking concepts, my work reflects a keen eye for aesthetics and effective communication.',
        img: background1,
        vid: background1,
        techUsed: 'Adobe Illustrator, Adobe Photoshop, Figma, Canva',
    },
    
    
    // {
    //     id: 4,
    //     title: 'Music Video',
    //     category: 'Video Production',
    //     description: 'This visually captivating and emotionally engaging music video brings Gospel Revs’ worship to life through a seamless blend of music, storytelling, and choreography. Featuring heartfelt singing and powerful expressions of faith, the video creates an immersive worship experience that resonates with the soul. Capturing the joy and devotion of the performers, I had an incredible time bringing this project to life from filming each moving moment to crafting the final edit.',
    //     img: musicVidPic,
    //     vid: musicVid,
    //     techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    // },
    // {
    //     id: 5,
    //     title: 'Graphic Design',
    //     category: 'Graphic Design, Poster Design, Logo Design',
    //     description: 'This collection showcases my skills in graphic design, focusing on the art of poster creation. Each design blends creativity, typography, and visual storytelling to deliver compelling messages. From bold event promotions to thought-provoking concepts, my work reflects a keen eye for aesthetics and effective communication.',
    //     img: pic5,
    //     vid: '',
    //     techUsed: 'Canva, Photoshop',
    //     link:'/mbalisportfolio/project/graphicDesign/5'
    // },

]

export const certificates = [
    {
        id: 1,
        title: 'Software Engineering Job Simulation',
        institution: 'Goldman Sachs, Forage',
        date: 'January 27th, 2025',
        img:'',
        link: GS_forageCert
    },
    {
        id: 2,
        title: 'Student Employment Information Security',
        institution: 'Infosec IQ',
        date: 'November 20th, 2024',
        img:'',
        link: infosec
    },


]

export const aboutme = {
    background: 'My name is Mbali, and I am 22 years old. I have a rich cultural heritage that has shaped my values and worldview. Being proficient in both English and Zulu, I deeply appreciate the power of language in connecting with people and preserving identity. My background influences my passion for education, community engagement, and creating meaningful impact in various fields.',
    backimg: bgInfoPic,
    education: 'I began my educational journey at UWC Dilijan as a UWC Scholar, where I embraced a diverse and rigorous academic environment that shaped my global perspective. Currently, I am pursuing a double major in Business and Psychology at Earlham College, where I explore the intersection of human behavior and strategic decision-making. My studies reflect my passion for understanding people and creating impactful solutions, whether in business, psychology, or beyond.' ,
    eduimg: eduPic,
    skills: 'I am a passionate and creative video editor and graphic designer with a deep love for storytelling through visuals. With over two years of experience in Adobe Premiere Pro, Adobe Photoshop, and Canva, I specialize in crafting compelling videos and eye-catching designs. From commercials and documentaries to music videos and posters, I bring ideas to life with creativity, technical precision, and an eye for detail. My work reflects a dedication to authenticity, innovation, and impactful visual storytelling. I am always looking for new opportunities to collaborate with brands and creators to create compelling video content that resonates with audiences and drives results.'   ,
    skillImg:skillsPic,
    hobPic:hobPic,
    hobbies: 'I have a deep passion for reading and researching, always eager to expand my knowledge and explore new ideas. Traveling allows me to experience different cultures and perspectives, enriching both my personal and professional growth. I also enjoy singing, finding joy and expression through music. Additionally, I thrive in social events, where I can connect with others, share experiences, and build meaningful relationships.'  

}

export const Details = {
    whosePortfolio: "DANIEL'S PORTFOLIO",
    contact: '+1 563 259 7490',
    street: '700 college dr',
    town: 'Decorah IA, 52101', 
    country:'USA',
    email: 'yormesordaniel@gmail.com',
    available:'',
    
}

export const websiteInfo = {
    frontPage:"Welcome to my portfolio! I’m Daniel, a dedicated Computer Science and Accounting major with a passion for innovative problem-solving and strategic thinking. Here, you’ll find a showcase of my projects, skills, and experiences that blend technology with financial insight. Explore my journey and discover how I combine creativity with analytical precision to make an impact",
    website:'danielsportfolio.com'
}

export const experience = [
    {
    title:'Forensic Risk Assurance Intern',
    company:'EY',
    summary:'Welcome to my portfolio! I’m Daniel, a dedicated Computer Science and Accounting major with a passion for innovative problem-solving and strategic thinking. Here, you’ll find a showcase of my projects, skills, and experiences that blend technology with financial insight. Explore my journey and discover how I combine creativity with analytical precision to make an impact'
    },
    {
        title:'Project Management Intern',
        company:'Luther College',
        summary:'Welcome to my portfolio! I’m Daniel, a dedicated Computer Science and Accounting major with a passion for innovative problem-solving and strategic thinking. Here, you’ll find a showcase of my projects, skills, and experiences that blend technology with financial insight. Explore my journey and discover how I combine creativity with analytical precision to make an impact'
    },
    {
        title:'Direct Support Professional',
        company:'Chileda',
        summary:'Welcome to my portfolio! I’m Daniel, a dedicated Computer Science and Accounting major with a passion for innovative problem-solving and strategic thinking. Here, you’ll find a showcase of my projects, skills, and experiences that blend technology with financial insight. Explore my journey and discover how I combine creativity with analytical precision to make an impact'
    },
    {
        title:'Full Stack Developer',
        company:'Nirdteq',
        summary:'Welcome to my portfolio! I’m Daniel, a dedicated Computer Science and Accounting major with a passion for innovative problem-solving and strategic thinking. Here, you’ll find a showcase of my projects, skills, and experiences that blend technology with financial insight. Explore my journey and discover how I combine creativity with analytical precision to make an impact'
    },
]
