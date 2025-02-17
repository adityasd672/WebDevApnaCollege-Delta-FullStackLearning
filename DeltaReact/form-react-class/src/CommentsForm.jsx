import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty';
    } 
    if (!values.remarks) {
      errors.remarks = 'Remarks cannot be empty';
    } 
    if (!(values.rating >= 1 && values.rating <= 5)) {
      errors.username = 'Rating must be between 1 & 5.';
    } 
  
    
  
    return errors;
  };

export default function CommentsForm({addNewComment}) {

    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // })

    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    let [isValid, setIsValid]  = useState(true);

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name]: event.target.value}
    //     })
    // }

    // let handleSubmit = (event) => {
    //     if(!formData.username) {
    //         console.log("username is null");
    //         setIsValid(false);
    //         event.preventDefault();
    //         return;
    //     }
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     })

    // }
    return (<div>
            <h4>Give a comment!</h4>

            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Enter Username: </label>
                <input type="text" placeholder="username" name="username" value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}
                <br /><br />
                <label htmlFor="remarks">Enter Remarks: </label>
                <textarea name="remarks" id="remarks" value={formik.values.remarks} placeholder="add few remarks" onChange={formik.handleChange}></textarea>
                {formik.errors.remarks ? <div style={{color: "red"}}>{formik.errors.remarks}</div> : null}
                <br /><br />
                <label htmlFor="rating">Enter rating: </label>
                <input type="number" name="rating" placeholder="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/>
                {formik.errors.rating ? <div style={{color: "red"}}>{formik.errors.rating}</div> : null}
                <br /><br />
                <button type="submit">Add comment</button>

            </form>
        
        </div>)
}