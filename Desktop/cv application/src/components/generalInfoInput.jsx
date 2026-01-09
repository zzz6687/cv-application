export function GeneralInfoInput({ info, onChange }) {
  const handleNameChange = (e) => {
    const updatedInfo = {
      ...info,
      name: e.target.value,
    };
    onChange(updatedInfo);
  };

  const handleEmailChange = (e) => {
    const updatedInfo = {
      ...info,
      email: e.target.value,
    };
    onChange(updatedInfo);
  };

  const handleNumChange = (e) => {
    const updatedInfo = {
      ...info,
      phoneNumber: e.target.value,
    };
    onChange(updatedInfo);
  };

  return (
    <div className="general-info">
      <h2>Personal Information</h2>
      <input
        type="text"
        value={info.name}
        onChange={handleNameChange}
        placeholder="Full Name..."
      />

      <input
        type="email"
        value={info.email}
        onChange={handleEmailChange}
        placeholder="yourmail@email.com"
      />

      <input
        type="number"
        value={info.phoneNumber}
        onChange={handleNumChange}
        placeholder="+x(xxx)xxx-xx-xx"
      />
    </div>
  );
}
