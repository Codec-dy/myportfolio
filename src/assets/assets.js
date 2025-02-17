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



export const graphicDesignImages = []
// const graphicDesignImages = import.meta.glob('../projects/graphicDesign/*.{png,jpg,jpeg,svg}', { eager: true });
// export { graphicDesignImages };

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
        title: 'Twisted Tea Commercial',
        category: 'Video Commercial',
        description: 'This vibrant and energetic commercial captures the essence of Twisted Tea, showcasing its unique taste and the fun-loving lifestyle it represents. With lively visuals and an upbeat tone, the ad emphasizes the brand’s message of embracing life’s simple pleasures with a refreshing twist.',
        img: background1,
        vid: background1,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    },
    {
        id: 2,
        title: 'A Documentary on Innovation and Community',
        category: 'Documentary',
        description: 'This documentary follows the inspiring journey of a passionate community leader and Earlham alumnus as they work to establish a makerspace in Richmond. Through resilience and vision, they transform a vacant building into a thriving hub for creativity, education, and entrepreneurship. The film highlights the challenges of bringing this dream to life, showcasing the power of community, resourcefulness, and determination in fostering innovation and collaboration.',
        img: background1,
        vid: background1,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
    },
    {
        id: 3,
        title: 'Poem',
        category: 'Videography',
        description: 'This short film is a visually stunning and emotionally evocative interpretation of my poem, which envisions a world guided by kindness. Through a seamless blend of striking imagery and immersive sound design, the film brings each verse to life, inviting viewers to reflect on the power of compassion. It explores the beauty of a world where empathy reigns, offering a heartfelt reminder of our shared humanity.',
        img: background1,
        vid: background1,
        techUsed: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition',
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
