class HomePage {
    get navigationMenu() { return client.element('#main'); }
    get sidebarMenu() { return browser.element('#sidebar'); }
    get logo() { return browser.element('#logo-events'); }
    get firstname() { return browser.element('.firstname'); }
    get lastname() { return browser.element('#lname'); }
    get country() { return browser.element('#content > div.demo-frame > div > form > input[type=text]:nth-child(8)'); }
    get widgetButton() { return browser.element('#menu-top > li:nth-child(3) > a'); }
    get contactButton() { return browser.element('#content > div.demo-frame > ul > li:nth-child(1) > a'); }
    get submit() { return browser.element('#content > div.demo-frame > div > form > input[type=submit]:nth-child(19)'); }
    get message() { return browser.element('#main > div > header > h1'); }
}

export default new HomePage();
