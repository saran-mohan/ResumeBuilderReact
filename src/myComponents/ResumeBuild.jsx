import React from 'react';

import './ResumeBuild.scss';
import * as ResumeData from './ResumeBuildData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as IconExperience } from 'assets/img/resume/IconExperience.svg';
import { ReactComponent as IconIdea } from 'assets/img/resume/IconIdea.svg';
import { ReactComponent as IconGraduation } from 'assets/img/resume/IconGraduation.svg';
import { ReactComponent as IconSkills } from 'assets/img/resume/IconSkills.svg';
import { ReactComponent as IconLanguage } from 'assets/img/resume/IconLanguage.svg';
import { ReactComponent as IconPersonalInfo } from 'assets/img/resume/IconPersonalInfo.svg';
import { ReactComponent as IconCertificate } from 'assets/img/resume/IconCertificate.svg';

const resumeDataObj = ResumeData.default.data;
class ResumeBuild extends React.Component {
  render() {
    return (
      <div className='row resumeBuild-container'>
        <div className='resumeBuild'>
          <h1 className='resumeBuild__heading'>{resumeDataObj.profileName}</h1>
          <h2 className='resumeBuild__title'>
            {resumeDataObj.currentJobTitle}
          </h2>
          <div className='resumeBuild__introduction'>
            <p>{resumeDataObj.introduction}</p>
          </div>
          <div className='resumeBuild__introduction'>
            {/* className="resumeBuild__yoe" */}
            <p> {resumeDataObj.expYrs}</p>
          </div>
          <div className='resumeBuild__sections'>
            <div className='left-sections'>
              <div className='experience sectionsGlobal'>
                <div className='icon icon-experience'>
                  {/* <IconExperience /> */}
                  <h3 className='sectionHeadingGlobal'>Professional Experience</h3>
                </div>
                {resumeDataObj.experience.projects.map(project => {
                  let projectDivision = (
                    <div className='sectionsGlobal__divisionsGlobal'>
                      <div className='experience__year yearGlobal'>
                        <p>{project.dateFrom} to</p>
                        <p>{project.dateTo}</p>
                      </div>
                      <div className='experience__project divisionDetailsGlobal'>
                        <h5 className='experience__project__jobTitle mainHeadingGlobal'>
                          {project.technologyTitle}
                        </h5>

                        <p className='experience__project__companyName'>
                          {project.companyName}
                        </p>
                        <p className='experience__project__responsibilities'>
                          Role: {project.jobTitle}
                        </p>

                        <p className='experience__project__projectDescription descriptionGlobal'>
                          {project.projectDescription}
                        </p>

                        <p>
                          <strong>Tools & Technologies Used: </strong>
                          {project.toolsTechnologiesUsed}
                        </p>
                        <p className='experience__project__responsibilities'>
                          Responsibility:
                        </p>
                        <ul className='experience__project__responsibilityList'>
                          {project.projectResponsibilites.map(
                            responsibility => (
                              <li className='descriptionGlobal'>
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                  return projectDivision;
                })}
              </div>





              <div className='education sectionsGlobal'>
                <div className='icon icon-experience'>
                  {/* <IconGraduation /> */}
                  <h3 className='sectionHeadingGlobal'>Education</h3>
                </div>
                {resumeDataObj.education.map(educationObj => {
                  let educationDivision = (
                    <div className='sectionsGlobal__divisionsGlobal'>
                      <div className='education__year yearGlobal'>
                        <p>{educationObj.dateFrom} to</p>
                        <p>{educationObj.dateTo}</p>
                      </div>
                      <div className='education__project divisionDetailsGlobal'>
                        <h5 className='education__project__jobTitle mainHeadingGlobal'>
                          {educationObj.collegeName}
                        </h5>
                        <p className='education__project__companyName descriptionGlobal'>
                          {educationObj.courseName}
                        </p>
                      </div>
                    </div>
                  );
                  return educationDivision;
                })}
              </div>


            </div>
            <div className='right-sections'>

              {/* Personal Info Section */}

              <div className='personalInfo sectionsGlobal'>
                <div className='icon icon-experience'>
                  {/* <IconPersonalInfo /> */}
                  <h3 className='sectionHeadingGlobal'>Personal Info</h3>
                </div>
                {resumeDataObj.personalInformation.map(personalInfo => {
                  var personalInfoDiv = (
                    <div>
                      <p className='personalInfo__heading subHeadingGlobal'>
                        {personalInfo.infoHeading}
                      </p>
                      <p className='personalInfo__description descriptionGlobal'>
                        {personalInfo.infoDescription}
                      </p>
                    </div>
                  );
                  return personalInfoDiv;
                })}
              </div>

              {/* Skills Section */}

              <div className='skills sectionsGlobal'>
                <div className='icon icon-experience'>
                  {/* <IconSkills /> */}
                  <h3 className='sectionHeadingGlobal'>Skills</h3>
                </div>
                {resumeDataObj.skills.map(skill => {
                  var skillsDiv = (
                    <div className='skills__division'>
                      <div className='skills__heading descriptionGlobal'>
                        {skill.skillName}
                      </div>
                      <div className='skills__rating'>
                        <div className='skills__ratingBar'>
                          <div
                            className='skills__ratingBarFill'
                            style={{ width: `${skill.rating * 10}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className='skills__description descriptionGlobal'>
                        {skill.skillDetails}
                      </div>
                    </div>
                  );
                  return skillsDiv;
                })}
              </div>

              {/* Languages Section */}

              <div className='languages sectionsGlobal'>
                <div className='icon icon-experience'>
                  {/* <IconLanguage /> */}
                  <h3 className='sectionHeadingGlobal'>Languages</h3>
                </div>
                <div className='languages__list'>
                  {resumeDataObj.languages.map(language => {
                    var languagesDiv = (
                      <div>
                        <p className='descriptionGlobal'>{language}</p>
                      </div>
                    );
                    return languagesDiv;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeBuild;
