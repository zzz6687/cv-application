import { useState } from "react";
import { GeneralInfoInput } from "./components/generalInfoInput";
import { EducationalInfoInput } from "./components/educationalInfoInput";
import { PracticalInfoInput } from "./components/practicalInfoInput";
import { CvPreview } from "./components/cvpreview";
import "./App.css";

const generateId = () => {
  return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Dr. Reagan Ridley",
    email: "reaganridley@gmail.com",
    phoneNumber: "+1 800 852 9001",
  });

  const [education, setEducation] = useState([
    {
      id: generateId(),
      school: "MIT (Massachusetts Institute of Technology)",
      degree: "Bachelor of Science (B.S.)",
      year: "2016",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: generateId(),
      company: "Cognito Inc.",
      position: "Chief Executive Officer",
      startDate: "2017",
      endDate: "2025",
      responsibilities:
        "Leading my team, inventing new tech and managing conspiracies",
    },
  ]);

  return (
    <div className="app-container">
      <div className="input-section">
        <h1>CV Builder</h1>
        <GeneralInfoInput info={generalInfo} onChange={setGeneralInfo} />
        <EducationalInfoInput
          education={education}
          onChange={setEducation}
          generateId={generateId}
        />
        <PracticalInfoInput
          experience={experience}
          onChange={setExperience}
          generateId={generateId}
        />
      </div>

      <div className="preview-section">
        <CvPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
