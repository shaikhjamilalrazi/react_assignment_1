import styles from "./Header.module.css";
// eslint-disable-next-line react/prop-types
export default function Header({ title }) {
    return <h1 className={styles.header}>{title}</h1>;
}
