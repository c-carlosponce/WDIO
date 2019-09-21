//import { expect } from 'chai';
//import { HomePage } from './pages';
var HomePage = require('../pages');

const { Given, When, Then } = require('cucumber');

Given(/^User is in the home page$/, () => {
    browser.open('http://demoqa.com/');
    browser.pause(5000);
});

When(/^User click on the (\S+)$/, (element) => {
    if (element === 'Widgets') {
        console.log('widgets');
        HomePage.widgetButton.click();
    }
    if (element === 'contactForm') {
        console.log('contact');
        //homePO.contactButton.click();
    }
});

When(/^(\S+) is visible$/, (element) => {
    if (element === 'WidgetsMenu') {
        console.log('Widgets menu');
        //expect(homePO.navigationMenu.waitForExist()).to.be.true;
    } else if (element === 'SidebarMenu') {
        console.log('side bar');
        //expect(homePO.sidebarMenu.waitForEnabled()).to.equal(true);
    } else if (element === 'Logo') {
        console.log('logo');
        //expect(homePO.logo.waitForExist()).to.be.true;
    }
});

When(/^User fills (\S+)$/, (element) => {
    if (element === 'Firstname') {
        homePO.firstname.setValue('Carlos');
    } else if (element === 'Lastname') {
        homePO.lastname.setValue('Ponce');
    } else if (element === 'country') {
        homePO.country.setValue('MEX');
    }
});

When(/^Values are confirmed$/, function () {
    expect(homePO.firstname.getValue()).to.equal('Carlos');
    expect(homePO.lastname.getValue()).to.equal('Ponce');
    expect(homePO.country.getValue()).to.equal('MEX');
});

Then(/^Values are submitted$/, function () {
    homePO.submit.click();
});

Then(/^Confirmation message is displayed$/, function () {
    expect(homePO.message.waitForVisible()).to.be.true;
});
