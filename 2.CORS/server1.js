let express=require('express');
let app=express();
app.use(express.static(_dirname));
app.listen(3000);
