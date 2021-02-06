describe('Orange HRMS',()=>{
    it('should login  into orange hrms',()=>{
        const usrName = $('#txtUsername');
        usrName.setValue('opensourcecms');
        $('#txtPassword').setValue('opensourcecms');
        $('#btnLogin').click();
    });
    it('should land on Homepage',()=>{
        browser.pause(10000)
    });

});