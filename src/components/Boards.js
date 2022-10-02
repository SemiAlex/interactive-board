import { Profiler, useContext, useEffect   } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import AddBoard from "./AddBoard"
import RemoveBoard from "./RemoveBoard"


function Boards() {
    const { boards, setBoards, maxBoardId, setMaxBoardId, profile } = useContext(ThemeContext)

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('boards'));
        if (arr) {
            setBoards(arr);
        }
        const maxboard = JSON.parse(localStorage.getItem('maxboard'));
        maxboard > 0 ? setMaxBoardId(maxboard) : setMaxBoardId(0)
    }, []);

    useEffect(() => {
        localStorage.setItem(`boards`, JSON.stringify(boards));
    }, [boards]);

    useEffect(() => {
        localStorage.setItem(`maxboard`, JSON.stringify(maxBoardId));
    }, [maxBoardId]);



    return <div className="d-flex justify-content-center align-items-center h-100 w-100 text-center">
        {profile.email ? <div>
            {boards.map(board => <div className="m-2 p-2 hover-shadow d-flex justify-content-between align-items-center yellow " key={board.id}>
                <Link to={`/board-${board.title}-${board.id}`} className='link-none display-6' >
                    {board.title}
                </Link>
                <RemoveBoard id={board.id} title={board.title} />
            </div>)}
            <AddBoard />
        </div> : <div className='display-6 px-2'>
            <p>
                You need to register to create boards.
            </p>
            <Link to='../registration' className="link-none text-nowrap hover-shadow ">
                Get started
            </Link>
        </div>}
    </div>
}

export default Boards