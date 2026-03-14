import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My learning <span>&</span>
          <br /> journey
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 2023 */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming Foundations</h4>
                <h5>Computer Science Engineering</h5>
              </div>
              <h3>2023</h3>
            </div>

            <p>
              Started my journey in Computer Science Engineering and began
              learning programming fundamentals including Java, problem
              solving and web development basics.
            </p>
          </div>

          {/* 2024 */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development & Projects</h4>
                <h5>React & Modern Web Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Built academic and personal projects using React, HTML, CSS
              and JavaScript. Improved skills in frontend development,
              responsive UI design and modern web technologies.
            </p>
          </div>

          {/* 2025 */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Development</h4>
                <h5>Java & Database</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Focused on backend development using Java and SQL. Practiced
              data structures and algorithms and built full-stack
              applications combining frontend and backend technologies.
            </p>
          </div>

          {/* 2026 */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Software Engineer</h4>
                <h5>2026 Graduate</h5>
              </div>
              <h3>2026</h3>
            </div>

            <p>
              Preparing for software engineering roles by building real-world
              projects, improving coding skills and continuously learning
              modern development technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;