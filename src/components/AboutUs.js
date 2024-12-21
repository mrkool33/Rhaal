import React from "react";
import "./AboutUs.css";
import waterfallImage from "../assets/about1.png"; // Replace with your image path
import caveImage from "../assets/about2.png"; // Replace with your image path
const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-column">
        <h4 className="about-subtitle">Who We Are</h4>
        <h2 className="about-title">Who We Are</h2>
        <p className="about-description">
          <b>Al-Khatab</b>, affectionately dubbed “The Dad” and self-proclaimed
          “MangoMan,” combines front-end finesse, light server-side work, and
          database design into one package. He’s calm and caring most of the
          time, offering sage advice way beyond his years, yet he can explode
          with the temper of a monkey when bugs get out of hand. His favorite
          programming mantra is: “Just because it compiles, doesn’t mean it
          works.”
        </p>
        <br />
        <p className="about-description">
          <b>Sulaiman</b>, known around the team as “The Terminator” and
          “Prankstar,” dominates the back-end realm, dabbles in front-end when
          needed, and helps out with database design. He’s notorious for
          sneaking joke console.logs into the code at critical moments and
          quoting “It works on my machine!” whenever errors arise in production.
          If there’s a problem lurking in the code, he’s the first to say, “I’ll
          be back.”
        </p>
        <br />
        <p className="about-description">
          <b>Yahya</b>, referred to as “The Chaos Bringer,” sticks exclusively
          to database design. Handing him front-end or back-end tasks is akin to
          inviting endless loops and cryptic error messages. Despite the chaos,
          he keeps morale high by always offering a listening ear. His go-to
          fix-it phrase is “Have you tried turning it off and on again?”—even
          when the problem has nothing to do with powering down.{" "}
        </p>
        <img src={waterfallImage} alt="Waterfall" className="about-image" />
      </div>
      <div className="about-column">
        <h4 className="about-subtitle">Why Us</h4>
        <h2 className="about-title">Why Us</h2>
        <p className="about-description">
          Choosing our platform means opting for a holistic approach to
          therapeutic tourism. We provide a user-friendly interface that makes
          exploring natural sites and renting equipment effortless. Our
          commitment to quality ensures that all listed suppliers are vetted,
          providing you with peace of mind during your visits. We are dedicated
          to enhancing your experience with detailed information, personalized
          recommendations, and a supportive community. Join us in discovering
          the therapeutic treasures of Oman and embark on a journey towards
          wellness and rejuvenation.
        </p>
        <img src={caveImage} alt="Cave" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
