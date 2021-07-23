document.querySelector("#sendMsg").addEventListener("click", (e) => {
    const passcodeInput = document.querySelector("#passcode");
    const messageInput = document.querySelector("#message");
    console.log(messageInput.value);
    
    firebase.database().ref().push({
        message: messageInput.value,
        passcode: passcodeInput.value
    });
});
