const dbConnection = require("./sqlite");
const testBase = require("../backend/test/testBase");
dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
  _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
  testBase.resetDatabase(knex_db);
};

//ReadTeachers Created.
const readTeachers = async () => {
  const sql = `SELECT * FROM teacher`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql)
      .then((teachers) => {
        resolve(teachers);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//TeacherFunctionInfo Created
const readTeacherInfo = async (id) => {
  const sql = `SELECT * FROM teacher WHERE id = ?`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [id])
      .then((teacher) => {
        resolve(teacher);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
//Add Teacher Function Created.
const addTeacher = async (id, name, age) => {
  const sql = `INSERT INTO teacher(id,name,age) values (?, ?, ?)`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [id, name, age])
      .then(() => {
        resolve({ status: "Successfully inserted Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//UpdateTeacher Function Created.
const updateTeacher = async (name, age, id) => {
  const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [name, age, id])
      .then(() => {
        resolve({ status: "Successfully updated Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
//DeleteTeacher Function Created.
const deleteTeacher = async (id) => {
  const sql = `DELETE FROM teacher WHERE id = ?`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [id])
      .then(() => {
        resolve({ status: "Successfully deleted Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//================================Student=======================

//ReadStudent Funtion Created.
const readStudents = async () => {
  const sql = `SELECT * FROM student`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql)
      .then((student) => {
        resolve(student);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//ReadStudentInfo Function Created.
const readStudentInfo = async (id) => {
  const sql = `SELECT * FROM student WHERE id = ?`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [id])
      .then((student) => {
        resolve(student);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
//AddStudent Function Created.
const addStudent = async (id, name, age, hometown) => {
  const sql = `INSERT INTO student(id,name,age,hometown) values (?, ?, ?,?)`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [id, name, age, hometown])
      .then(() => {
        resolve({ status: "Successfully inserted Student" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//UpdateStudent function Created.
const updateStudent = async (name, age, hometown, id) => {
  const sql = `UPDATE student SET name=?, age=?,hometwon=? WHERE id=?`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql, [name, age, hometown, id])
      .then(() => {
        resolve({ status: "Successfully updated Student" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteStudent = async (id) => {
  const sql = `DELETE FROM student WHERE id = ?`;
  return new Promise((resolve, reject) => {
    knex_db
      .raw(sql,[id])
      .then(() => {
        resolve({status:"Successfully deleted Student"});
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  readTeachers,
  readStudents,
  addStudent,
  addTeacher,
  deleteTeacher,
  deleteStudent,
  readStudentInfo,
  readTeacherInfo,
  updateStudent,
  updateTeacher,
  dbinitialize,
};
