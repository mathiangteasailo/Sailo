    export default function handler(req, res) {
      if (req.method === "POST") {
        res.status(200).json({status: "success", token: "fake_token_123456"})
      }
    }
