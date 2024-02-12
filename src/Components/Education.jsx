import React from "react";

const Education = () => {
  return (
    <section className="flex center" id="education">
      <h2
        style={{
          textAlign: "center",
          paddingTop: "3rem",
        }}
      >
        Education
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            margin: "1rem",
            textAlign: "center",
          }}
        >
          <h3>Fayoum University</h3>
          <p>English Languge</p>
          <p>2021</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            margin: "1rem",
            textAlign: "center",
          }}
        >
          <h3>ALX</h3>
          <p>Full Stack Software Engineer</p>
          <p>2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
