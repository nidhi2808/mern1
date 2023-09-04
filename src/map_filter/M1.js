function Map(){
    const a=['b','c','d','e','f','g']
    return(
        <div>
            <h1>Uppercase</h1>
            {
                a.map((ar)=>{
                    return<h2>{ar.toUpperCase()}</h2>
            })
            }
        </div>
    )
}
export default Map;