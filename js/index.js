
// var proudactNameInput = document.getElementById("Addproduct")
// var proudactPriceInput = document.getElementById("Addprice")
// var proudactCatgoryInput = document.getElementById("Addcatgory")
// var proudactDescriptionInput = document.getElementById("Adddescription")




// var productlist=[];





// function addProduct(){
//     var product ={
// name:proudactNameInput,
// price:proudactPriceInput ,
// catgory:proudactCatgoryInput ,
// Adddescription:proudactDescriptionInput
//     }

//     proudactNameInput='';

//     productlist.push(product);
//     displyData();
//     console.log(productlist)
// }
// function displyData(){
//     var cartona="";
//     for(var i=0 ;i<productlist.length ;i++)
//         {
//             cartona+=`
//             <tr>
//             <td>1</td>
//             <td>iphone</td>
//             <td>8000</td>
//             <td>mobile</td>
//             <td>good</td>
//             <td>
//               <img src="imgs/about.jpg" alt="njhjkhk" width="100px">
//             </td>
//             <td>
//               <button class="btn btn- btn-outline-danger btn-sm">Delete</button>
//               <button class="btn btn- btn-outline-warning btn-sm">Update</button>
//             </td>
//           </tr>`;
//         }
//         document.getElementById('tableData').innerHTML=cartona;
// }

document.addEventListener('DOMContentLoaded', () => {
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    var registerError = document.getElementById('registerError');
  

   
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var email = document.getElementById('registerEmail').value;
            var password = document.getElementById('registerPassword').value;

            if (localStorage.getItem(email)) {
                registerError.textContent = 'Email is already registered.';
            } else {
                localStorage.setItem(email, password);
                window.location.href = 'login.html';
            }
        });
    }
    document.getElementById('showRegisterForm').addEventListener('click', function() {
        var form = document.getElementById('registerForm');
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
    
  

    
   

    
  
});

