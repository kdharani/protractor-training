const SearchPage = require('../pageobjects/search');
const LoginPage = require('../pageobjects/login');
const data = require('../../data/test.data');
const { browser } = require('protractor');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('iStock functional tests', () => {
    it('should able to login successfuly', () => {
        LoginPage.get();
        LoginPage.login(data.username, data.password);
        expect(SearchPage.istockLogoIsPresent(), 'Login failed').to.eventually.equal(true)
    });

    it('should able to create a new board', () => {
        SearchPage.get();
        SearchPage.hoverOnBoardLnk();
        SearchPage.clickCreateBoardLnk();
        SearchPage.setBoardName(data.boardName);
        SearchPage.clickCreateBtn();
        SearchPage.hoverOnBoardLnk();
        //expect(SearchPage.getBoardTitle(), 'Create board failed').to.eventually.equal(data.boardName);
    });

    it('should able to search for photo', () => {
        SearchPage.get();
        SearchPage.setSearchField(data.searchKey);
        SearchPage.clcikSearchBtn();
        expect(SearchPage.getArticles(), 'No search results').to.not.be.empty
    });

    it('should able to add photos to board', () => {
        SearchPage.get();
        SearchPage.setSearchField(data.searchKey);
        SearchPage.clcikSearchBtn();
        SearchPage.selectFirstArticle();
        SearchPage.addToBoard(data.boardName);
    });

    it('should able to delete a board', () => {
        SearchPage.get();
        SearchPage.hoverOnBoardLnk();
        SearchPage.clickViewAllBoardLnk();
        SearchPage.deleteBoard();

    });

});


