

window.onload = populateSelect(); 


const userloginForm = document.getElementById('iduserloginForm');
userloginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
 await userLogin().then((jsonObject)=>{
 
  const usernameInput = document.getElementById('checkUserandPassword');
  //if (jsonObject.valid === false){usernameInput.style.color="red"}
  usernameInput.innerHTML = JSON.stringify(jsonObject,null, 2);
    
                                    })
    
});


async function populateSelect() {
  try {
    const response = await fetch('countriesCallCode.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const selectElement = document.getElementById('comNameList');

    // Clear existing options
    selectElement.innerHTML = '';

    // Loop through the JSON data and create options
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.code;
      option.textContent = item.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}


async  function userLogin() {

   
    // Get text input value
    const usernameInput = document.getElementById('idloginUserName');
    const cc = usernameInput.value;

    const userPasswdInput = document.getElementById('idloginUserPasswd');
    const number = parseInt(userPasswdInput.value,10);

   

   // console.log("Username:", userName);
    
   // console.log("UserPasswd:", userPasswd);



   return fetch("/search", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(
            {"cc": cc, 
             "number":number
            }
                            )
        }).then(Response => Response.json()).then((jsonObject)=>{ 
            
          // console.log(jsonObject) 

              return jsonObject ;
        
            
        })
        
    }

  