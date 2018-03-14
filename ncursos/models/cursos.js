module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var curso = Schema({
        descricao: { type: String, required: true },
        ch: { type: String },
        categoria: { type: String }
    });
    return mongoose.model('cursos', curso);
};
