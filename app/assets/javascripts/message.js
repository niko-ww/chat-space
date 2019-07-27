$(function(){

  function buildHTML(message){
    var html = `<div class= "messag-info" message-id="${message.id}">
                        <div class= "message-info__member">
                          ${message.user_name}
                        </div>
                        <div class= "message-info__date">
                            ${message.created_at}
                        </div>
                        <div class= "message__text">
                          <p class="lower-message__content">
                            ${message.content}
                          </p>`
    if(message.image === null ){
      var html = html + `</div>
                </div>`
      return html;
    }else{
      var html = html + `<img class= "lower-message__image", src= ${message.image}>
                  </div>
                </div>`
      return html;
    }
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
      $('.messages').append(html);
      $('.message-box__text').val('')

    })
    .fail(function(){
      alert('error');
      
    })
  })

});
