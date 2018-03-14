module.exports = function (app) {
    var mongoose = require('mongoose');
    var Usuario = mongoose.model('usuarios');

    var HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        login: function (req, res) {
            var nome = req.body.usuario.nome;
            var senha = req.body.usuario.senha;

            var query = { 'nome': nome, 'senha': senha };

            Usuario.findOne(query).select('nome senha')
                .exec(function (erro, usuario) {
                    if (erro) {
                        res.redirect('/');
                    }
                    else {
                        req.session.usuario = usuario;
                        res.redirect('/menu');
                    }
                });
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        },
        novoUsuario: function (req, res) {
            var nome = req.body.usuario.nome;
            var senha = req.body.usuario.senha;
            var confirma = req.body.usuario.confirma;

            if ((senha != confirma) || nome.trim().length == 0) {
                res.redirect('/');
            }

            else {
                var usuario = req.body.usuario;
                Usuario.create(usuario, function (erro, usuario) {
                    if (erro) {
                        res.redirect('/');
                    }
                    else {
                        res.redirect('/menu');
                    }
                });
            }
        }
    };
    return HomeController;
};