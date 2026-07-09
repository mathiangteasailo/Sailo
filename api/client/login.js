export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      status: "success", 
      message: "Activated",
      token: "bypass_token_999"
    })
  }
}
