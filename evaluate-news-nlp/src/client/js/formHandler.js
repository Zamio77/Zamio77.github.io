function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    getApi();
}

const getApi = async () => {
    const request = await fetch("http://localhost:8080/api");
    try {
      const allData = await request.json();
      console.log(allData);
    } catch (error) {
      console.log("error", error);
    }
  };

export { handleSubmit }
