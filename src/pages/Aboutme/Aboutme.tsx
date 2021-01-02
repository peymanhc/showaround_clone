import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./style.module.scss";
const skills = [
  { language: "Linux", skill: 60 },
  { language: "TypeScript", skill: 85 },
  { language: "PropTypes", skill: 95 },
  { language: "HTML", skill: 100 },
  { language: "CSS", skill: 100 },
  { language: "SCSS", skill: 95 },
  { language: "Axios", skill: 70 },
  { language: "AppoloClient", skill: 60 },
  { language: "Fetch", skill: 70 },
  { language: "Formik", skill: 90 },
  { language: "React hook Form", skill: 75 },
  { language: "Enzyme", skill: 50 },
  { language: "jest", skill: 50 },
  { language: "nextjs", skill: 50 },
  { language: "Reactjs", skill: 90 },
  { language: "Redux", skill: 80 },
  { language: "React-intl", skill: 80 },
  { language: "React-query", skill: 80 },
  { language: "Redux Persist", skill: 60 },
  { language: "Redux Thunk", skill: 80 },
  { language: "Redux Saga", skill: 85 },
  { language: "Materialui", skill: 100 },
  { language: "ReactStrap", skill: 90 },
  { language: "ReactBootStrap", skill: 100 },
  { language: "AntDesign", skill: 40 },
  { language: "Tailwind", skill: 90 },
  { language: "StyledComponents", skill: 100 },
  { language: "Materialuistyles", skill: 100 },
  { language: "git", skill: 90 },
  { language: "ReactTooltip", skill: 80 },
  { language: "graphql", skill: 40 },
  { language: "Draftjs", skill: 60 },
];
function Aboutme() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headtext}>
          <h5>About me</h5>
          <h3 className={styles.aboutme}>
            We aspire to change the concept
            <br />
            of travelling by making it more
            <br />
            authentic, more local.
          </h3>
        </div>
      </div>
      <Container>
        <div className={styles.orangebox}>
          <div>
            <h3 className={styles.storytitle}>Our story</h3>
            <h6 className={styles.storysubtitle}>
              There’s no reason to be just a mere tourist anymore, not when
              locals can show you an edgier, more beautiful and more authentic
              version of their city.
            </h6>
            <p className={styles.storytext}>
              Showaround is all about the activities that happen when you’re not
              lounging around your hotel room, and they can start from the
              moment you arrive at your destination. From pick-up to departure,
              a Showaround local can be at your side – it’s like having a
              knowledgeable friend in every city you visit.
            </p>
          </div>
          <div className={styles.countes}>
            <div className={styles.countbox}>
              <p>Total countries</p>
              <h6>219</h6>
            </div>
            <div
              style={{ borderLeft: "none", borderRight: "none" }}
              className={styles.countbox}
            >
              <p>Total cities</p>
              <h6>12023</h6>
            </div>
            <div className={styles.countbox}>
              <p>Total locals</p>
              <h6>129921</h6>
            </div>
          </div>
        </div>
      </Container>
      {skills.map((item) => {
        return (
          <div className={styles.u_center}>
            <section className={styles.skills}>
              <div className={styles.skill}>
                <h3 className={styles.skill__type}>{item.language}</h3>
                <div className={styles.skill__outer_bar}>
                  <div
                    style={{ width: `${item.skill}%` }}
                    className={styles.skill__inner_bar}
                  ></div>
                </div>
                <p className={styles.skillpresent}>{item.skill}%</p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Aboutme;
