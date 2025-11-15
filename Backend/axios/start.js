// const axios = require('axios').default;
// we have access to axios beacause of the cdn included inside the html 


//AXIOS GLOBALS:
axios.defaults.headers.common['X-Auth-Token'] = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


//GET REQUEST :
function getTodos(){
    // axios({
    //     method:'get',
    //     url:'https://jsonplaceholder.typicode.com/todos', 
    //     params :{
    //         _limit:5 
    //     }
    // })
    // .then(res=> showOutput(res))
    // .catch(err=>{
    //     console.error(err);
    // })

    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=> showOutput(res))
    .catch(err=>{
        console.error(err);
    })
}


//POST REQUEST , sending some data 
function addTodo(){
    // axios({
    //     method:'post',
    //     url:'https://jsonplaceholder.typicode.com/posts',
    //     data:{
    //         firstName:'roshan',
    //         lastName:'kumar'
    //     }
    // }).then(res=>showOutput(res))
    //   .catch(err=> showOutput(err));


    axios
        .post('https://jsonplaceholder.typicode.com/todos/1',{
            firstName: 'roshan',
            lastName: 'kumar'
        })
        .then(res=>{
            console.log(res);
            showOutput(res);
        })
        .catch(err=> console.log(err))
}

//PUT-to replace an entire resource /PATCH - used to change incrementally 
function updateTodo(){
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/201',{
            completed:"true",
            firstName:"roshan"
        })
        .then(res=>showOutput(res))
        .catch(err=>console.error(err));
}

//simultaneous requests - getting both post and todos together
/*one way to do so is to make a get request and inside then make another then */
// more correct way to do so is:
function getData(){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/todos')
    ]).then(res=>{
        console.log(res[0]);
        console.log(res[1]);
    }).catch(err=>console.error(err));
}

//creating interceptor:
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} reques sent to 
    ${config.url}`);
    return config
}, error =>{
    return Promise.reject(error);
})


//CUSTOM HEADERS
function customHeaders(){
    const config ={
        headers :{
            'Content-Type': 'application/json',
            Authorization: 'someToken'
        }
    }


    axios
        .post('https://jsonplaceholder.typicode.com/todos',{
            firstName: 'roshan',
            lastName: 'kumar'
        }, config )         // note here we pass our config object as a parameter.
        .then(res=>{
            console.log(res);
            showOutput(res);
        })
        .catch(err=> console.log(err))

}


//GLOBALS
// function 

//TRANSFORM REQUEST AND RESPONSE:
function transformResponse(){
    const options ={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:"hello"
        },
        transformResponse: axios.defaults.transformResponse.concat(data=>{
            data.title = data.title.toUpperCase();
            return data;
        })
    }

    
    axios(options).then(res=>showOutput(res))      //another way of writing axios request
                  .catch(err=>console.log(err));
}




// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
// document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
// document.getElementById('error').addEventListener('click', errorHandling);
// document.getElementById('cancel').addEventListener('click', cancelToken);