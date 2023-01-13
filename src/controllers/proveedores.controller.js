import { pool } from "../db.js";

export const getProveedores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM proveedor");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
  }
};

export const getProveedor = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT * FROM proveedor WHERE idProveedor = ?", [req.params.idProveedor,]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Proveedor not found",
        });
      res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const createProveedor = async (req, res) => {
    const { nameProveedor, salaryProveedor } = req.body;
try {
    const [rows] = await pool.query("INSERT INTO proveedor(nameProveedor, salaryProveedor) VALUES (?, ?)", [nameProveedor, salaryProveedor]);
    res.send({
      idProveedor: rows.insertId,
      nameProveedor,
      salaryProveedor,
    });
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const deleteProveedor = async (req, res) => {
try {
    const result = await pool.query("DELETE FROM proveedor WHERE idProveedor = ?", [req.params.idProveedor,]);
      if (result.affectedRows <= 0)
        return res.status(404).json({
          message: "Proveedor not found",
        });  
      res.sendStatus(204);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const updateProveedor = async (req, res) => {
  const { idProveedor } = req.params;
  const { nameProveedor, salaryProveedor } = req.body;
try {
    const [result] = await pool.query("UPDATE proveedor SET nameProveedor = IFNULL(?, nameProveedor), salaryProveedor = IFNULL(?, salaryProveedor) WHERE idProveedor = ?", [nameProveedor, salaryProveedor, idProveedor]);
      console.log(result);
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Proveedor not found",
        });
      const [rows] = await pool.query("SELECT * FROM proveedor WHERE idProveedor = ?", [idProveedor]);
      res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};