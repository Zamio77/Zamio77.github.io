function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

<<<<<<< HEAD
    Client.getApi('/api', {URL: formText});
}

=======
    const getApi = async () => {
        const request = await fetch("http://localhost:8080/api");
        try {
          const allData = await request.json();
          console.log(allData);
        } catch (error) {
          console.log("error", error);
        }
      };

    const getApi = async () => {
        const request = await fetch("http://localhost:8080/api");
        try {
          const allData = await request.json();
          console.log(allData);
        } catch (error) {
          console.log("error", error);
        }
      };

    getApi();
}


<<<<<<< HEAD
>>>>>>> parent of b3b0ca60... Reorganizing the formHandler file

=======

export { handleSubmit }
>>>>>>> parent of b3b0ca60... Reorganizing the formHandler file
