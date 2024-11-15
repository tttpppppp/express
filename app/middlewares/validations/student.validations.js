const checkEmty = (req , res , next) =>{
    const {username , age , class: className} = req.body;
    if(username && age && className){
        next();
    }else{
       res.status(404).send("Không được để trống username , age , class: className")
    }
}

module.exports = {checkEmty}