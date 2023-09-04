const mysql = require('mysql');
const dbconfig = require('../config/config.js');
const connection = mysql.createConnection(dbconfig);

exports.getPages = (req, res) => {
   let breadQuery = '';
   try {
      breadQuery += `WITH RECURSIVE FindParent AS (`;
      breadQuery += ` SELECT id,title,content, parent_id, CAST(title AS CHAR(200)) AS breadcrumbs FROM pages`;
      breadQuery += ` WHERE parent_id IS NULL UNION ALL `;
      breadQuery += `SELECT p.id, p.title, p.content, p.parent_id, CONCAT(ph.breadcrumbs, ' > ', p.title)`;
      breadQuery += ` FROM pages AS p INNER JOIN FindParent  AS ph ON p.parent_id = ph.id )`;

      breadQuery += `SELECT p.id, p.title, p.content, GROUP_CONCAT(child.id) AS child_pages, ph.breadcrumbs`;
      breadQuery += ` FROM pages AS p  LEFT JOIN FindParent AS ph ON p.id = ph.id LEFT JOIN pages AS child`;
      breadQuery += ` ON p.id = child.parent_id where p.id=${req.params.id}`;
      breadQuery += ` GROUP BY p.id, p.title, p.content, ph.breadcrumbs  ORDER BY p.id;`;

      connection.query(breadQuery, (error, rows, fields) => {
         if (error) throw error;
         res.json(rows);
      });
   } catch (err) {
      console.error(err);
   }
};
