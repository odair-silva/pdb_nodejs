function MedicosDAO(connection) {
    this._connection = connection;
}

MedicosDAO.prototype.listaMedicos = function(callback) {
    this._connection.query('select * from medicos', callback);
}

MedicosDAO.prototype.medicosCadastra = function(medico, callback) {
    this._connection.query('INSERT INTO medicos SET ?', medico, callback);
}

MedicosDAO.prototype.medicosDeleta = function(callback) {
    this._connection.query('DELETE FROM medicos', callback);
}

module.exports = function(){
    return MedicosDAO;
};
