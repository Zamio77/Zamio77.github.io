export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (validURL(formText)){
      console.log('::: Data posted :::')
      // Check what text was put into the form field
      console.log("::: Form Submitted :::")
      Client.postData('http://localhost:8080/sentiment', {url: formText}).then(function (data) {
        Client.postData("http://localhost:8080/add", {
        url: formText,
        text: data.text,
        polarity: data.polarity,
        subjectivity: data.subjectivity,
        polarity_confidence: data.polarity_confidence
      } )
    }).then(updateUI);
    } else {
      alert('Url entered not valid. Please try again.')
    }
}


  // console.log("::: Form Submitted :::")
  // fetch('http://localhost:8080/test')
  // .then(res => res.json())
  // .then(function(res) {
  //     document.getElementById('results').innerHTML = res.message
  // })

  export const updateUI = async () => {
    const request = await fetch("http://localhost:8080/all");
    try {
      const allData = await request.json();
      document.getElementById("url").innerHTML = `Url: ${allData.url}`
      document.getElementById("text").innerHTML = `Text: ${allData.text}`;
      document.getElementById("polarity").innerHTML = `Polarity: ${allData.polarity}`;
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${allData.subjectivity}`;
      document.getElementById("polarity_confidence").innerHTML = `Plarity Confidence: ${allData.polarity_confidence}`;

    } catch (error) {
      console.log("error", error);
    }
  };

  export function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }