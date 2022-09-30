import { useRef, useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function AddBoard () {

    const { boards, setBoards, maxBoardId, setMaxBoardId } = useContext(ThemeContext);

    const inputRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const add = () => {
        const boardTitle = inputRef.current.value;
        if (boardTitle) {
            setBoards([...boards, { id: maxBoardId, title: boardTitle }])
            setMaxBoardId(maxBoardId+1)
            inputRef.current.value = ''
        }
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={() => add()}>Submit</button>
    </form>
}

export default AddBoard