var expr=require('express');
var app=expr()
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/zarana1").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
// const path=require("path");
// const staticPath=path.join(__dirname,"../Public");
app.use(expr.static(__dirname,{index:"two.html"}));
app.get("/check",(req,res)=>
{
    const response={
        u:req.query.uname,
        p:req.query.pwd
    };
    const mySchema=new mg.Schema(
        {
            name:{
                type:String,
                required:true
            },
            password:String
        }
    );
    const person=new mg.model("employe2",mySchema)
    const createDoc=async()=>
{
    try{
        const personData=new person({
            name:response.u,
            password:response.p,
        })
        const result=await personData.save();
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}
createDoc();
})

app.listen(8000,()=>
{
    console.log("server running at 8000");
});