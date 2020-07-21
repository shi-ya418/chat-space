$(function(){
  let search_result = $("#UserSearchResult");
  function addUser(user){
      let html = `<div class="ChatMember clearfix">
                    <p class="ChatMember__name">${user.name}</p>
                    <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                  </div>`;
      search_result.append(html);
  }
  function addNoUser(){
    let html = `<div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりませ</p>
                </div>`;
    search_result.append(html);
  }
    
  function addMember(userName, userId){
    let html = `<div class="ChatMember">
                  <p class="ChatMember__name">${userName}</p>
                  <input name="group[user_ids][]" type="hidden" value="${userId}" />
                  <div class="ChatMember__remove ChatMember__button">削除</div>
                </div>`;
                $(".ChatMembers").append(html);
  }
  
  $("#UserSearch__field").on("keyup", function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input},
      dataType: "json"
    })
    .done(function(users){
      search_result.empty();
      if (users.length !== 0){
        users.forEach(function(user){
          addUser(user);
        });
      } else {
        addNoUser();
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  })

  $("#UserSearchResult").on("click", ".ChatMember__add", function(){
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this).parent().remove();
    addMember(userName, userId);
  })
  $(".ChatMembers").on("click", ".ChatMember__remove", function() {
    $(this).parent().remove();
  })
})