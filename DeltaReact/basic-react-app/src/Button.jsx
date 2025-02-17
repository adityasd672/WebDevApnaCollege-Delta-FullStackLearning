
function handleClick(event) {
    console.log("Hello!");
    console.log(event);
    
}

function mouseOver() {
    console.log("Bye!");
    
}

function handleDblClick() {
    console.log("you double clicked");
    
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={mouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolores doloremque ipsa doloribus distinctio hic tempora praesentium reiciendis quae vitae.</p>
            <button onDoubleClick={handleDblClick}>Double Click me!</button>
        </div>

    )
}