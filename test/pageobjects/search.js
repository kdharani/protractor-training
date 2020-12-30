const { element, browser } = require("protractor");
const EC = protractor.ExpectedConditions;

var SearchPage = function() {

    var searchField = element(by.css('#search-phrase')) 
    var searchBtn = element(by.css('.search-bar__submit'))
    var allArticles = element.all(by.css('#gallery article')) 
    var firstArticle = element(by.css('div.gallery-mosaic-asset:nth-child(1) article'))
    var clearSearchImg = element(by.css('.search-clear-icon'))
    var istockLogo = element(by.css('section.logo.wide-header > a > img'))
    var openBoardlnk = element(by.css('#open_board span:nth-child(2)'))
    var createBoardLnk = element(by.css('.create-board-link'))
    var viewAllBoardLnk = element(by.css('.view-board-link'))
    var boardNameField = element(by.css('input.enter-board-name'))
    var createBtn = element(by.css('form.create-new-board a'))
    var boardTitle = element(by.css('.board-title'))
    var addToBoard = element(by.css('.add-to-board'))
    var boardLists = element.all(by.css('div.choose-board li.board-item div.board-name'))
    var deleteBoardImg = element.all(by.css('.delete-board-desktop'))
    
    
    
    this.get = function() {
      browser.get(browser.baseUrl);
    };
    
    this.setSearchField = function(text) {
       searchField.sendKeys(text);
    };

    this.clcikSearchBtn = function() {
        searchBtn.click();
    };

    this.istockLogoIsPresent = function() {
        let flag = istockLogo.isPresent();
        return flag;
    }

    this.hoverOnBoardLnk = function() {
        browser.wait(EC.visibilityOf(openBoardlnk,5000));
        browser.actions().mouseMove(openBoardlnk).perform();
    }

    this.clickCreateBoardLnk = function() {
        browser.wait(EC.visibilityOf(createBoardLnk, 5000));
        createBoardLnk.click();
    }

    this.setBoardName = function(text) {
        browser.wait(EC.visibilityOf(boardNameField, 5000));
        boardNameField.sendKeys(text)
    }

    this.clickCreateBtn = function() {
        createBtn.click();
        //browser.sleep(3000);
        this.get();
    }

    this.getBoardTitle = function() {
        browser.wait(EC.visibilityOf(boardTitle, 5000));
        let title = boardTitle.getText();
        return title;
    }

    this.getArticles = function() {
        return allArticles;
    }

    this.selectFirstArticle = function() {
        firstArticle.click();
        //browser.sleep(2000);
    }

    this.addToBoard = function(text) {
        browser.actions().mouseMove(addToBoard).perform();
        element(by.css('.action-toolbox')).click()
        //browser.sleep(2000);
        boardLists.each(el => {
            console.log(el.getText());
            console.log(text);
            if(el.getText() == text){
                el.click();
                return false;
            }else {
                console.log('Item not matched');
            }
            return true;
        });
    }

    this.clickViewAllBoardLnk = function () {
        browser.wait(EC.visibilityOf(viewAllBoardLnk,5000));
        viewAllBoardLnk.click();
        //browser.sleep(5000);
    }

    this.deleteBoard = function () {
        deleteBoardImg.each(el => {
            el.click();
            browser.switchTo().alert().accept();
        });
    }

  };
  module.exports = new SearchPage();