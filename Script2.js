let siteNameInput = document.getElementById('siteName');
let siteUrlInput = document.getElementById('siteUrl');
let submitInput = document.getElementById('submit');
let visitInput = document.getElementById('visit');
let deleteInput = document.getElementById('delete');

var currantIndex = 0 ;

let arrUrl=[];
if(localStorage.getItem("Links")!=null)
{
    arrUrl = JSON.parse(localStorage.getItem("Links"))
    display(arrUrl);
}
else
{
    arrUrl=[];
}


function addURL(){
    var urls={
        name:siteNameInput.value,
        url:siteUrlInput.value,
    }
    arrUrl.push(urls);
    localStorage.setItem("Links",JSON.stringify(arrUrl));
}
submitInput.addEventListener('click',function(){
    if(submitInput.innerHTML=="Submit")
    {
        addURL();
    }
    else{
        updated();
    }
    clear();
    display(arrUrl);
})

function display(arr){
    let contant = ``;
    for(let i = 0 ; i<arr.length ; i++){
        contant +=
        `<div class="contant">
        <div class="row">
            <div class="col-md-9">
                <div>
                    <h4 >${arr[i].name}</h4>
                </div>
            </div>
            <div class="col-md-3">
                <div>
                    <button onclick=" updateSet(${i}) "  class="btn btn-secondary"> Update</button>
                    <a class="btn btn-danger" target="_blank" href="${arrUrl[i].url}">Visit</a>
                    <button onclick="deleted(${i})" id="delete" class="btn btn-primary"> Delete</button>
                </div>
            </div>
        </div>
        </div>`
    }
    document.getElementById('add').innerHTML=contant;
}

function clear(){
    siteNameInput.value ='';
    siteUrlInput.value ='';
}

function updateSet(index){
    siteNameInput.value = arrUrl[index].name;
    siteUrlInput.value = arrUrl[index].url;
    submitInput.innerHTML="Update Site"
    currantIndex = index ;
}

function updated(){
    var urls={
        name:siteNameInput.value,
        url:siteUrlInput.value,
    }
    arrUrl[currantIndex]=urls
    localStorage.setItem("Links",JSON.stringify(arrUrl));
    submitInput.innerHTML='Submit'
}

function deleted(index){
    arrUrl.splice(index,1)
    localStorage.setItem("Links",JSON.stringify(arrUrl));
    display(arrUrl);
}

