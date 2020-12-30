exports.config = {

    allScriptsTimeout: 120000,
    SELENIUM_PROMISE_MANAGER: true,
    //directConnect: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumArgs: ['-Dwebdriver.edge.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/msedgedriver.exe'],
    baseUrl: 'https://www.istockphoto.com/',
    capabilities: {
        browserName: 'chrome'
    },
    multiCapabilities: [
       {'browserName': 'chrome'}
       //{'browserName': 'MicrosoftEdge'}
      ],
    framework: 'mocha',
    specs: [
        './test/specs/**/*.js'
    ],
    logLevel: 'DEBUG',
    mochaOpts: {
        bail: true,
        colors: true,
        //compilers: ,
        //reporter: 'mochawesome',
        reporterOptions: {
            reportDir: './reports',
            reportFileName: 'protractor_mocha_report',
            enableCharts: true
        },
        timeout: 30000,
        ui: "bdd",
    },
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }

};
/*
====================================================================
For full list of Protractor config options,
see- https://github.com/angular/protractor/blob/master/lib/config.ts
====================================================================
**/