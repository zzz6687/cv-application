export function EducationalInfoInput({ education, onChange, generateId }) {
  const handleChange = (index, fieldName, newValue) => {
    const updated = [...education];
    updated[index] = {
      ...updated[index],
      [fieldName]: newValue,
    };
    onChange(updated);
  };

  const deleteEducation = (indexDelete) => {
    const updated = education.filter((_, index) => index !== indexDelete);
    onChange(updated);
  };

  const addEducation = () => {
    const newEntry = {
      id: generateId(),
      school: "",
      degree: "",
      year: "",
    };

    const updated = [...education, newEntry];
    onChange(updated);
  };

  return (
    <div className="educational-info">
      <h2>Education</h2>

      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          <input
            type="text"
            value={edu.school || ""}
            onChange={(e) => handleChange(index, "school", e.target.value)}
            placeholder="School..."
          />

          <input
            type="text"
            value={edu.degree || ""}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
            placeholder="Title of Study..."
          />

          <input
            type="date"
            value={edu.year || ""}
            onChange={(e) => handleChange(index, "year", e.target.value)}
          />

          <button onClick={() => deleteEducation(index)}>Delete</button>
        </div>
      ))}

      <div className="add-btn">
        <button onClick={() => addEducation()}>+ Add</button>
      </div>
    </div>
  );
}
