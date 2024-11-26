const express = require('express');
const router = express.Router();
const db = require('../config/db')
const {json} = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDirectory = 'uploads/';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' );
});

router.post('/api/v1/inicioSesion', function(req, res, next) {
  const { correo, pass } = req.body;
  const query = 'SELECT * FROM dulce_arelys.Usuario WHERE CorreoUsuario = ? AND ContrasenUsuario = ?'
  db.query(query, [correo, pass], function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.post('/api/v1/Registro', function(req, res, next) {
  const { Nombre, Apellido, Telefono, Correo, Pass } = req.body;
  const query = 'INSERT INTO dulce_arelys.Usuario (IdRol, NombreUsuario, ApellidoUsuario, TelefonoUsuario, CorreoUsuario, ContrasenUsuario) VALUES (  ?, ?, ?, ?, ?, ?)'
  db.query(query, [2, Nombre, Apellido, Telefono, Correo, Pass ], function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.get('/Inicio', function(req, res, next) {
  res.render('pages/Inicio' );
})

router.put('/api/v1/ActualizarUsuario', function(req, res, next) {
  const { NombreUsuario, ApellidoUsuario, TelefonoUsuario, CorreoUsuario, ContrasenUsuario, IdUsuario } = req.body;
  const TelefonoParseado = parseInt(TelefonoUsuario);
  const query = 'UPDATE dulce_arelys.Usuario SET NombreUsuario = ?, ApellidoUsuario = ?, TelefonoUsuario = ?, CorreoUsuario = ?, ContrasenUsuario = ? WHERE IdUsuario = ?'
  db.query(query, [NombreUsuario, ApellidoUsuario, TelefonoParseado, CorreoUsuario, ContrasenUsuario, IdUsuario ], function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    const query = 'SELECT * FROM dulce_arelys.Usuario WHERE CorreoUsuario = ? AND ContrasenUsuario = ?'
    db.query(query, [CorreoUsuario, ContrasenUsuario], function(err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json('error');
      }
      res.status(200).json(result);
    })
  })
})

router.get('/Pedidos-Cotizaciones', function(req, res, next) {
    res.render('pages/Pedidos_Cotizaciones');
})

router.get('/api/v1/Cotizacion', function(req, res, next) {
  const query = 'SELECT * FROM Cotizacion'
  db.query(query, function(err, result) {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result);
  })
})

router.get('/api/v1/Aceptados', function(req, res, next) {
  const query = 'SELECT * FROM Aceptados'
  db.query(query, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.delete('/api/v1/Cotizacion/:id', function(req, res, next) {
  const id = req.params.id;
  const query = 'DELETE FROM dulce_arelys.Cotizacion WHERE Id_Cotizacion = ?;'
  db.query(query, [id], function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.post('/api/v1/Aceptados', function(req, res, next) {
  const { Id_Cotizacion, IdUsuario, TamanoCotizacion, SaborCotizacion, BetunCotizacion, RellenoCotizacion, Cantidad, PrecioCotizacion, ComentariosCotizacion } = req.body;
  const query = 'DELETE FROM dulce_arelys.Cotizacion WHERE Id_Cotizacion = ?'
  db.query(query, [Id_Cotizacion], function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    const query = 'INSERT INTO dulce_arelys.Aceptados (IdUsuario, TamanoCotizacion, SaborCotizacion, BetunCotizacion, RellenoCotizacion, Cantidad, PrecioCotizacion, ComentariosCotizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    db.query(query, [IdUsuario, TamanoCotizacion, SaborCotizacion, BetunCotizacion, RellenoCotizacion, Cantidad, PrecioCotizacion, ComentariosCotizacion], function(err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json('error');
      }
      res.status(200).json(result);
    })
  })
})

router.post('/api/v1/Cotizacion', function(req, res, next) {
  const { id_Usuario, tam_Pastel, sabor_Pastel, betun_Pastel, relleno_Pastel, cantidad, pastel_Precio, pastel_Comentarios } = req.body;

  // Verificar si los datos son válidos
  if (!id_Usuario || !tam_Pastel || !sabor_Pastel || !betun_Pastel || !relleno_Pastel || !cantidad || !pastel_Precio) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  const query = 'INSERT INTO dulce_arelys.Cotizacion (IdUsuario, TamanoCotizacion, SaborCotizacion, BetunCotizacion, RellenoCotizacion, Cantidad, PrecioCotizacion, ComentariosCotizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [id_Usuario, tam_Pastel, sabor_Pastel, betun_Pastel, relleno_Pastel, cantidad, pastel_Precio, pastel_Comentarios], function(err, result) {
    if (err) {
      console.log(err); // Aquí puedes también imprimir los errores de la base de datos
      return res.status(500).json({ error: 'Hubo un error al guardar la cotización.' });
    }
    res.status(200).json({ message: 'Cotización guardada correctamente', result });
  });
});

router.get('/Existencia', function(req, res, next) {
  res.render('pages/Existencia');
})

router.get('/api/v1/Productos', function(req, res, next) {
    const query = 'SELECT p.*, e.ExistenciaProducto AS Disponibilidad FROM Producto p JOIN ExistenciaProducto e ON p.IdProducto = e.IdProducto '
  db.query(query, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.get('/Productos/:id', function(req, res, next) {
    res.render('pages/ActualizarProducto', )
})

router.get('/api/v1/Productos/:id', function(req, res, next) {
  const id = req.params.id;
  const query = 'SELECT p.*, e.ExistenciaProducto AS Disponibilidad FROM Producto p JOIN ExistenciaProducto e ON p.IdProducto = e.IdProducto WHERE p.IdProducto = ?'
  db.query(query, [id] ,function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})




router.put('/api/v1/Productos', upload.single('ImagenProducto'),function(req, res, next) {
    const { IdProducto, NombreProducto, DescripcionProducto, PrecioProducto, ExistenciaProducto } = req.body;
  const ImagenProducto = req.file ? req.file.path : null;
    const query = 'UPDATE dulce_arelys.Producto SET NombreProducto = ?, DescripcionProducto = ?, ImagenProducto = ?, PrecioProducto = ? WHERE IdProducto = ?'
    db.query(query, [NombreProducto, DescripcionProducto, ImagenProducto, PrecioProducto, IdProducto] , function(error, result) {
    if (error) {
      console.log(error)
      return res.status(500).json('error');
    }
    const query = 'UPDATE dulce_arelys.ExistenciaProducto SET ExistenciaProducto = ? WHERE IdProducto = ?'
      db.query(query, [ExistenciaProducto, IdProducto], function(error, result) {
        if (error) {
          console.log(error)
          return res.status(500).json('error');
        }
        res.status(200).json(result);
      })
  })
})


router.delete('/api/v1/Productos/:id', function(req, res, next) {
  const IdProducto = req.params.id;

  const deleteExistenciasQuery = 'DELETE FROM existenciaproducto WHERE IdProducto = ?';
  db.query(deleteExistenciasQuery, [IdProducto], function(error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json('error');
    }
    const deleteProductoQuery = 'DELETE FROM Producto WHERE IdProducto = ?';
    db.query(deleteProductoQuery, [IdProducto], function(error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json('error');
      }
      res.status(200).json(result);
    });
  });
});

router.get('/api/v1/Almacen', function(req, res, next) {
  const query = 'SELECT * FROM Almacen';
  db.query(query, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.post('/api/v1/Almacen', function(req, res, next) {
  const { IdAlmacen, NombreAlmacen, DireccionAlmacen, TelefonoAlmacen } = req.body;
  const query = 'INSERT INTO dulce_arelys.Almacen (IdAlmacen, NombreAlmacen, DireccionAlmacen, TelefonoAlmacen) VALUES ( ?, ?, ?, ?)'
  db.query(query, [IdAlmacen, NombreAlmacen, DireccionAlmacen, TelefonoAlmacen], function(error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})


router.post('/api/v1/Productos', upload.single('ImagenProducto'), function(req, res, next) {
  const { IdProducto, NombreProducto, DescripcionProducto, PrecioProducto, Cantidad, IdAlmacen } = req.body;
  const ImagenProducto = req.file ? req.file.path : null;
  const query = 'INSERT INTO dulce_arelys.Producto (IdProducto, NombreProducto, DescripcionProducto, ImagenProducto, PrecioProducto) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [IdProducto, NombreProducto, DescripcionProducto, ImagenProducto, PrecioProducto], function(error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json('error');
    }
    const query = 'INSERT INTO ExistenciaProducto (IdAlmacen ,IdProducto, ExistenciaProducto) VALUES (?, ? ,?)';
    db.query(query, [IdAlmacen, IdProducto, Cantidad], function(error, resultExistenciaProducto) {
      if (error) {
        console.log(error);
        return res.status(500).json('error');
      }
      res.status(200).json(resultExistenciaProducto);
    });
  });
});

router.get('/Usuarios', function(req, res, next) {
  res.render('pages/Usuarios');
})

router.get('/api/v1/Usuarios', function(req, res, next) {
  const query = 'SELECT * FROM Usuario'
  db.query(query, function(error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.delete('/api/v1/Usuario/:id', function(req, res, next) {
  const id = req.params.id;
  const query = 'DELETE FROM Usuario WHERE IdUsuario = ?'
  db.query(query, [id], function(error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

router.get('/Usuarios/:id', function(req, res, next) {
  res.render('pages/ActualizarUsuario')
})

router.get('/api/v1/Usuarios/:id', function(req, res, next) {
  const id = req.params.id;
  const query = 'SELECT * FROM Usuario WHERE IdUsuario = ?'
  db.query(query, [id], function(error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json('error');
    }
    res.status(200).json(result);
  })
})

module.exports = router;
