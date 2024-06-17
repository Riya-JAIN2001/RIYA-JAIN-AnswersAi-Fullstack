const axios = require("axios");

module.exports.ansByOpenAi=async(question)=>{
        
  const options = {
    method: 'POST',
    url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
    headers: {
      'x-rapidapi-key': '96fc290c14mshdfa4f5da667db68p14ec6fjsndc5b6ac927dc',
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: question
        }
      ],
      system_prompt: '',
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false
    }
  };
          try {
            const response = await axios.request(options);
            const answer= response.data.result
            
            return answer
        } catch (error) {
          
            return error
        } }