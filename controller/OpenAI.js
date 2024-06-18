const axios = require("axios");

module.exports.ansByOpenAi=async(question)=>{
        
  const options = {
    method: 'POST',
    url: 'https://open-ai21.p.rapidapi.com/conversationpalm2',
    headers: {
      'x-rapidapi-key': 'c34fdd3bb7msh3180af08efc4d8dp11d8a6jsn02b1363d5836',
      'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: question
        }
      ]
    }
  };
          try {
            const response = await axios.request(options);
            const answer= response.data.BOT
            
            return answer
        } catch (error) {
          
            return error
        } }
