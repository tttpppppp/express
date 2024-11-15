const logFeature  = (req , res , next) => {
    console.log("Lấy danh sách student....");
    next();
}

module.exports = {logFeature}