


export default function handler(req, resp) {
  // let sam = req.body.sam;
  fetch("http://localhost:3060/lolo").then((res) => {
    console.log("bien")
    resp.status(200).json(res.json())
  }).catch((err) => `l'erreur est \n ${err}`)


  
}
