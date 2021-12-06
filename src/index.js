import {fileURLToPath} from "url";
import path from "path";
import {dirname } from "path";
import {engine} from "express-handlebars";
import express, { json, urlencoded } from "express";
import route from "./routes/index.js";
const app = express();
const port = 3000;
// Lấy directory thư mục
const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);
//urlencoded dùng cho việc body parser submit form
app.use(urlencoded({
    extended:true
}))
// app.use(static(path.join(__dirname,'public')))
// json dùng cho việc post data dạng fetch,axios,ajax
app.use(json());
// middleware dùng để bắt resquest và response giữa client and server
// app.use(morgan('combined'))
// tạo handlebars và config đuôi file
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
