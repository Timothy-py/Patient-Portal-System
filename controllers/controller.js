// load page index
exports.index = (req, res) => {
    res.render('index', {
        title: 'Patient-Portal',
        page: 'index',
        layout: false,
        message: 'This is the index'
    })
}