import emailicon from "../assets/email.png";
import phoneicon from "../assets/phone.png";

export function CvPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <div className="header">
        {generalInfo.name ? <h1>{generalInfo.name}</h1> : null}

        <div className="subheader">
          {generalInfo.email ? (
            <h4>
              <img src={emailicon} alt="Email" />
              {generalInfo.email}
            </h4>
          ) : null}
          {generalInfo.phoneNumber ? (
            <h4>
              <img src={phoneicon} alt="Phone" />
              {generalInfo.phoneNumber}
            </h4>
          ) : null}
        </div>
      </div>

      <div className="educational-section">
        <h2>Education</h2>
        {education.map((edu, index) => {
          if (edu.school || edu.degree || edu.year) {
            return (
              <div key={index} className="education-item">
                {edu.school ? <p>{edu.school}</p> : null}
                {edu.degree ? <p>{edu.degree}</p> : null}
                {edu.year ? <p>year: {edu.year}</p> : null}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="practical-section">
        <h2>Experience</h2>
        {experience.map((exp, index) => {
          if (
            exp.company ||
            exp.position ||
            exp.startDate ||
            exp.endDate ||
            exp.responsibilities
          ) {
            return (
              <div key={index} className="experience-item">
                {exp.company ? (
                  <p>
                    <b>Company:</b> {exp.company}
                  </p>
                ) : null}
                {exp.position ? (
                  <p>
                    <b>Position:</b> {exp.position}
                  </p>
                ) : null}
                {(exp.startDate || exp.endDate) && (
                  <p className="dates">
                    <b>Period:</b> {exp.startDate} - {exp.endDate}
                  </p>
                )}
                {exp.responsibilities ? (
                  <p>
                    <b>Responsibilities:</b> {exp.responsibilities}
                  </p>
                ) : null}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
