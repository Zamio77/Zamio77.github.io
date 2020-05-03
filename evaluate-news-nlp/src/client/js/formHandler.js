export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (validURL(formText)){
      console.log('::: Data posted :::')
      // Check what text was put into the form field
      console.log("::: Form Submitted :::")
      Client.postData('/sentiment', {text: formText}))
    } else {
        alert("The URL you entered is not valid. Please try again")
    }
}


  // console.log("::: Form Submitted :::")
  // fetch('http://localhost:8080/test')
  // .then(res => res.json())
  // .then(function(res) {
  //     document.getElementById('results').innerHTML = res.message
  // })

  export function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }