import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import Resume from "./Abhishek_Raj_Resume_29-03-2023-20-33-22.pdf"

const About = () => {
  const {photo,name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {photo && (
       <img height="200px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>

      )}
       

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}
          download='Abhishek Raj'
          
          >

            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
        <a href={Resume}
          download='Abhishek Raj'
          className='btn btn--outline'
          
          > Download CV</a>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
