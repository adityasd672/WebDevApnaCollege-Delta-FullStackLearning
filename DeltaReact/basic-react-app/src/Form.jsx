
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
    
}

export default function Form() {

    return (
        <form action="" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write something"/>
            <button>Submit</button>

        </form>

    )
}