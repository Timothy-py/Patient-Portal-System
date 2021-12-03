// load page index
exports.index = (req, res) => {
    res.render('index', {
        title: 'Patient-Portal',
        page: 'index',
        message: 'This is the index'
    })
}


// get doctor login page
exports.getDoctorLogin =  (req, res) => {
    res.render('doctor-login', {
        title: 'Doctor-Login',
        'page': 'doctor-login',
        message: '',
    })
}

// get patient login page
exports.getPatientLogin =  (req, res) => {
    res.render('patient-login', {
        title: 'Patient-Login',
        'page': 'patient-login',
        message: '',
    })
}
