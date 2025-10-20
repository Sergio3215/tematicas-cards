"use client"
import { useSearchParams } from "next/navigation";

import '../../public/card.css'
import fondoRosa from "../../public/img/Fondo Rosa.jpg"
import fondoRosaPaper from "../../public/img/Fondo Rosa Paper.jpg"
import HijoMadre from "../../public/img/Hijo con su madre.jpg"
import { useEffect, useState } from "react";


export default function Card() {

  const [bck, setBck] = useState('');
  const [size, setSize] = useState({
    Width: 0,
    Height: 0
  });
  const [settingColor, setSettingColor] = useState({
    bck: 'transparent',
    color: 'black'
  })

  const sp = useSearchParams();
  const theme = sp.get("theme");
  const name = sp.get("name");
  const category = sp.get("category");
  const message = sp.get("message");

  const selectImage = () => {
    let imgBck = '';
    let sttg = settingColor;
    switch (theme) {
      case "1":
        imgBck = fondoRosa.src;
        break;
      case "2":
        imgBck = HijoMadre.src;
        sttg.color = "#9ed284";
        sttg.bck = 'rgba(180,180,180,0.8)';
        break;
      case "3":
        imgBck = fondoRosaPaper.src;
        break;
      default:
        imgBck = fondoRosa.src;
        break;
    }
    setBck(imgBck);
    setSettingColor(sttg);
  }

  const setSizeWindow = () => {
    setSize({
      Width: window.innerWidth,
      Height: window.innerHeight
    })
  }

  useEffect(() => {
    selectImage();
    setSizeWindow();
    window.addEventListener("resize", () => setSizeWindow());
  }, []);

  useEffect(() => {
    console.log(bck)
  }, [bck])


  return (
    <>
      {
        sp.size > 2 ?
          <div style={{
            overflow: "hidden",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}>
            <div className="card--container" style={{
              height: size.Height
            }}>
              <div className="message--container" style={{
                backgroundColor: settingColor.bck,
                color: settingColor.color,
                textShadow: theme == "2" ? "1px 1px 6px black" : "0px 0px 0px transparent",
              }}>
                <h1 style={{
                  fontSize:
                    message == "" ?
                      '62px'
                      :
                      message.length > 20 ?
                        theme !== "3" ?
                          '36px'
                          :
                          message.length > 30 ?
                            "40px"
                            :
                            "38px"
                        :
                        '40px',
                }}>
                  {name} Feliz
                  {
                    category == "1" ?
                      " día de la madre"
                      :
                      " Halloween"
                  }
                </h1>
                {
                  message !== "" ?
                    <>
                      <h2 style={{

                        fontSize:
                          message.length > 20 ?
                            '20px' :
                            '35px'
                      }}>
                        {message}
                      </h2>
                    </>
                    :
                    <></>
                }
              </div>
            </div>
            <img src={bck} style={{
              position: 'absolute',
              top: "0px",
              width: size.Width - 100,
              maxWidth: '898px',
              minWidth: "896px"
              // height: size.Height - 100
            }} />
          </div>
          :
          <h1 style={{
            color: "white",
            fontWeight: "900"
          }}>
            Error 404: No especificó que nombre ni que tema debe mostrarse
          </h1>
      }
    </>
  )


}