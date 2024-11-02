import React from "react";

const herobanner = () => {
  const styles = {
    heroBanner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "50px",
      backgroundColor: "black",
    },
    textContent: {
      paddingRight: "30px",
      width: "50%",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      color: "white",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "white",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    imageContent: {
      flex: "1",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "16px",
    },
  };

  return (
    <div style={styles.heroBanner}>
      <div style={styles.textContent}>
        <h1 style={styles.heading}>Welcome to Our Website</h1>
        <p style={styles.paragraph}>
          Discover amazing products and services that will revolutionize your
          life. We're dedicated to providing the best solutions for our
          customers.
        </p>
        <a style={styles.button} href="/Login">Learn More</a>
      </div>
      <div style={styles.imageContent}>
        <img src="/onepeice.jpg" alt="Hero Banner" style={styles.image} />
      </div>
    </div>
  );
};

export default herobanner;
