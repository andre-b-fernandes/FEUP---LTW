function encodeForAjax(data) {
  return Object.keys(data).map(function(k){
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&');
}

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(event){
  let date = document.getElementById("datelimit").value;
  let varDate = new Date(date); //dd-mm-YYYY
  let today = new Date();
  today.setHours(0,0,0,0);

  if(varDate < today) {
    document.getElementById('errors').innerHTML = 'Date has already passed!\n';
    document.getElementById('datelimit').focus();
    event.preventDefault();
    return false;
  }
  let description = document.getElementById('itemtext').value;
  let limitdate = document.getElementById('datelimit').value;
  let tdID = document.getElementById('todolistid').value;
  let itemRequest = new XMLHttpRequest();
  itemRequest.open("post", "../phpUtils/additem.php",false);
  itemRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  itemRequest.send(encodeForAjax({todolistid:tdID, itemtext: description, datelimit:limitdate}));
  let node = document.createElement("DIV");
  node.innerHTML = '<p> To do untill ' + limitdate + ': ' + description + '</p>';
  let items = document.getElementsByTagName('section')[0];
  items.appendChild(node);
  event.preventDefault();
  return true;
});
