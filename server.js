const app = require('./App/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runing in http://localhost:${PORT}`));
