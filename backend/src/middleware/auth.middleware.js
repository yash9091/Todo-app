const auth= (req, res, next) => {
  if(!req.session.userId){
    return res.status(401).json({messae:"Unauthorized"})
  }
  next()

}
module.exports = auth