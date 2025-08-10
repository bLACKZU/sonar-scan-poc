// Intentional code quality issues for SonarQube
function hello(name) {
    if(name == null) {
        console.log("No name provided");
    } else {
        console.log("Hello, " + name);
    }
}

hello(); // Should warn about missing argument
