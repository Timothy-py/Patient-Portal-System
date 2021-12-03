// load page index
exports.index = (req, res) => {
    res.render('index', {
        title: 'Patient-Portal',
        page: 'index',
        message: 'This is the index'
    })
}


// get login page
exports.getLogin =  (req, res) => {
    res.render('doctor-login', {
        title: 'Doctor-Login',
        'page': 'doctor-login',
        message: '',
    })
}
