const express = require("express");
const app = express();
const port = 4000;
app.use(express.json())
const data = [
  {
    id: "0",
    driver: "Ed shiran",
    passenger: "Shaul Shauli",
    from: "Ben Zion St.12 Tel Aviv",
    to: "Weizmann St. 6 Ramat Gan",
    status: "Pending",
  },

  {
    id: "1",
    driver: "Miky Jannet",
    passenger: "Simcha Stern",
    from: "Ben Zion St.12 Tel Aviv",
    to: "Weizmann St. 6 Ramat Gan",
    status: "Rolling",
  },

  {
    id: "2",
    driver: "Tamir Abutbul",
    passenger: "Bar Cohen",
    from: "Ben Zion St.12 Tel Aviv",
    to: "Weizmann St. 6 Ramat Gan",
    status: "Complete",
  },

  {
    id: "3",
    driver: "Adi Unger",
    passenger: "Shaul Hanavi",
    from: "Ben Zion St.12 Tel Aviv",
    to: "Weizmann St. 6 Ramat Gan",
    status: "Pending",
  },

  {
    id: "4",
    driver: "Yuval David",
    passenger: "Israel Israeli ",
    from: "Ben Zion St.12 Tel Aviv",
    to: "Weizmann St. 6 Ramat Gan",
    status: "Rolling",
  },

  {
    id: "5",
    driver: "Noa Kirel",
    passenger: "Yona Shauli",
    from: "Ben Zion St.12 Tel Aviv",
    to: "Weizmann St. 6 Ramat Gan",
    status: "Complete",
  },
];

app.post("/update-status", (req, res) => {
    const index = data.findIndex((item) => item.id === req.body.id)
    data[index].status = req.body.status
     res.send({data});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
