"use client"
import styles from "../../app/page.module.css"

export default function Footer() {

    return (
        <>
            <hr />
            <footer className={styles.footer}>
                <div>
                    Tematicas Card &copy; {new Date().getFullYear()}
                </div>
                <div>Powered by <a href="https://www.serez.dev/">SerezDev</a></div>
            </footer>
        </>
    )
}