"use client"
import { useState } from "react"
import "../../public/formStyle.css"

export default function FormCategory() {

    const [category, setCategory] = useState('');
    const [theme, setTheme] = useState('');
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const categoriaOption = [
        {
            value: '0',
            name: 'Selecciona una Categoria'
        },
        {
            value: '1',
            name: 'Día de la madre'
        },
        {
            value: '2',
            name: 'Día de Halloween'
        }
    ]

    const temaOption = [
        {
            value: '0',
            name: 'Selecciona un Tema',
            category: '0'
        },
        {
            value: '1',
            name: 'Fondo Rosa',
            category: '1'
        },
        {
            value: '2',
            name: 'Hijo con su madre',
            category: '1'
        },
        {
            value: '3',
            name: 'Fondo Rosa Paper',
            category: '1'
        },
        {
            value: '4',
            name: 'Fondo Oscuro',
            category: '2'
        },
        {
            value: '5',
            name: 'Fondo Scary',
            category: '2'
        },
        {
            value: '6',
            name: 'Fondo Calabaza',
            category: '2'
        }
    ]


    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (theme == "0") {
            setErrMessage("Error: Campos vacios");
            return;
        }
        else {
            setErrMessage("");
        }

        window.location.href = `/card?name=${name}&message=${msg}&theme=${theme}&category=${category}`
    }


    return (
        <form onSubmit={(e) => handlerSubmit(e)}>
            <div>
                <label>Nombre de la persona</label>
                <input type="text" value={name} onChange={(e) => {
                    setErrMessage("")
                    name.length < 18 && e.target.value.length < 18 ?
                        setName(e.target.value)
                        :
                        setErrMessage("limite de caracter en el nombre")
                }} required />
            </div>
            <div>
                <label>Mensaje</label>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} ></textarea>
            </div>
            <div>
                <label>Categoria</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {
                        categoriaOption.map((c, index) => <option key={index} value={c.value}>{c.name}</option>)
                    }
                </select>
            </div>
            <div>
                <label>Temas</label>
                <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                    {

                        temaOption.filter(f => f.category == category).length == 0 ?
                            temaOption.filter(f => f.category == '0').map((t, ii) => <option key={ii} value={t.value}>{t.name}</option>)
                            :
                            temaOption.filter(f => f.category == category || f.category == '0').map((t, ii) => <option key={ii} value={t.value}>{t.name}</option>)
                    }
                </select>
            </div>
            <div style={{
                fontWeight: '800',
                color: 'red'
            }}>
                {errMessage}
            </div>
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}