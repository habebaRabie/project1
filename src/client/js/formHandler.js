import is_url from "./checkURL"

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

//var is_url = require('is_url')

const handleSubmit = async () => {
    /**
     * TODO
     *  - Get Value of the input for URL
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     */
    const checkingURL = document.getElementById('article-url').value;
    if (is_url(checkingURL) == true){
        post("http://localhost:8082/add-url", {
            url: checkingURL
        }).then(data=>{
            console.log(data);
            // document.getElementById('text').innerHTML = `Text : ${data.text}`;
            // document.getElementById('agreement').innerHTML = `Agreement : ${data.agreement}`;
            // document.getElementById('subjectivity').innerHTML = `Subjectivity : ${data.subjectivity}`;
            // document.getElementById('confidence').innerHTML = `Confidence : ${data.confidence}`;
            // document.getElementById('irony').innerHTML = `Irony : ${data.irony}`;
            // document.getElementById('score_tag').innerHTML = `Score_tag : ${data.score_tag}`;
        })
    }
    else{
        alert('INVALID URL!, Please try again entering URL')
    } 
}

export default handleSubmit;
