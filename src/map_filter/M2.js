
function M2(){
    const student=[{id:1,name:'diya'},{id:2,name:'dhrumi'}]
    return(
        <>
        <ul>
            {
                student.map((s)=>{
                    return <li>{s.name}</li>
                })
            }
        </ul>
        </>
    )
}
export default M2;