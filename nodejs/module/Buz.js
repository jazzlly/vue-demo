var Buz = function() {}
Buz.prototype.log = () => {
    console.log("md buz!");
}

// export an anonymous object
module.exports = new Buz()