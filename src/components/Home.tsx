
import { AiFillDelete } from 'react-icons/ai'



const Home = () => {
    return (
        <div className="todo-container">
            <h1>Designed using typescript</h1>

            <div className="todo-box">
                <h2>Your Todos</h2>
                <div className="todos">
                    <div className="todo-items">
                        <ol className="item-parent">
                            <div className="item-cont">
                                <li className="item">Orders</li>
                                <AiFillDelete className="delete" />
                            </div>
                            <div className="item-cont">
                                <li className="item">Orders</li>
                                <AiFillDelete className="delete" />
                            </div>
                            <div className="item-cont">
                                <li className="item">Orders</li>
                                <AiFillDelete className="delete" />
                            </div>
                            <div className="item-cont">
                                <li className="item">Orders</li>
                                <AiFillDelete className="delete" />
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
