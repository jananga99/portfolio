
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FaNode, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaPhp, FaJava, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiFirebase, SiMysql, SiMongodb, SiPostgresql, SiGithub,  SiTypescript, SiC, SiCplusplus, SiRedux, SiReduxsaga, SiExpress, SiGraphql, SiNestjs, SiFlutter, SiDart, SiAndroid, SiAndroidstudio, SiPandas, SiScikitlearn, SiSqlite, SiServerless, SiAzuredevops, SiAwslambda, SiGnubash, SiUbuntu, SiPostman, SiFigma, SiJira } from 'react-icons/si';
import { ImageConstants, skillConstants } from '../utils/constants';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{ skillConstants.title}</h2>
              <p>{skillConstants.description1}<br></br>{ skillConstants.description2}</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              
                <div className="item  mx-4">
                  <h4 className="mb-4">Languages</h4>
                  <SiC size={40} className="m-3" />
                  <SiCplusplus size={40} className="m-3" />
                  <FaJava size={40} className="m-3" />
                  <SiJavascript size={40} className="m-3" />
                  <FaPhp size={40} className="m-3" />
                  <FaPython size={40} className="m-3" />
                  <SiTypescript size={40} className="m-3" />
                </div>

                <div className="item  mx-4">
                  <h4 className="mb-4">Frontend Development</h4>
                  <FaBootstrap size={40} className="m-3" />
                  <FaCss3Alt size={40} className="m-3" />
                  <FaHtml5 size={40} className="m-3" />
                  <FaReact size={40} className="m-3" />
                  <SiRedux size={40} className="m-3" />
                  <SiReduxsaga size={40} className="m-3" />
                </div>

                <div className="item  mx-4">
                  <h4 className="mb-4">Backend Development</h4>
                  <SiExpress size={40} className="m-3" />
                  <SiGraphql size={40} className="m-3" />
                  <SiNestjs size={40} className="m-3" />
                  <FaNode size={40} className="m-3" />
                </div>

                <div className="item  mx-4">
                  <h4 className="mb-4">Mobile App Development</h4>
                  <SiDart size={40} className="m-3" />
                  <SiFlutter size={40} className="m-3" />
                  <SiAndroid size={40} className="m-3" />
                  <SiAndroidstudio size={40} className="m-3" />
                </div>

                <div className="item  mx-4">
                  <h4 className="mb-4">Machine Learning</h4>
                  <SiPandas size={40} className="m-3" />
                  <SiScikitlearn size={40} className="m-3" />
                </div>
                
                <div className="item   mx-4">
                  <h4 className="mb-4">Databases</h4>
                  <SiMongodb size={40} className="m-3" />
                  <SiMysql size={55} className="m-3" />
                  <SiPostgresql size={40} className="m-3" />
                  <SiSqlite size={40} className="m-3" />
                </div>

                <div className="item   mx-4">
                  <h4 className="mb-4">Devops</h4>
                  <SiAzuredevops size={40} className="m-3" />
                  <SiAwslambda size={40} className="m-3" />
                  <FaDocker size={40} className="m-3" />
                  <SiServerless size={40} className="m-3" />
                </div>

                <div className="item mx-4">
                  <h4 className="mb-4">Other</h4>
                  <SiFigma size={40} className="m-3" />
                  <SiFirebase size={40} className="m-3" />
                  <SiGnubash size={40} className="m-3" />
                  <SiGithub size={40} className="m-3" />
                  <SiJira size={40} className="m-3" />
                  <SiPostman size={40} className="m-3" />
                  <SiUbuntu size={40} className="m-3" />
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={ImageConstants.skillsBackground} alt="Image"/>
    </section>
  )
}
