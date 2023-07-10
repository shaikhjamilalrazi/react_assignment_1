import { useState } from "react";
import styles from "./Content.module.css";

export default function Content() {
    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");

    const handleButtonClick = () => {
        setDisplayText(text);
    };

    const handleTextAreaChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div className={styles.content}>
            <textarea
                className={styles.textarea}
                value={text}
                onChange={handleTextAreaChange}
                placeholder="Enter some text"
            />
            <button className={styles.button} onClick={handleButtonClick}>
                Display Text
            </button>
            <p className={styles.displayText}>{displayText}</p>
        </div>
    );
}
