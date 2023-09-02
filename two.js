const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/zarana1").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
//mg.pluralize(null)
const mySchema=new mg.Schema(
    {
        name:{
            type:String,
            required:true
        },
        Surname:String,
        age:Number,
        active:Boolean,
        date:{
            type:Date,
            default:new Date()
        }
    }
);
const person=new mg.model("person",mySchema)
const updateDoc=async(i) =>
{
    // const result=await person.updateOne({_id:i},
    // {
    //     $set:{age:37}
    // })
    // const result=await person.findByIdAndUpdate({_id:i},
    //     {
    //         $set:{age:37}
    //     },
    //     {new:true})
        const result=await person.findByIdAndUpdate({_id:i},
            {
                $set:{age:27}
            },{new:true})
    console.log(result)
}  
updateDoc("64a7cd53376fc04b3c2637bd");