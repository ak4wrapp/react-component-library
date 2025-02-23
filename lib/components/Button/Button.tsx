// import styles from "./Button.module.css"; // Import CSS module

// const Button = () => {
//   return <button className={styles.button}>Button</button>;
// };

// export default Button;

import React from "react";
import styles from "./Button.module.css"; // Import CSS module

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "dark" | "light" | "primary" | "secondary";
}

const Button: React.FC<MyButtonProps> = ({ theme, children }) => {
  return (
    <button className={styles.button} data-theme={theme}>
      {children}
    </button>
  );
};

export default Button;
