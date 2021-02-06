describe('Orange HRMS',()=>{
    it('should login  into orange hrms',()=>{
        const usrName = $('#txtUsername');
        usrName.setValue('opensourcecms');
        $('#txtPassword').setValue('opensourcecms');
        $('#btnLogin').click();
    });
    it('should land on Homepage',()=>{
        browser.pause(5000);
        console.log('Home Page title  :  ' + browser.getTitle());
    });
    it('should land on Homepage',()=>{
        $('#admin > ul > li:nth-child(6) > a > span').click();
        
    });

});