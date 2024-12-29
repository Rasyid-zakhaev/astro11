
    // increment
    let timeout, interval;

    [].forEach.call(document.querySelectorAll('.increase'), function(button) {
      button.addEventListener('mousedown', function() {
        let id = button.dataset.target;
        incrementValue(id);

        timeout = setTimeout(function() {
          interval = setInterval(function() {
            incrementValue(id);
          }, 50);    
        }, 300);
      });
      
      button.addEventListener('mouseup', clearTimers);
      button.addEventListener('mouseleave', clearTimers); 
      
      function clearTimers() {
        clearTimeout(timeout);
        clearInterval(interval);
      }
    });
    
    function incrementValue(id) {
      var el = document.getElementById(id);
      var value = parseInt(el.textContent, 10);
      ++value;
      value = (value < 10) ? "0" + value : value;
      document.getElementById(id).textContent = value;
    }

    // decrement

    let timeout2, interval2;

    [].forEach.call(document.querySelectorAll('.decrease'), function(button) {
      button.addEventListener('mousedown', function() {
        let id = button.dataset.target;
        decrementValue(id);

        timeout2 = setTimeout(function() {
          interval2 = setInterval(function() {
            decrementValue(id);
          }, 50);    
        }, 300);
      });
      
      button.addEventListener('mouseup', clearTimers);
      button.addEventListener('mouseleave', clearTimers); 
      
      function clearTimers() {
        clearTimeout(timeout2);
        clearInterval(interval2);
      }
    });
    
    function decrementValue(id) {
      var el = document.getElementById(id);
      var value = parseInt(el.textContent, 10);
      if(value > 0){
      --value;
      value = (value < 10) ? "0" + value : value;
      document.getElementById(id).textContent = value;
      }
    }