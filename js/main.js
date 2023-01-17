$(document).ready(function(){
    $('#get-data').click(function(){
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){

                let pId = $('<p></p>').text(`Post ID : ${data.id}`);
                let pUserId = $('<p></p>').text(`Post ID : ${data.userId}`);
                let pTitile = $('<p></p>').text(`Post ID : ${data.title}`);
                let pBody = $('<p></p>').text(`Post ID : ${data.body}`);
                let hr = $('<hr />');

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitile);
                jqBody.append(pBody);
                jqBody.append(hr);

            });
    });
}); 

//$.getJSON('https://akademia108.pl/api/ajax/get-post.php')
//.done(function(data){

  //  let pId = $('<p></p>').text(`Post ID : ${data.id}`);
  //  let pUserId = $('<p></p>').text(`Post ID : ${data.userId}`);
  //  let pTitile = $('<p></p>').text(`Post ID : ${data.title}`);
  //  let pBody = $('<p></p>').text(`Post ID : ${data.body}`);
  //  let hr = $('<hr />');

  //  let jqBody = $('body');

  //  jqBody.append(pId);
  //  jqBody.append(pUserId);
  //  jqBody.append(pTitile);
  //  jqBody.append(pBody);
  //  jqBody.append(hr);

//});
//});