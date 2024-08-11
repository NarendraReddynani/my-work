// import http from 'http'

// const port = 3000;

// const server = http.createServer((req, res) => {

//     if (req.url === '/myself') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/plain");
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\t\tRESUME\n\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tINDIA.ANDRA PRADESH.narendrareddymeruva@gmail.com.9059017447\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\t\tPROFILE SUMMARY\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\tNAME             :M.Narendra Reddy\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tDATE OF BIRTH    :07-03-2006\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tFATHER NAME      :M.Nageswara Reddy\n") 
//         res.write("\t\t\t\t\t\t\t\t\t\tLANGUAGES KNOWN  :Telugu,Hindi,English\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tNATIONALITY      :Indian\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tADDRESS          :Door.no-51,balaji meadows,nandikotkur road kurnool\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\t\tEDUCATIONAL QUALIFICATIONS\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\t\t\t\t\t\t\t\t2023-2027:B-Tech(computer science engineering),SRKR engineering college,Bhimavaram\n")
//         res.write("\t\t\t\t\t\t\t\t2021-2023:Intermediate,Narayana junior college,kurnool\n")
//         res.write("\t\t\t\t\t\t\t\t2020-2021:SSC,Narayana high school,kurnool\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\tSOFTWARE PROFICIENCY\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\tDBMS             :sql,oracle,mongodb\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tWED DESIGNING    :html,css,javascript\n")
//         res.write("\t\t\t\t\t\t\t\t\t\tOPERATING SYSTEMS:ms-Dos,windows xp\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\tPERSONAL SKILLS\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\tcomprehensive,problem solving abilities,excellent verbal and written cumminication skills\n\t\t\t\t\t\t\t\t\t\t\tAbility to deal with people diplomatically\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\tWORK EXPERIENCE\n\n")
//         res.write("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\tworking as a trainee software engineer in wipro technolies for 2 years,current working  for a project \n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\t\t\t\t\t\t\t\tDECLARATION\n\n")
//         res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
//         res.write("\n\t\t\t\t\tI hear by declare that the above information provide is true about my knowledge if it is proved wrong i will be responsible\n")
//         res.end()
//     }

//     else if (req.url === '/html') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html");
// res.write("<body style='background-color:rgb(241,243,98);'>");
// res.write("<h1 style='font-weight: bold; color:black; text-align:center;'>RESUME</h1>\n");
// res.write("<h3 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'><u>INDIA. ANDHRA PRADESH</u> <u> <a href=\"mailto:narendrareddymeruva@gmail.com\">narendrareddymeruva@gmail.com</a></u> <u>phone: 9059017447</u></h3>\n");
// res.write("<h3 style='color:white; font-weight:bold; text-align: center;margin-top: 20px; background-color:black'>PROFILE SUMMARY</h3>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>NAME             : M. Narendra Reddy</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>DATE OF BIRTH    : 07-03-2006</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>FATHER NAME      : M. Nageswara Reddy</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>LANGUAGES KNOWN  : Telugu, Hindi, English</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>NATIONALITY      : Indian</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>ADDRESS          : Door no-51, Balaji Meadows, Nandikotkur Road, Kurnool</h4>\n");
// res.write("<h3 style='color:white; font-weight:bold; text-align: center;margin-top: 20px; background-color:black'>EDUCATIONAL QUALIFICATIONS</h3>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>2023-2027: B-Tech (Computer Science Engineering), SRKR Engineering College, Bhimavaram</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>2021-2023: Intermediate, Narayana Junior College, Kurnool</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>2020-2021: SSC, Narayana High School, Kurnool</h4>\n");
// res.write("<h3 style='color:white; font-weight:bold; text-align: center;margin-top: 20px; background-color:black'>SOFTWARE PROFICIENCY</h3>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>DBMS             : SQL, Oracle, MongoDB</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>WEB DESIGNING    : HTML, CSS, JavaScript</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>OPERATING SYSTEMS: MS-DOS, Windows XP</h4>\n");
// res.write("<h3 style='color:white; font-weight:bold; text-align: center;margin-top: 20px; background-color:black'>PERSONAL SKILLS</h3>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>Comprehensive problem-solving abilities</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>Excellent verbal and written communication skills</h4>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>Ability to deal with people diplomatically</h4>\n");
// res.write("<h3 style='color:white; font-weight:bold; text-align: center;margin-top: 20px; background-color:black'>WORK EXPERIENCE</h3>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>Working as a trainee software engineer in Wipro Technologies for 2 years, currently working on a project</h4>\n");
// res.write("<h3 style='color:white; font-weight:bold; text-align: center;margin-top: 20px; background-color:black'>DECLARATION</h3>\n");
// res.write("<h4 style='color:black; font-weight:bold; text-align: center;margin-top: 10px;'>I hereby declare that the above information provided is true to the best of my knowledge. If it is proven wrong, I will be responsible.</h4>\n");
// res.write("</body>");
// res.end();
        
//     }

//     else if (req.method === 'POST' && req.url === '/recivedata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });
//         console.log(body)
//         res.end()
//     }

//     else if (req.url === '/senddata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         const data=[{
//             profile:{
//             NAME:"M.Narendra Reddy",
//             DATEOFBIRTH:"03-07-2006",
//             FATHERNAME:"Nageswara Reddy",
//             LANGUAGESKNOWN:["Telugu","Eglish","hindi"],
//             NATIONALITY:"india",
//             ADDRESS:"Door.no-51,balaji meadows,nandikotkur road kurnool"
//             },
//            educationDetails: [
//             {
//                 period:"2023-2027",
//                 qualification:"Btech CSE",
//                 Instituation:"SRKREC,bhimavaram"
//            },
//            {
//             period:"2021-2023",
//             qualification:"Btech CSE",
//             Instituation:"Narayana junior college,kurnool"
//            },
//           {
//             period:"2020-2021",
//             qualification:"SSC",
//             Instituation:"Narayana high school,kurnool"
//          }],

//          softwareProficiency:
//           {
//             LANGUAGESKNOWN:["C","C++","Python"],
//             DBMS:["SQL","ORACLE 8","MONGODB"],
//             WEBDESIGNING:["html","css","js"],
//             OPERATINGSYSTEMS:["MS-Dos","windows XP"]
//           },
//           personalSkills:["problrem solving skills","excellent verbal and communicative skills","dealing with deplomatic people"],
//           workexperience:["worked as a tainee engineer in wipro pvt.ltd for two years","currently working for a project"],
//           declaration:["I hear by declare that the above information provide is true about my knowledge if it is proved wrong i will be responsible"],
//         }];
//         res.end(JSON.stringify(data))
//     }

//     else {
//         res.statusCode = 400
//         res.end("Page Not Found\n")
//     }
// });

// server.listen(port, () => {
//     console.log('Server running at ${port}');
// });

import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({name:"nani",age:"19"});
})
app.post('/', async(req,res) => {
    await db.collection("members").find().toArray()
    .then((result)=>{
        res.json(result);
    })
    .catch((e)=>console.log(e))
})
connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})
app.post('/nani', async(req,res) => {
    await db.collection("members").insertOne({Email:req.body.Email,Password:req.body.Password})
    .then((result)=>{
        res.json(result);
    })
    .catch((e)=>console.log(e))
})
app.post('/login',async (req,res)=>{
    const found=await db.collection('members').findOne({Email:"nani@gmail.com",Password:"123"})
    if(found){
    console.log("login successful");
    res.json("login successful");
    }
    else{
        console.log("login failed");
        res.json("login failed");
    }

})

// app.post('/', async(req,res) => {
//     await db.collection("members").find({age:{$gte:30}}).toArray()
//     .then((result)=>{
//         res.json(result);
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/age',async (req,res)=>{
//     const found=await db.collection('members').findOne({age:{$gte:30}})
//     if(found){
//     console.log("successful");
//     res.json(found);
//     }
//     else{
//         console.log("failed");
//         res.json("not found");
//     }
// )

//     .catch((e)=>console.log(e))
// })

//  })
// app.post('/signin', async(req,res) => {
//    await db.collection("members").findOne({Emial:req.body.email})
//    .then((result)=>{
//    if(result?.Password===req.body.password)
//     {
//        res.json({message:"login successfully",values:result});
//     }
//     else{
//        res.json({error:"login failed"});

//     }
// } 
// )

//     .catch((e)=>console.log(e))
// })
app.post('/signin', async (req, res) => {
    try {
        const result = await db.collection("members").findOne({ Email: req.body.email });

        if (!result) {
            return res.json({ error: "Email not found. Please sign up." });
        }

        if (result.Password === req.body.password) {
            res.json({ message: "Login successfully", values: result });
        } else {
            res.json({ error: "Incorrect password. Please try again." });
        }
    } catch (e) {
        console.log(e);
        res.json({ error: "An error occurred during login. Please try again later." });
    }
});

// app.post('/signup', async(req,res) => {
//     await db.collection("members").insertOne({Name:req.body.name,Mobilenumber:req.body.mobilenumber,DateOfBirth:req.body.dateofbirth,Email:req.body.email,Password:req.body.password})
//     .then((result)=>{
//     if(!req.body.name || !req.body.mobilenumber || !req.body.dateofbirth || !req.body.email || !req.body.password)
     
//         res.status(400).json({ error: "All fields are required." });
     
//      else{
//         res.json({message:"login successfull",values:result});
//      }
//  } 
// )

//     .catch((e)=>console.log(e))
// })
app.post('/signup', async (req, res) => {
    const { name, mobilenumber, dateofbirth, email, password } = req.body;
    console.log(req.body);
    if (!name || !mobilenumber || !dateofbirth || !email || !password) {
        return res.json({ error: "All fields are required." });
    }

    try {
        // Check if email already exists
        const existingUser = await db.collection("members").findOne({ Email: email });
        if (existingUser) {
            return res.json({ error: "Email already exists. Please enter another email." });
        }

        // If email does not exist, proceed with signup
        const result = await db.collection("members").insertOne({
            Name: name,
            Mobilenumber: mobilenumber,
            DateOfBirth: dateofbirth,
            Email: email,
            Password: password
        });

        res.json({ message: "Signup successful", values: result });
    } catch (e) {
        console.log(e);
        res.json({ error: "An error occurred while signing up." });
    }
});

app.post('/students', async (req, res) => {
    await db.collection("members").find().toArray()
    .then((result)=>{
        res.send(result);
    }
    )
    .catch((e)=>console.log(e))
})


app.post('/update', async (req, res) => {
    try {
        await db.collection("members").findOne({ Email: req.body.email });
        console.log(result)
        if (!result) {
            return res.json({ error: "Email not found." });
        }

        if (result.Password === req.body.current) {
            console.log(result)
            if (req.body.newpassword === req.body.confirm) {
                await db.collection("members").updateOne(
                    { Email: req.body.email },
                    { $set: { Password: req.body.newpassword } }
                );

                return res.json({ message: "Password updated successfully", values: result });
            } else {
                return res.json({ error: "New password and confirmation do not match." });
            }
        }
         else {
            return res.json({ error: "Incorrect old password. Please try again." });
        }
    } catch (e) {
        console.log(e);
        return res.json({ error: "An error occurred during the update. Please try again later." });
    }
});














