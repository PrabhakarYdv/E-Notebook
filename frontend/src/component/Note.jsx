import React from 'react'
import { useState } from 'react'

function Note() {

    const [menuOpen, setMenuopen] = useState(false)

    const menuToggle = () => {
        setMenuopen(!menuOpen)
    }

    const editTask = () => {
        alert("Edit")
    }

    const deleteTask = () => {
        alert("Delete")
    }
    const completeTask = () => {
        alert("Complete")
    }


    return (
        <>
            <div className="note_card">
                <div onClick={menuToggle} className="note_options">
                    <button>&#8942;</button>
                    <div className={`options_menu ${menuOpen ? "show" : ""}`}>
                        <div onClick={editTask}>Edit</div>
                        <div onClick={deleteTask}>Delete</div>
                        <div onClick={completeTask}>Complete</div>
                    </div>
                </div>
                <div className="badge">MEDIUM</div>
                <div className="content">
                    <h3>This is titleThis is titleThis is titleThis is titleThis is titleThis is titleThis is title </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, qui porro! At nihil vitae eius fuga facere magni totam iste nisi cupiditate illum quod, non ipsum nemo quia ratione sunt atque aperiam autem. Doloremque eveniet fugit a obcaecati quis! Sit vel iste odit voluptas sequi aut iusto beatae, perferendis dolorum nemo quisquam minima, ratione molestiae architecto veritatis atque nihil facilis omnis consequuntur! Rerum aut iusto accusantium, nisi officia ea, accusamus facilis quos ipsa consectetur ullam repellendus fuga aperiam reiciendis eos pariatur libero odio! Provident et perferendis ipsa incidunt magni voluptates laboriosam sit quae tempora laudantium esse iure velit, illo dignissimos.</p>
                </div>
                
            </div>
        </>
    )
}

export default Note