import "./DropdownMenu.css";
import { useEffect, useState } from "react";
import { useClickAway, useMediaQuery } from "@uidotdev/usehooks";
import { createPortal } from "react-dom";

function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("options");

  const isMobile = useMediaQuery("only screen and (max-width: 1080px)");

  const ref = useClickAway(() => {
    setOpen(false);
    setStep("options");
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setStep("options");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTriggerClick = () => {
    setOpen(!open);
    setStep("options");
  };

  if (isMobile){ 
    return (
      <div className={`dropdown-menu-container ${isMobile ? "isMobileContainer" : ""}`}>
        <button className="dropdown-menu-trigger" onClick={handleTriggerClick}>
          <img src="/dots-dropdown-icon.svg" alt="" />
        </button>
        {open &&
        <div className="dropdown-overlay">
          </div>}
        {open &&
          createPortal(
            <div className={`dropdown-menu-content ${isMobile ? "isMobileContent" : ""}`} ref={ref}>
              {step === "options" && (
                <div>
                  <button
                    className="dropdown-menu-option"
                    onClick={() => {
                      setStep("hide-options");
                    }}
                  >
                    {" "}
                    <img src="/hide-icon.svg" alt="" />
                    Hide
                  </button>
                  <button className="dropdown-menu-option">
                    <img src="/improve-icon.svg" alt="" />
                    Improve my feed
                  </button>
                </div>
              )}
              {step === "hide-options" && (
                <div className="user-options-container">
                  <button
                    className="user-options-title"
                    onClick={() => {
                      setStep("options");
                    }}
                  >
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
                    <label htmlFor="">
                      I've seen too many posts on this topic
                    </label>
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
            </div>,
            document.body
          )}
      </div>
    );
}
  

  return (
    <div className="dropdown-menu-container">
      <button className="dropdown-menu-trigger" onClick={handleTriggerClick}>
        <img src="/dots-dropdown-icon.svg" alt="" />
      </button>
      {open && (
        <div className="dropdown-menu-content" ref={ref}>
          {step === "options" && (
            <div>
              <button
                className="dropdown-menu-option"
                onClick={() => {
                  setStep("hide-options");
                }}
              >
                {" "}
                <img src="/hide-icon.svg" alt="" />
                Hide
              </button>
              <button className="dropdown-menu-option">
                <img src="/improve-icon.svg" alt="" />
                Improve my feed
              </button>
            </div>
          )}
          {step === "hide-options" && (
            <div className="user-options-container">
              <button
                className="user-options-title"
                onClick={() => {
                  setStep("options");
                }}
              >
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
}

export default DropdownMenu;
