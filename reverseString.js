const inputString = 'TestReverse';

const addNumbers = (a, b) => {
    return a + b;
  };



  const test = function () {
    console.log("test function");
  }

  const testing = test();

  function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('John', sayGoodbye);
  

  async function testableFunction (a) {
    console.log("testableFunction",a)
    return 100+10+a;
  }

  let result;
  const superTest = async () => {
    result = await testableFunction(10);
  }
  
  (async () => {
    await superTest();
    console.log("result", result);
  })();