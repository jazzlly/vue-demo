module.exports = {
    'step one: navigate to google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .maximizeWindow() 
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('input[name=btnK]', 1000)
    },
  
    'step two: click input' : function (browser) {
      browser
        .click('input[name=btnK]')
        .pause(1000)
        .assert.containsText('#main', 'Night Watch')
        .execute(function() { 
          window.scrollBy(0, 100000); 
        }, [])
        .pause(3000)
        .execute(function() { 
          window.scrollBy(0, -10000); 
        }, [])
        // .execute('scroll(0,200)')
        // .pause(500)
        // .execute('scroll(0,400)')
        // .pause(500)
        // .execute('scroll(0,600)')
        // .pause(500)
        // .execute('scroll(0,800)')
        // .pause(500)
        // .execute('scroll(0,1000)')
        // .pause(500)
        // .execute('scroll(0,1200)')
        .pause(3000)
        .end();
    }
  };