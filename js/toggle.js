let form = document.getElementById("formhere");
let list = document.getElementById("itemshere");
function foundform() {
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
  let item = [];
  let pic = [];
  fetch(
    "https://opensheet.elk.sh/1w23WeedU7QaejFPK9ZFTTQK9-BD5sHeyPSCx2y-iiPE/1 "
  ).then((res) => {
    if (res.status === 200) {
      // SUCCESS
      res
        .json()
        .then((data) => {
          for (i = 0; i < data.length; i++) {
            name.push(data[i]["Name"]);
            contact.push(data[i]["Contact no. and address"]);
            item.push(data[i]["Item found"]);
            pic.push(data[i]["Picture of item found"]);
          }
          let html = "";
          for (i = 0; i < data.length; i++) {
            html += `
            <tr>
            <th scope="row">${i+1}</th>
            <td>${name[i]}</td>
            <td>${item[i]}</td>
            <td><a href=${pic[i]} target="_blank">Click here</a></td>
            <td>${contact[i]}</td>
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
