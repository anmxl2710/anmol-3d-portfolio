import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Head Coordinator</h4>
                <h5>Training &amp; Placement Cell · JIIT Noida</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lead campus recruitment activities—pre-placement talks, group
              discussions, and interviews—helping drive stronger internship and
              full-time outcomes for students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Ernst &amp; Young · Gurugram</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Trained and integrated an AI model (Tablenet) to extract tables from
              scanned PDFs; collaborated on React and Figma-driven UI for an
              internal site; contributed to a scalable no-code platform (Flask,
              React) with an AI assistant to automate spreadsheet workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Member</h4>
                <h5>Jaypee Youth Club · Noida</h5>
              </div>
              <h3>2024–</h3>
            </div>
            <p>
              Plan and execute college events end to end—logistics, budgeting,
              and cross-team coordination for successful student programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
