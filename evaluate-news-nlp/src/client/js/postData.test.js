const postData = require('./postData');

test('testing sidet data', () => {
    expect(postData('/sentiment', {text: "John is a very good football player"})).toBe({
        "polarity":"positive",
        "subjectivity":"subjective",
        "text":"John is a very good football player",
        "polarity_confidence":0.9999936601153382,
        "subjectivity_confidence":0.9963778207617525
      })
})