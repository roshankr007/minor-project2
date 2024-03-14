const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multer = require("multer")

const User = require("../Models/User")


//config for multer for file upload

const storage  = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/uploads/")          //store uploaded file in the "uploads" folder

    },
    filename:function(req,file,cb) {
        cb(null, file.originalname) //use the original filename
    }
})


const upload = multer({storage})


/* USER REGISTER*/
router.post("/register", upload.single('profileImage'), async(req,res) => {
    try{
        /* Take all the information from the form*/
        const {firstName, lastName, email, password } = req.body

        //the uploaded file is available as req.file
        const profileImage = req.file;

        //if they did not upload profile image:
        if(!profileImage){
            return res.status(400).send("no file uploaded")
        }

        //path to the uploaded profile photo
        const profileImagePath = profileImage.path


        //check if user exists

        const existingUser = await User.findOne({email}); //as email is unique property 

        if(existingUser){
            return res.status(409).json({message:"user already exists"})
        }

        //hash the password :
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password,salt)

        //create new user 
        const user = new User ({
            firstName,
            lastName,
            email,
            password:  hashedPassword,
            profileImage,
            })
        
        //save the new user ;
        await newUser.save();

        //send a successful mesage
        res.status(200).json({message: "user registered successfully!" , user: newUser})
    }catch (err) {
        console.log(err);
        res.status(500).json({message:"registration failed", error: err.message})
    }
});