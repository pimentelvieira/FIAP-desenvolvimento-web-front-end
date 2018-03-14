module.exports = function (app) {
    var Evento = app.models.eventos;
    var EventosController = {
        menu: function (req, res) {
            var usuario = req.session.usuario,
                params = { usuario: usuario };
            res.render('eventos/menu', params);
        },
        cadastroUsuario: function (req, res) {
            var usuario = req.session.usuario,
                params = { usuario: usuario };
            res.render('eventos/cadUsuario', params);
        },
        cadastroEvento: function (req, res) {
            var usuario = req.session.usuario,
                params = { usuario: usuario };
            res.render('eventos/cadEvento', params);
        },
        listaEventos: function (req, res) {
            Evento.find(function (erro, eventos) {
                if (erro) {
                    res.render('/menu');
                }
                else {
                    var usuario = req.session.usuario,
                        params = { usuario: usuario, eventos: eventos };
                    res.render('eventos/listaEventos', params);
                }
            });
        },
        novoEvento: function (req, res) {
            var descricao = req.body.evento.descricao;
            var data = req.body.evento.data.split('/');

            var objDate = new Date(data[2], data[1] - 1, data[0]);
            var responsavel = req.body.evento.responsavel;

            if (descricao.trim().length == 0 || data == 'undefined'
                || responsavel.trim().length == 0) {
                    console.log('1');
                    res.redirect('/cadEvento');
            }
            else {
                var evento = {descricao: descricao, data: objDate, responsavel: responsavel};
                
                Evento.create(evento, function (erro, evento) {
                    if (erro) {
                        console.log('2');
                        res.redirect('/cadEvento');

                    }
                    else {
                        console.log('3');
                        res.redirect('/menu');
                    }
                });
            }
        }
    };
    return EventosController;
}; 