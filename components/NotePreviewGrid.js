import React, {useState} from 'react'
import styles from '../styles/Card.module.css'

function NotePreviewGrid() {

    const [notes, setNotes] = useState([
        {title: "i am a note title", description: "i am a note description"},
        {title: "i am a note title", description: "i am a note description"},
        {title: "i am a note title", description: "i am a note description"},
        {title: "i am a note title", description: "i am a note description"},
    ])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {notes.map((note, id) => (
                        <a href="https://nextjs.org/docs" className={styles.card} key={id}>
                            <h2>{note.title} &rarr;</h2>
                            <p>{note.description}</p>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default NotePreviewGrid
