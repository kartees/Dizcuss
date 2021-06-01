
function full()
{
    var quest = document.getElementById("quest");
    var ans = document.getElementById("anss");
    if (quest.value == "" || ans.value == "")
    {
        alert("Please enter all details correctly");
        return;
    }
   var question = quest.value;
   var answer = ans.value;
   console.log(question, answer);

//    now getting count
   let length = question.length;
   if(length%2==0)
   {
       length++;
   }
   var word11 = "";
   for(let i=0; i<length/2; i++){
       word11 += question.charCodeAt(i);
       word11 += " ";
   }
   var word12 = "";
   for(let i=(length/2)+1; i<length; i++){
       word12 += question.charCodeAt(i);
       word12 += " ";
   }
   var word2 ="";
   length = answer.length;
   for(let i=0;i<length; i++ )
   {
       word2 += answer.charCodeAt(i);
       word2 += " ";
   }
   let ref = firebase.database().ref().child("post");
   let posting = {
         question1: word11,
         question2: word12,
         answer: word2,
     }
     let key = word11+word2;
     ref
         .child(key)
         .set(posting)
         .then(ref => { 
     
          alert("POSTED SUCCESSFULLY !");
             })
         .catch(console.log);
         location.reload();
}

 