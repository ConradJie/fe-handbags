import './App.css'
import Button from "./components/Button.jsx";

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
        </>
    )
}

export default App
