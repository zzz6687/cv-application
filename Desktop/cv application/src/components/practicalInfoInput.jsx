export function PracticalInfoInput({ experience, onChange, generateId }) {
  const handleChange = (index, fieldName, newValue) => {
    const updated = [...experience];
    updated[index] = {
      ...updated[index],
      [fieldName]: newValue,
    };
    onChange(updated);
  };

  const deleteExperience = (indexDelete) => {
    const updated = experience.filter((_, index) => index !== indexDelete);
    onChange(updated);
  };

  const addExperience = () => {
    const newEntry = {
      id: generateId(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };

    const updated = [...experience, newEntry];
    onChange(updated);
  };

  return (
    <div className="practical-info">
      <h2>Practical</h2>

      {experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          <input
            type="text"
            value={exp.company || ""}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            placeholder="Company Name..."
          />

          <input
            type="text"
            value={exp.position || ""}
            onChange={(e) => handleChange(index, "position", e.target.value)}
            placeholder="Position..."
          />

          <input
            type="date"
            value={exp.startDate || ""}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
          />

          <input
            type="date"
            value={exp.endDate || ""}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
          />

          <input
            type="text"
            value={exp.responsibilities || ""}
            onChange={(e) =>
              handleChange(index, "responsibilities", e.target.value)
            }
            placeholder="Responsibilities..."
          />

          <button onClick={() => deleteExperience(index)}>Delete</button>
        </div>
      ))}

      <div className="add-btn">
        <button onClick={() => addExperience()}>+ Add</button>
      </div>
    </div>
  );
}
