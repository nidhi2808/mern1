const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/zarana1").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
//mg.pluralize(null)
const mySchema=new mg.Schema(
    {
        name:String,
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
// const personData=new person({
//     name:"zarana",
//     Surname:"Gajjar",
//     age:30,
//     active:true
// })

//personData.save() // also return promise

const createDoc=async()=>
{
    try{
        const personData=new person({
            name:"Appu",
            Surname:"XYZ",
            age:3,
            active:true
        })
        const result=await personData.save(); //for single data record
        console.log(result);
    }
    catch(err)
    {
        console.log("problem");
    }
}
createDoc();
