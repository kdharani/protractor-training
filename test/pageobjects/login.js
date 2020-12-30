const { element, browser } = require("protractor");

var LoginPage = function() {

    var signIn = $('.actions-list li:nth-child(5) a') 
    var inputUsername = $('#new_session_username')
    var inputPassword = $('#new_session_password')
    var btnSubmit = $('#sign_in')
  
    this.get = function() {
      browser.get(browser.baseUrl);
    };

    this.login = function (username, password) {
      signIn.click();
      inputUsername.sendKeys(username);
      inputPassword.sendKeys(password);
      btnSubmit.click();
    }
    
   /*  this.clickSignIn = function() {
        signIn.click();
    };

    this.setUsername = function(name) {
        inputUsername.sendKeys(name);
    };

    this.setPassword = function(name) {
        inputPassword.sendKeys(name);
    };

    this.clickSubmitBtn = function() {
        btnSubmit.click();
    }; */
  
  };
  module.exports = new LoginPage();