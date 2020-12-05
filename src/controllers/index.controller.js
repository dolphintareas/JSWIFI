const indexCtrl =  {};

indexCtrl.renderIndex = (req, res)=>{
    res.render('index',{titlepage: 'Woom! Aprende ahora'})
};

indexCtrl.renderAbout = (req, res)=>{
    res.render('about')
};

//router.get('/contact', renderContact);
indexCtrl.renderContact = (req, res)=>{
    res.render('contacto')
};

module.exports = indexCtrl;