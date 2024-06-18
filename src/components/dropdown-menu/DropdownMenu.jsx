import "./DropdownMenu.css";

import { useEffect, useState } from "react";

import { useClickAway } from "@uidotdev/usehooks";

function DropdownMenu(){
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); 

  const ref = useClickAway(() => {
    setOpen(false);
    setStep(0);
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setStep(0);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTriggerClick = () => {
    setOpen(!open);
    setStep(0);
  };

  const handleOptionClick = (option) => {
    if (option === "option1") {
      setStep(1);
    }
  };

  return (
    <div className="dropdown-menu-container">
      <button className="dropdown-menu-trigger" onClick={handleTriggerClick}>
        <img src="/dots-dropdown-icon.svg" alt="" />
      </button>
      {open && (
        <div className="dropdown-menu-content" ref={ref}>
          {step === 0 && (
            <div>
              <button
                className="dropdown-menu-option"
                onClick={() => handleOptionClick("option1")}
              >
                {" "}
                <img src="/hide-icon.svg" alt="" />
                Hide
              </button>
              <button
                className="dropdown-menu-option"
              >
                <img src="/improve-icon.svg" alt="" />
                Improve my feed
              </button>
            </div>
          )}
          {step === 1 && (
            <div className="user-options-container">
              <button className="user-options-title">
                <img src="/arrow_back.svg" alt="" />
                <span>Tell us why:</span>
              </button>
              <div className="user-option">
                <input type="radio" name="user-option" id="" />
                <label htmlFor="">I'm not interested in this author</label>
              </div>
              <div className="user-option">
                <input type="radio" name="user-option" id="" />
                <label htmlFor="">I'm not interested in this topic</label>
              </div>
              <div className="user-option">
                <input type="radio" name="user-option" id="" />
                <label htmlFor="">I've seen too many posts on this topic</label>
              </div>
              <div className="user-option">
                <input type="radio" name="user-option" id="" />
                <label htmlFor="">The information is incorrect</label>
              </div>
              <div className="user-option">
                <input type="radio" name="user-option" id="" />
                <label htmlFor="">I've seen this post before</label>
              </div>
              <div className="user-option">
                <input type="radio" name="user-option" id="" />
                <label htmlFor="">Other reasons</label>
              </div>

              <button className="user-options-btn">Hiden content</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
