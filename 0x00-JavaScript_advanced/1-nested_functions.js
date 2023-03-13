let globalVariable = 'Welcome';

function outer() {
  alert(globalVariable);
  let course = 'Holberton';

  function inner() {
      alert([globalVariable, course].join(' '));
      let exclamation = '!';

      function inception() {
          alert([globalVariable, course].join(' ') + exclamation);
      }

      inception();
  }

  inner();
}

outer();
