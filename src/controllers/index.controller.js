const indexCtrl =  {};

indexCtrl.renderIndex = (req, res)=>{
    res.render('index',{titlepage: 'Woom! Aprende ahora'})
};

indexCtrl.renderAbout = (req, res)=>{
    res.render('about',{titlepage: 'Woom! Quienes Somos'})
};

//router.get('/contact', renderContact);
indexCtrl.renderContact = (req, res)=>{
    res.render('contacto',{titlepage: 'Woom! Aprende ahora'})
};

module.exports = indexCtrl;