function E2(){
    function handleClick(e){
        console.log(e.target.value);
    }
    return(
        <div>
            {/* <button onDoubleClick={handleClick}>Click here</button>
            <br></br> */}
            <input type='text' name='a1' onChange={handleClick}></input>
        </div>
    )
}
export default E2;