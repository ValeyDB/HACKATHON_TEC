// ╔══════════════════════════════════════════════════════════════╗
// ║                        LIBRARIES                            ║
// ╚══════════════════════════════════════════════════════════════╝
console.log("Starting server...");
  const express = require('express'); 
  const mysql = require('mysql2'); // Using mysql2 for MySQL 8.0 compatibility
  const cors = require('cors');
  console.log("All libraries loaded successfully.");

  const app = express(); 
  const port = 3000;  

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse extended URLs

console.log("Connecting to MySQL database...");

// ╔══════════════════════════════════════════════════════════════╗
// ║                  MYSQL CONNECTION SETUP                     ║
// ╚══════════════════════════════════════════════════════════════╝
let conexion = mysql.createConnection({ 
  host: "localhost",
  user: "root",
  password: "cisco", 
  database: "MIT_TEC_HACKATON"
});

conexion.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
})

// ╔══════════════════════════════════════════════════════════════╗
// ║                  AUTHORIZATION MIDDLEWARE                    ║
// ╚══════════════════════════════════════════════════════════════╝
function Authorization(req, res, next){
  const claveAcceso = req.headers.authorization; 
  if(claveAcceso === "123456"){ 
    next(); 
  }else{
    res.send("You are not authorized to access this resource.");
  }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║                        ROUTES                                ║
// ╚══════════════════════════════════════════════════════════════╝

// ╔═══════ ROUTE: GET /students (dashboard of students) ═══════╗
app.get('/students', Authorization, (req, res) => {});

// ╔═══════ ROUTE: POST /login (User login) ═══════╗
app.post('/login', (req, res) => {
  const {username, password} = req.body; 
  console.log(`Login attempt with username: ${username} and password: ${password}`);
  const sql = `SELECT * FROM users WHERE namee = ? AND pass = ?`;
  conexion.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Error in database query' });
    }
    if (result.length > 0) {
      const user = result[0]; // Takes the first user found and stores it in a variable.
      res.json({
        success: true,
        role: user.role,
        name: user.namee
      });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.get('/sensor-data', Authorization, (req, res) => {
  const role = req.user.role;
  if (role !== 'empresa' && role !== 'profesor') {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  const sql = 'SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT 50';
  conexion.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error en la base de datos' });
    res.json(result);
  });
});

app.post('/upload-sensor', (req, res) => {
  const { temperature, humidity } = req.body;
  const sql = 'INSERT INTO sensor_data (temperature, humidity) VALUES (?, ?)';
  conexion.query(sql, [temperature, humidity], err => {
    if (err) return res.status(500).json({ message: 'Error al guardar datos' });
    res.json({ success: true });
  });
});


// ╔══════════════════════════════════════════════════════════════╗
// ║                        SERVER LISTEN                         ║
// ╚══════════════════════════════════════════════════════════════╝
app.listen(port, () => {
  console.log(`API online at http://localhost:${port}`);
});