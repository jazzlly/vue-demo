
class Site {
    echo(msg:string): void {
        console.info(`echo msg: ${msg}`);
    }
}

var site:Site = new Site()
site.echo("bar")