import React, { useState } from 'react';


function ThemeSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <span className="slider"></span>
    </label>
  );
}

export default ThemeSwitch;
