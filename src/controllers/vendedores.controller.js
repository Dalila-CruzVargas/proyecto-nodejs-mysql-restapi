import { pool } from "../db.js";

export const getVendedores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM vendedor");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
  }
};

export const getVendedor = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT * FROM vendedor WHERE idVendedor = ?", [req.params.idVendedor,]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Vendedor not found",
        });
      res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const createVendedor = async (req, res) => {
    const { nameVendedor, salaryVendedor } = req.body;
try {
    const [rows] = await pool.query("INSERT INTO vendedor(nameVendedor, salaryVendedor) VALUES (?, ?)", [nameVendedor, salaryVendedor]);
    res.send({
      idVendedor: rows.insertId,
      nameVendedor,
      salaryVendedor,
    });
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const deleteVendedor = async (req, res) => {
try {
    const result = await pool.query("DELETE FROM vendedor WHERE idVendedor = ?", [req.params.idVendedor,]);
      if (result.affectedRows <= 0)
        return res.status(404).json({
          message: "Vendedor not found",
        });  
      res.sendStatus(204);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const updateVendedor = async (req, res) => {
  const { idVendedor } = req.params;
  const { nameVendedor, salaryVendedor } = req.body;
try {
    const [result] = await pool.query("UPDATE vendedor SET nameVendedor = IFNULL(?, nameVendedor), salaryVendedor = IFNULL(?, salaryVendedor) WHERE idVendedor = ?", [nameVendedor, salaryVendedor, idVendedor]);
      console.log(result);
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Vendedor not found",
        });
      const [rows] = await pool.query("SELECT * FROM vendedor WHERE idVendedor = ?", [idVendedor]);
      res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};
