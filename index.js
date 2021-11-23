function receivesAFunction (recievedFunction) {
    recievedFunction();
}

function returnsANamedFunction (namedFunction) {
    return function namedFunction() {};
}

function returnsAnAnonymousFunction (anonymousFunction) {
    return function (){};
}