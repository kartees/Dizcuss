
function full()
{
    var quest = document.getElementById("quest");
    var ans = document.getElementById("anss");
    if (quest.value == "" || ans.value == "")
    {
        alert("Please enter all details correctly");
        return;
    }
    if(anss.value.indexOf("?") >=0)
    {
        alert("We don't do that here too!");
        return;
    }
   var question = quest.value.trim();
   var answer = ans.value.trim();
   console.log(question, answer);
   let length = question.length;
   var lem = question.length.toString().trim();
   if(lem%2 == 0)
   {
       lem++;
   }
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
   for(let i=0; i<length; i++ )
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
     let key = lem + " " + word11;
     console.log("key here ",key);
     if(array.indexOf(key.trim())>=0)
     {
         console.log("matching");
         let turn = firebase.database().ref("post").child(key);
          turn.once("value", function(dump) {
             var fun = dump.val();
             let keys = Object.keys(fun);
             var str = fun[keys[0]];
             var tempstr = "  (upd ->) " + ans.value;
             var tempcode = "";
             for(var i=0; i<tempstr.length; i++)
             {
                 tempcode += tempstr.charCodeAt(i);
                 tempcode += " ";
             }
             str += " ";
             str += tempcode.toString().trim();
             console.log(str);
             turn.update({'answer': str}).catch(console.log);
             visual();
             return;
         });
         
     }
     else
     {
     ref
         .child(key)
         .set(posting)
         .then(ref => { 
                    visual();
             })
         .catch(console.log);
     }
}
function visual()
{
    var show = document.getElementById("submit");
    show.classList.add("success"); 
            show.innerHTML = "Posted Successfully";
            show.disabled = true;
            setTimeout(() => { show.classList.remove("success"); show.innerHTML = "Post"; show.disabled = false;}, 1200);
            document.getElementById("quest").value = "";
            document.getElementById("anss").value = "";  
}
 