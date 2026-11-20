// Operations: Object Access, Invocation
console.log("What's your name?");

// Operations: Object Access, Event Listener, Callback Function
process.stdin.on('data', function(data) {

    // Operations: Object Access, Variable Assignment, Parameter Passing
    const name = data.toString().trim();
    
    // Operations: Object Access, Invocation
    console.log(`Hello, ${name}!`);

});

