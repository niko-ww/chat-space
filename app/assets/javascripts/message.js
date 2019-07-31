$(function(){

  function buildHTML(message){
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";

    var html = `<div class= "messag-info" message-id="${message.id}">
                  <div class= "message-info__member">
                    ${message.user_name}
                  </div>
                  <div class= "message-info__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class= "message__text">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  ${image}
                  
                </div>`
              return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html).animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.message-box__text').val('');
      $('.submit-btn').prop('disabled',false);

    })
    .fail(function(){
      alert('error');
      $('.submit-btn').prop('disabled',false);
    })
  })

});
