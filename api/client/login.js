export default function handler(req, res) {
  if (req.method === "POST") {
    const { key } = req.body; 

    
    if(key){ 
      res.status(200).json({
        status: "success", 
        message: "Activated",
        key: key
        token: "activated_token_999"
      })
    } else {
      res.status(400).json({status: "error", message: "No key provided"})
    }
  }
}
