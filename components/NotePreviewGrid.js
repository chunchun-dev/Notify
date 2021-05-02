import React, {useState} from 'react'
import styles from '../styles/Card.module.css'
import {database} from '../firebase/firebase'

function NotePreviewGrid() {

    const [notes, setNotes] = useState([
        database.notes.doc().get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
    ])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.pagetitle}>Your Notes</h1>
                <div className={styles.grid}>
                    {notes.map((note, id) => (
                        <a href={`/editor/${id}`} className={styles.card} key={id}>
                            <h2>{note.title}</h2>
                            <p>{note.description}</p>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default NotePreviewGrid
