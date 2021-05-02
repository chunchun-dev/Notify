import React, {useState} from "react";
import Editor from "@monaco-editor/react";
import ReactMarkdown from 'react-markdown'

function MarkdownEditor() {

    const [markdown, setMarkdown] = useState(`A paragraph with *emphasis* and **strong importance**.

    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

    * Lists
    * [ ] todo
    * [x] done

    A table:

    | a | b |
    | - | - |
    `)

    return (
        <div style={{
            display: 'flex',
            width: '100vw'
        }}>
            <Editor
                height="85vh"
                width="50%"
                defaultLanguage="markdown"
                defaultValue="// some comment"
                theme="vs-dark"
                value={markdown}
                onChange={(newVal)=>{setMarkdown(newVal)}}
            />
            <div style={{
                margin: '10px',
                padding: '10px'
            }}>
                <ReactMarkdown children={markdown}/>
            </div>
        </div>
    )
}

export default MarkdownEditor
