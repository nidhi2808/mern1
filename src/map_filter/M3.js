function M3(){
    const a=[1,2,3,4,5]
    return(
        <div>
            
            {
                a.map((ar)=>{
                    if(ar===3){
                        return false;
                    }else{
                    return<h2>{ar}</h2>
                    }
            })
            }
        </div>
    )
}
export default M3;