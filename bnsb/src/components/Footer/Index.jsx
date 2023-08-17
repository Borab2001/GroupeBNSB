import styles from './style.module.css';

export default function Index() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <p>&#169; Groupe BNSB {currentYear}. All rights reserved</p>
        </div>
    )
}