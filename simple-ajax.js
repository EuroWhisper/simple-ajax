var SimpleAjax = {
    // onComplete holds a callback function specified by user
    // which is invoked when server response to AJAX request is ready
    onComplete: null,
    
    // Retrieves data from server using GET type, returns server response.
    // Example use: retrieveData("show-user-info.php", true, function(data){alert(data);});
    
    retrieveData: function (target, async, onComplete) {
        // Set SimpleAjax object's onComplete variable's value to hold onComplete
        // callback function provided by user.
        this.onComplete = onComplete;
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = this.processReadyStateChange;
        request.open("GET", target, async);
        request.send();
        
    },
    
    // Submits data to server using POST type and returns server response;
    // E.g: submitData("login.php", "email=example@gmail.com&password=fakepassword", true, function(data){alert(data);});
    submitData: function (target, data, async, onComplete) {
        // Set SimpleAjax object's onComplete variable's value to hold onComplete
        // callback function provided by user.
        this.onComplete = onComplete;
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = this.processReadyStateChange;
        request.open("POST", target, async);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(data);
        
    },
    
    // Handle readystate change of AJAX requests.
    // Note: This method should only be called by XMLHttpRequest objects
    // otherwise there will be scope related issues.
    processReadyStateChange: function () {
        // If server response is ready, invoke callback function
        // and send server response as a parameter.
        if (this.readyState === 4 && this.status === 200) {
            SimpleAjax.onComplete(this.responseText);
            // Remove reference to callback function now that it has completed.
            SimpleAjax.onComplete = null;
        }
    }
};