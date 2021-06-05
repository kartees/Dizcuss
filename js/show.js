var firebaseConfig = {
  apiKey: "AIzaSyDR9QC3d5z2HI5Rhp6XXZUtnOJ06sDq8tw",
  authDomain: "greetings-29a2b.firebaseapp.com",
  databaseURL: "https://greetings-29a2b-default-rtdb.firebaseio.com",
  projectId: "greetings-29a2b",
  storageBucket: "greetings-29a2b.appspot.com",
  messagingSenderId: "868531220470",
  appId: "1:868531220470:web:103b463700cac7ea3161d7",
  measurementId: "G-QDHXK273CF"
};

firebase.initializeApp(firebaseConfig);
var array = [];
var displayArray = [];
let ref = firebase.database().ref("post");

 ref.on("value", function(data){
   
  	data.forEach(function (chill)
  	{
  		var tbl = document.getElementById('all');
  		var data = chill.val();
  		let keys = Object.keys(data);
  	  var temp1 = data[keys[1]].trim();
  	  var temp2 =data[keys[2]].trim();
      var temp3 = data[keys[0]];
      var temp1Array = temp1.split(" ");
      var temp2Array = temp2.split(" ");
      var temp3Array = temp3.split(" ");
     
      let part1 ="";
      let part2 ="";
      let part3 ="";
      for(let i=0; i<temp1Array.length; i++)
      {
        part1 += String.fromCharCode(temp1Array[i]);
      }
      for(let i=0; i<temp2Array.length; i++)
      {
        part2 += String.fromCharCode(temp2Array[i]);
      }
      for(let i=0; i<temp3Array.length; i++)
      {
        part3 += String.fromCharCode(temp3Array[i]);
      }
      var an1 = part1.trim().length;
      var an2 = part2.trim().length;
      var an = part1.trim();
      an += part2.trim();
   
      var rest = an1+an2;
      keyArray = rest + " " + temp1;
      
      if(displayArray.indexOf(keyArray.trim()+part3) >= 0)
      {
        //  location.reload();
         console.log(keyArray.trim());
         return;
      }
      else{
      array.push(keyArray.trim());
      displayArray.push(keyArray.trim()+part3);
      var row =  tbl.insertRow();
      var call1 = row.insertCell();
  		var call2 = row.insertCell();
      call1.innerHTML = part1+part2;
      call2.innerHTML = part3;
      call1.classList.add("tableQuestion");
      call2.classList.add("tableAnswer");
      }
  	})
  	
  })