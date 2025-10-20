"use client"

import { PropsWithChildren } from "react";
import Footer from "../Assets/footer";
import styles from "../../app/page.module.css";


export default function ContainerMain({ children }: PropsWithChildren) {

    return (
        <div>
            <div className={styles.page}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}