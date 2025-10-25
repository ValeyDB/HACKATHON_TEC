# HACKATHON_TEC
Código de dashboard para proyecto de hackathon en el Tec de Monterrey. Palabra Clave: INVERNADERO

ESTILOS DE CCS: background: linear-gradient(135deg, #019d71 0%, #019d71 100%); min-height: 100vh; /Lo de arriba es color de background/

/* CONTENEDORES PRINCIPALES */

.container { background: #d0e08d; /Color de fondos legibles/ backdrop-filter: blur(10px); padding: 25px; border-radius: 12px; box-shadow: 0 8px 32px #7a864f; /Color de sombra de cajas/ margin-bottom: 20px; border: 1px solid #036842; /Color de bordes/ transition: transform 0.3s ease, box-shadow 0.3s ease; }

.container:hover { transform: translateY(-2px); box-shadow: 0 12px 40px #025233; /Sombras de cajas/ }

/* TIPOGRAFÍA */

h1 { color: #172015; /Color de texto/ text-align: center; margin-bottom: 30px; font-size: 2.5rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); background: linear-gradient(45deg, #f09109, #f0bf08); /Color de highlights/ -webkit-background-clip: text; background-clip: text; }

h2 { color: #172015; /* Color de texto*/ border-bottom: 3px solid #f09109; padding-bottom: 12px; margin-bottom: 20px; font-size: 1.5rem; position: relative; }

h2::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 50px; height: 3px; background: linear-gradient(45deg, #e74c3c, #f39c12); /Color de Highlights super/ border-radius: 2px; }

/* FORMULARIOS */

.form-group { margin-bottom: 18px; }

label { display: block; margin-bottom: 6px; font-weight: 600; color: #e0f19c; /Color de background2 = legible para background legible/ font-size: 0.95rem; }

input, textarea, select { width: 100%; padding: 12px 15px; border: 2px solid #cada8a; /Bordes para background2/ border-radius: 8px; font-size: 14px; font-family: inherit; transition: all 0.3s ease; background: #e0f19c; }

/* BOTONES */

button { background: linear-gradient(45deg, #007c34, #003817); /Combinación para botones/ color: #e0f19c; /Letras de relleno para botones/ padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; margin: 8px 5px; transition: all 0.3s ease; box-shadow: 0 4px 15px #022e14; /Sombra para botones/ position: relative; overflow: hidden; }

button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px #008136; /Luz de botones/ }

.btn-warning { background: linear-gradient(45deg, #f39c12, #e67e22); /Variante amarilla de botones/ box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3); }
