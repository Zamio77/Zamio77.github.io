import { postData } from './postData'

test('testing sidet data', () => {
    expect(postData('http://localhost:8080/sentiment', {url: "https://www.valentinog.com/blog/jest/"})).resolves.toBe({
        "polarity":"positive",
        "subjectivity":"unkown",
        // "text":"John is a very good football player",
        "polarity_confidence":98.85967373847961,
        // "subjectivity_confidence":0.9963778207617525
      })
})