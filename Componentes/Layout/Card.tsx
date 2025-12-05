"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import fondoRosa from "../../public/img/Fondo Rosa.jpg"
import fondoRosaPaper from "../../public/img/Fondo Rosa Paper.jpg"
import HijoMadre from "../../public/img/Hijo con su madre.jpg"

export default function Card() {
  const [bck, setBck] = useState('');
  const [settingColor, setSettingColor] = useState({
    bck: 'transparent',
    color: 'black'
  })

  const sp = useSearchParams();
  const theme = sp.get("theme");
  const name = sp.get("name");
  const category = sp.get("category");
  const message = sp.get("message") || "";

  const selectImage = () => {
    let imgBck = '';
    const sttg = { ...settingColor };

    switch (theme) {
      case "1":
        imgBck = fondoRosa.src;
        sttg.color = "black";
        sttg.bck = "rgba(255, 255, 255, 0.3)";
        break;
      case "2":
        imgBck = HijoMadre.src;
        sttg.color = "#9ed284";
        sttg.bck = 'rgba(0, 0, 0, 0.6)';
        break;
      case "3":
        imgBck = fondoRosaPaper.src;
        sttg.color = "#5a3a2a";
        sttg.bck = "rgba(255, 255, 255, 0.5)";
        break;
      default:
        imgBck = fondoRosa.src;
        sttg.color = "black";
        sttg.bck = "rgba(255, 255, 255, 0.3)";
        break;
    }
    setBck(imgBck);
    setSettingColor(sttg);
  }

  useEffect(() => {
    selectImage();
  }, [theme]);

  if (!theme || !name) {
    return (
      <div className={styles.errorContainer}>
        <h1>Error 404: No especificó qué nombre ni qué tema debe mostrarse</h1>
      </div>
    );
  }

  return (
    <div className={styles.cardContainer}>
      {bck && (
        <img
          src={bck}
          alt="Background"
          className={styles.backgroundImage}
        />
      )}

      <div
        className={styles.contentWrapper}
        style={{
          backgroundColor: settingColor.bck,
          color: settingColor.color,
        }}
      >
        <h1 className={styles.title}>
          {name} Feliz
          {category === "1" ? " día de la madre" : " Halloween"}
        </h1>

        {message && (
          <h2 className={styles.message}>
            {message}
          </h2>
        )}
      </div>
    </div>
  )
}