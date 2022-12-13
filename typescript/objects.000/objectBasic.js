"use strict";
class Site {
    echo(msg) {
        console.info(`echo msg: ${msg}`);
    }
}
var site = new Site();
site.echo("bar");
