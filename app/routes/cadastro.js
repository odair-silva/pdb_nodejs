module.exports = function(app) {
    app.get('/cadastro', function(req, res) {
            
        res.render('medicos/cadastro', {validationErrors:{}});
    });

    app.get('/busca', function(req, res) {
        var connection = app.infra.connectionFactory();
        var medicosDAO = new app.infra.MedicosDAO(connection);
        
        medicosDAO.listaMedicos(function(err, results) {
            console.log(err);
            res.render('medicos/busca', {results:results});
            
        });
    });

    app.post('/busca', function(req, res){
        var connection = app.infra.connectionFactory();
        var medicosDAO = new app.infra.MedicosDAO(connection);

        medicosDAO.medicosDeleta(function(err, results) {
            res.redirect("/busca")
            
        });

        connection.end();
    });

    app.post('/cadastro', function(req, res) {
        var medico = req.body;
        console.log(medico);

        var validadorNome = req.assert('Nome', 'Nome deve ser preenchido.');
        validadorNome.notEmpty();

        var validadorCRM = req.assert('CRM', "CRM Inválido.");
        validadorCRM.isFloat();

        var validadorNascimento = req.assert('Nascimento', 'Data de nascimento inválida.');
        validadorNascimento.isISO8601();

        var validadorNascimento = req.assert('Endereco', 'O endereço deve ser preenchido.');
        validadorNascimento.notEmpty();

        var validadorNascimento = req.assert('Telefone', 'O telefone deve ser preenchido corretamente.');
        validadorNascimento.isFloat();

        var erros = req.validationErrors();
        if(erros){
            res.format({
                html: function(){
                    res.status(400).render("medicos/cadastro",{validationErrors:erros});
                },
                json: function(){
                    res.status(400).send(erros);
                }
            });

            return;
        }

        var connection = app.infra.connectionFactory();
        var medicosDAO = new app.infra.MedicosDAO(connection);

        medicosDAO.medicosCadastra(medico, function(err, results) {
            console.log(err);
            res.redirect("/cadastro")
            
        });

        connection.end();
    });
}
