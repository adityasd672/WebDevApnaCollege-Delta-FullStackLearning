import { useState } from "react"

export default function Form() {
    
    let [formData, setFormData] = useState({
        fullname: "", 
        username: "",
        password: "",
    })

    // let handleNameChange = (event) => {

    //     console.log(event.target.value);
    //     setFullname(event.target.value)
        
    // }
    // let handleUsername = (event) => {

    //     console.log(event.target.value);
    //     setUsername(event.target.value)
        
    // }
    
    let handleInputChange = (event) => {
    
        setFormData((currData) => {
           
            return {...currData, 
                [event.target.name] : event.target.value
            };
        })
    }

    let handleSubmit  = (event) => {
        event.preventDefault();
        setFormData({
            fullname: "", 
        username: "",
        password: ""
        })
    }
    
    return (<form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name: </label>
        <input placeholder="Enter your fullname..." id="fullname" name="fullname" type="text" value={formData.fullname} onChange={handleInputChange}/>
        <br /><br />
        <label htmlFor="username">User Name: </label>        
        <input placeholder="Enter username..." id="username" name="username" type="text" value={formData.username} onChange={handleInputChange}/>
        <label htmlFor="password">User Name: </label>        
        <input placeholder="Enter password..." id="password" name="password" type="text" value={formData.password} onChange={handleInputChange}/>
        <button>Submit</button>


    </form>)
}