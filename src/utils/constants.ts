import me from "../assets/img/banner/me.jpg";
import skillsBackground from "../assets/img/banner/banner-bg2.jpg";
import projectsBackground from "../assets/img/banner/banner-bg3.jpg";
import footerBackground from "../assets/img/banner/banner-bg2.jpg";
import gymImage from "../assets/img/projects/gym.jpeg";
import dietGuideImage from "../assets/img/projects/mobile-diet-guide.png";
import movieAppImage from "../assets/img/projects/movie-app.png";
import airwaysImage from "../assets/img/projects/bairways.jpg";
import contactImg from "../assets/img/contact/contact.jpeg";


export const BannerConstants = {
  quote: "A passionate learner who always craves for knowledge while seeking for a challenging career",
  name: "Jananga Kalawana",
  firstName: "Jananga",
  lastName: "Kalawana",
  careers: ["Full Stack Developer", "Problem Solver", "Mobile App Developer"]
}

export const skillConstants = {
  title: "Skills & Technologies",
  description1: "I leverage key technologies in my projects, works, and studies.",
  description2: "Continuously learning and applying cutting-edge tech to obtain optimal solutions."
}

export const ImageConstants = {
  me,
  skillsBackground,
  gymImage,
  dietGuideImage,
  movieAppImage,
  airwaysImage,
  projectsBackground,
  contactImg,
  footerBackground
}

export const projects = [
  {
    title: "Virtual Fitness Room",
    description: "A space to connect customers & coaches",
    imgUrl: ImageConstants.gymImage,
    githubUrl: "https://github.com/jananga99/Project_Gym_MVC"
  },
  {
    title: "BAIRWAYS",
    description: "Air ticket booking website",
    imgUrl: ImageConstants.airwaysImage,
    githubUrl: "https://github.com/nimsara66/B_Airways",
    siteUrl: "https://bairways.nimsarafernando.com/"
  },
  {
    title: "Diet Guide",
    description: "Diet consultation mobile application",
    imgUrl: ImageConstants.dietGuideImage,
    githubUrl: "https://github.com/Software-Engineering-Project-Group-14/my_diet_guide"
  },
  {
    title: "Movie App",
    description: "App to search for movies, tv series & books",
    imgUrl: ImageConstants.movieAppImage,
    githubUrl: "https://github.com/jananga99/search_films_books"
  }
];

export const contactConstants = {
  title: "Reach Out to Me"
}

export const socialMediaConstants = {
  facebookLink: "https://www.facebook.com/profile.php?id=100075031935863",
  linkedInLink: "https://www.linkedin.com/in/jananga-kalawana/",
  githubLink: "https://github.com/jananga99/"
}

export const navConstants = {
  title: 'PORTFOLIO',
  contact: 'Contact Me'
}