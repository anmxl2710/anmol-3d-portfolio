import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:anmolgoswami505@gmail.com"
                data-cursor="disable"
              >
                anmolgoswami505@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919773703435" data-cursor="disable">
                +91 97737 03435
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science &amp; Engineering, Jaypee Institute of
              Information Technology, Noida — Sep 2022 – May 2026
            </p>
            <p>
              Higher Secondary (Science), The Khaitan School, Noida — Class X
              87.4%; Class XII 83.4%
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/anmxl2710"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/anmol-goswami-788887204/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed &amp; developed <br /> by{" "}
              <span>Anmol Goswami</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
