import './App.css'
import Button from "./components/Button.jsx";
import Bag1 from "./assets/bag_1.png"
import Bag2 from "./assets/bag_2.png"
import Bag3 from "./assets/bag_3.png"
import Bag4 from "./assets/bag_4.png"

function clickHandler(e) {
    console.log(e.target);
}

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    text="to the collection"
                    onClickHandle={clickHandler}
                />
                <Button
                    text="shop all bags"
                    onClickHandle={clickHandler}
                />
                <Button
                    text="shop all bags"
                    disabled={true}
                    onClickHandle={clickHandler}
                />
            </nav>
            <main>
                <article>
                    <span>Best seller</span>
                    <img src={Bag1} alt="bag1"/>
                    <p>The handy bag</p>
                    <h4>Є400,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={Bag2} alt="bag2"/>
                    <p>The stylist bag</p>
                    <h4>Є250,-</h4>
                </article>
                <article>
                    <span>New collection</span>
                    <img src={Bag3} alt="bag3"/>
                    <p>The simple bag</p>
                    <h4>Є300,-</h4>
                </article>
                <article>
                    <span>New collection</span>
                    <img src={Bag4} alt="bag4"/>
                    <p>The trendy bag</p>
                    <h4>Є150,-</h4>
                </article>
            </main>
        </>
    )
}

export default App
