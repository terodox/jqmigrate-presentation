$(function () {
  
  $('#getSomeFocus')
    .bind('blur', function () {
      console.log("I'm all blurry!");
    }).bind('click', function () {
      $('#allEyesOnMe').trigger('focus');
    });
  $('#allEyesOnMe').bind('focus', function () {
    console.log('All eyes are on me!');
  });
  //attr vs prop
  $('#checkItOut').bind('click', function () {
    var $this = $(this);
    console.log($this.attr('checked') + ' - ' + $this.prop('checked'));
  });
  
  //Incorrect trigger goodness
  $('#triggerItWrong').bind('click', function () {
    var $this = $(this);
    if($this.attr('checked')) {
      console.log("I love the feeling of being checked");
    } else {
      console.log("I'm not checked");
    }
  });
  $('#triggerClick').bind('click', function () {
    $('#triggerItWrong').trigger('click');
  });
  
  //$.browser doesn't exist!
  $('button.addMoreStuff').bind('click', function () {
    console.log($.browser);
  });
  
  //live goes bye bye
  $('#addNewThings').bind('click', function () {
    $('#allTheThings').append('<div class="oneThing">Yay a thing!' + $('.oneThing').length + '</div>');
  });
  $('#allTheThings .oneThing').live('click', function () {
    console.log($(this).text());
  });
});
