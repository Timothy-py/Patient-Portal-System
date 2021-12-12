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
        page: 'doctor-login',
        message: '',
    })
}

// get patient login page
exports.getPatientLogin =  (req, res) => {
    res.render('patient-login', {
        title: 'Patient-Login',
        page: 'patient-login',
        message: '',
    })
}

// get patient signup form
exports.getSignup = (req, res) => {
    res.render('patient-signup', {
        title: 'Patient-Signup',
        page: 'patient-signup'
    })
}

// get patient visists
exports.getPatientVisits = (req, res) => {
    res.render('patient-visit', {
        title: 'Patient-Visit',
        page: 'patient-visit'
    })
}

// get patient messages
exports.getPatientMessages = (req, res) => {
    res.render('patient-message', {
        title: 'Patient-Message',
        page: 'patient-message' 
    })
}

// get Manage Patients
exports.getManagePatients = (req, res) => {
    res.render('manage-patients', {
        title: 'Manage Patients',
        page: 'manage-patients'
    })
}

// get Patient Details
exports.getPatientDetails = (req, res) => {
    res.render('patient-details', {
        title: 'Patient Details',
        page: 'patient-details'
    })
} 

// get Create Message
exports.getCreateMessage = (req, res) => {
    res.render('create-message', {
        title: 'Create Message',
        page: 'create-message'
    })
}