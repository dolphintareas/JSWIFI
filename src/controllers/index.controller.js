const indexCtrl =  {};

indexCtrl.renderIndex = (req, res)=>{
    res.render('index',{titlepage: 'JSNET - 100% FIBRA ÓPTICA'})
};

indexCtrl.renderAbout = (req, res)=>{
    res.render('about',{titlepage: 'JSNET - Quienes Somos'})
};

//router.get('/contact', renderContact);
indexCtrl.renderContact = (req, res)=>{
    res.render('contacto',{titlepage: 'JSNET - Contáctanos'})
};


module.exports = indexCtrl;