import './App.css'
import Button from "./components/Button.jsx";
import Bag1 from "./assets/bag_1.png";
import Bag2 from "./assets/bag_2.png";
import Bag3 from "./assets/bag_3.png";
import Bag4 from "./assets/bag_4.png";
import Product from "./components/Product.jsx";
import Brand from "./assets/brand.png";
import OurStory from "./assets/our_story.png";
import Tile from "./components/Tile.jsx";

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
                <Product
                    action="Best seller"
                    imgUrl={Bag1}
                    alt="bag1"
                    description="The handy bag"
                    price="Є400,-"
                />
                <Product
                    action="Best seller"
                    imgUrl={Bag2}
                    alt="bag2"
                    description="The stylist bag"
                    price="Є250,-"
                />
                <Product
                    action="New collection"
                    imgUrl={Bag3}
                    alt="bag3"
                    description="The simple bag"
                    price="Є300,-"
                />
                <Product
                    action="New collection"
                    imgUrl={Bag4}
                    alt="bag4"
                    description="The TRENDY bag"
                    price="Є150,-"
                />
            </main>
            <footer>
                <Tile
                    title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur consequuntur error esse
                        exercitationem explicabo ipsa ipsum laborum maiores minus modi neque nisi nostrum, numquam quam
                        quia repellat sapiente tempore?
                    </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur ex
                        praesentium quo. Eaque hic in laboriosam optio. Aliquam aut autem consectetur, fuga fugit
                        laboriosam modi! Impedit, nisi ratione!
                    </p>
                </Tile>
                <Tile
                    imgUrl={Brand}
                    alt={Brand}
                />
                <Tile
                    imgUrl={OurStory}
                    alt="Our story"
                />
                <Tile
                    title="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur consequuntur error esse
                        exercitationem explicabo ipsa ipsum laborum maiores minus modi neque nisi nostrum, numquam quam
                        quia repellat sapiente tempore?</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
