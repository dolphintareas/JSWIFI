const indexCtrl =  {};

indexCtrl.renderIndex = (req, res)=>{
    res.render('index',{titlepage: 'TJ Ingeniería Termica'})
};

indexCtrl.renderAbout = (req, res)=>{
    res.render('about',{titlepage: 'TJ - Quienes Somos'})
};

//router.get('/contact', renderContact);
indexCtrl.renderContact = (req, res)=>{
    res.render('contacto',{titlepage: 'TJ - Aprende ahora'})
};


module.exports = indexCtrl;