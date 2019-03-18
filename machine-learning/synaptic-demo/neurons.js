var synaptic = require('synaptic')
this.network = new synaptic.Architect.Perceptron(40, 25, 3)

const Neuron = require('synaptic').Neuron

var A = new Neuron()
var B = new Neuron()

var connection = A.project(B) // A now projects a connection to B

var C = new Neuron();
C.gate(connection); // now C gates the connection between A and B

A.project(A)

function foo() {
    var A = new Neuron();
    var B = new Neuron();
    A.project(B);

    console.log(A.activate(0.5));
    console.log(B.activate());

}

// foo()

// A输入1, B输出0
function bar() {
    var A = new Neuron();
    var B = new Neuron();
    A.project(B);

    var learningRate = .2;

    for (var i = 0; i < 900000; i++) {
        // when A activates 1
        A.activate(1);

        // train B to activate 0
        B.activate();
        B.propagate(learningRate, 0);
    }

    /*
    for (var i = 0; i < 900000; i++) {
        // when A activates 0
        A.activate(0);

        // train B to activate 1
        B.activate();
        B.propagate(learningRate, 1);
    }*/


    // test it
    console.log(A.activate(1));
    console.log(B.activate());

    console.log(A.activate(0));
    console.log(B.activate());

    // A.activate(1);
    // B.activate(); // 0.006540565760853365
}

bar()