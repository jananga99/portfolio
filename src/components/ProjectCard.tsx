import { Col } from "react-bootstrap";

interface IProjectCardProps{
  title: string;
  description: string;
  imgUrl: string;
  siteUrl?: string;
  githubUrl?: string;
}

export const ProjectCard = ({ title, description, imgUrl,siteUrl, githubUrl }:IProjectCardProps) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{margin:'auto',marginBottom:'20px'}}>
        <img src={imgUrl} alt="lala"  style={{objectFit: 'cover', height:'210px'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <div>
          {siteUrl &&  <a rel="noopener noreferrer" href={siteUrl} target="_blank">Demo</a>}
          </div>
          <div>
          {githubUrl &&  <a rel="noopener noreferrer" href={githubUrl} target="_blank">github</a>}
          </div>
          
        </div>
      </div>
    </Col>
  )
}
