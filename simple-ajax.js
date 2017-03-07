var SimpleAjax = {
    
    // Retrieves data from server using GET type, returns server response.
    // Example use: retrieveData("show-user-info.php", true, function(data){alert(data);});
    retrieveData: function (target, async, onComplete) {
      
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            // If server response is ready, invoke callback function
            // and send server response as a parameter.
            if (this.readyState === 4 && this.status === 200) {
                onComplete(this.responseText);
            }
        };
            
        request.open("GET", target, async);
        request.send();
        
    },
    
    // Submits data to server using POST type and returns server response;
    // E.g: submitData("login.php", "email=example@gmail.com&password=fakepassword", true, function(data){alert(data);});
    submitData: function (target, data, async, onComplete) {
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            // If server response is ready, invoke callback function
            // and send server response as a parameter.
            if (this.readyState === 4 && this.status === 200) {
                onComplete(this.responseText);
            }
        };
        request.open("POST", target, async);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(data);
        
    }
};