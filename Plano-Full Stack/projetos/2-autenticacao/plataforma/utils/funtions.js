const getFullDate = () => {
    let dataAtual = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    
    return dataAtual;
}

const render = (res, path='index', options) => {
    res.render(path, options);
}

const session = {
    create: (req, email) => {
        req.session.email = email;
        console.log('Usuario ' + req.session.email + ' logado...');
    },
    destroy: (req, res) => {
        console.log('Usuario ' + req.session.email + ' deslogado...');
        req.session.destroy();
        res.redirect('/'); 
    },

    isOnline: (req) => {
        if (req.session.email) {
            return true
        }
        return false
    }
}

module.exports = { getFullDate, render, session };