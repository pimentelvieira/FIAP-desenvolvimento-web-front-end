module.exports = function (app) {
    var Curso = app.models.cursos;

    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/menu', params);
        },
        cadastroCurso: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('cursos/listaCursos', params);
                }
            });
        },
        novoCurso: function (request, response) {
            var descricao = request.body.curso.descricao;
            var ch = request.body.curso.ch;
            var categoria = request.body.curso.categoria;

            if (descricao.trim().length == 0 || ch.trim().length == 0
                || categoria.trim().length == 0) {
                response.redirect('/cadCurso');
            }
            else {
                var curso = {descricao: descricao, ch: ch, categoria: categoria};

                Curso.create(curso, function (erro, curso) {
                    if (erro) {
                        response.redirect('/cadCurso');
                    }
                    else {
                        response.redirect('/menu');
                    }
                });
            }
        }

    };
    return CursosController;
}; 