const Question = require("../models/question.js");
const { ansByOpenAi } = require('./OpenAI.js');



module.exports.askQuestion= async(req, res)=>{
    try {
        
        const question= req.body.question;
        const user_id= req.userID;
        const answer= await ansByOpenAi(question)
        const NewQues= new Question({
        question:question,
        userId:user_id,
        answer:answer
    })
    const saved_Ques=await NewQues.save();
    return res.status(200).json({success:true, msg:"question saved", saved_Ques})

        
    } catch (error) {
        return res.status(400).json({ success: false, msg: "some error", error: error });



    }}

    module.exports.getQuestion= async(req, res)=>{
      try {
        const ques_id= req.params.questionId;
        const question= await Question.findById({_id:ques_id}) ;
        if (!question){
            return res.status(404).json({ success: false, msg: "invalid question Id ! " });

        }
        return res.status(200).json({success:true, question})
      } catch (error) {
        return res.status(400).json({ success: false, msg: "some error", error: error });

      }
}     


