import {useState} from "react"
function F1() {
    const [n, setN] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        alert("The Name is "+n)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Enter Name
            <input type="text" value={n} onChange={(event)=>setN(event.target.value)}/>
            </label>
            <input type='submit'/>
       
        </form>
    )
}
export default F1