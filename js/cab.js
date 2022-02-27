let form = document.getElementById("formhere");
let list = document.getElementById("itemshere");
let date=document.getElementById("Date");
let inornot=document.getElementById("flexSwitchCheckDefault1");
const defaultext =
  "Hello Could you please share cab with me on the same date you are going";
function cabform() {
  form.style.display = "block";
  list.style.display = "none";
}
function listhere() {
  form.style.display = "none";
  list.style.display = "block";
}

window.onload = function () {
  let addhtml = document.getElementById("innerhtmladd");
  let name = [];
  let contact = [];
  let from = [];
  let to = [];
  let date = [];
  fetch(
    "https://opensheet.elk.sh/1Z4v5o3mFofCTZPRHsYZUFuUJQhvnEU13UYWd25ipWAw/1 "
  ).then((res) => {
    if (res.status === 200) {
      // SUCCESS
      res
        .json()
        .then((data) => {
          for (i = 0; i < data.length; i++) {
            name.push(data[i]["Name"]);
            contact.push(data[i]["Whatsapp no."]);
            from.push(data[i]["From"]);
            to.push(data[i]["To"]);
            date.push(data[i]["Date"]);
          }
          let html = "";
          for (i = 0; i < data.length; i++) {
            html += `
            <tr class="allhere" id="${date[i]}">
            <td>${name[i]}</td>
            <td>${from[i]}</td>
            <td>${to[i]}</td>
            <td>${date[i]}</td>
            <td><a href="https://api.whatsapp.com/send?phone=${
              contact[i]
            }&text=${defaultext}" target="_blank">${contact[i]}</a></td>
          </tr>`;
          }
          if (html == "") {
            addhtml.innerHTML = `None of us found something :(`;
          } else {
            addhtml.innerHTML = html;
          }
        })
        .catch((err) => console.log(err));
    } else {
      // ERROR
    }
  });
};

function filterbydate(){
  if(inornot.checked){
    if(date.value!=''){
      let splitted=date.value.split("-");
      let formatdate=`${splitted[2]}/${splitted[1]}/${splitted[0]}`
      let all=document.getElementsByClassName('allhere');
      for(let i=0;i<all.length;i++){
        if(all[i].id==formatdate){

        }else{
          all[i].style.display="none";
        }
        console.log(formatdate)
      }
    }else{
      alert('Please enter valid date to check')
    }
  }
}