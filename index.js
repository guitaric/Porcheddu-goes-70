setInterval(function() {
    var value = parseInt($('.bannerText').css('left')) -2;
    var value2 = parseInt($('.bannerTextBottom').css('left')) +2;

    console.log(value)
    console.log(value2)
    // $('.bannerText').css('left', value + 'px');

    if(value < -800) {
        $('.bannerText').css('left', $(window).width());
    } else {
        $('.bannerText').css('left', value + 'px');
    }

    if(value2 < $(window).width()) {
      $('.bannerTextBottom').css('left', value2 + 'px');
    } else {
      $('.bannerTextBottom').css('left', 0);
    }

}, 20);

var count = 0;

$(document).ready(function () {
  var tennisball = $('.tennisball');

  var degree = 0;
  var horizontalPX = 0;
  var verticalPX = 0;
  var width = $(window).width();
  var height = $(window).height();
  var ballwidth = $('#tennis1').width();
  var ballheight = $('#tennis1').height();

  console.log(ballwidth);
  console.log(ballheight);

  function crazyness() {
    setInterval(function () {
      if (count >= 83) {
        count = 0;
        // $('.imgWrappers').remove();
      }

      $('body').append(
        `<div id='imgWrapper${count}' class='imgWrappers'></div>`
      );

      var url = `url(images/img${count}.jpeg)`;
      console.log($(window).height());

      $(`#imgWrapper${count}`).css({
        width: '300px',
        height: '300px',
        position: 'absolute',
        left: (Math.random() * $(window).width()-300)+150,
        top: (Math.random() * $(window).height()-300)+150,
        'background-image': url,
        'object-fit': 'contain',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });

      count = count + 1;
    }, 1000);
  }

  var moveRight = true;
  var moveDown = true;

  function tennisballs() {
    setInterval(function () {
      $('.tennisball').each(function () {

        if (moveRight) {
          if ($('#tennis1').get(0).getBoundingClientRect().left >= width - 100) {
            moveRight = false;
            horizontalPX = horizontalPX - 2;
            $(this).css('left', `${horizontalPX}` + 'px');
          } else {
            horizontalPX = horizontalPX + 2;
            $(this).css('left', `${horizontalPX}` + 'px');
          }
        } else {
          if ($('#tennis1').get(0).getBoundingClientRect().left <= 0) {
            moveRight = true;
            horizontalPX = horizontalPX + 2;
            $(this).css('left', `${horizontalPX}` + 'px');
          } else {
            horizontalPX = horizontalPX - 2;
            $(this).css('left', `${horizontalPX}` + 'px');
          }
        }

        if (moveDown) {
          if ($('#tennis1').get(0).getBoundingClientRect().top >= height - 100) {
            moveDown = false;
            verticalPX = verticalPX - 2;
            $(this).css('top', `${verticalPX}` + 'px');
          } else {
            verticalPX = verticalPX + 2;
            $(this).css('top', `${verticalPX}` + 'px');
          }
        } else {
          if ($('#tennis1').get(0).getBoundingClientRect().top <= 0) {
            moveDown = true;
            verticalPX = verticalPX + 2;
            $(this).css('top', `${verticalPX}` + 'px');
          } else {
            verticalPX = verticalPX - 2;
            $(this).css('top', `${verticalPX}` + 'px');
          }
        }
      });
    }, 20);
  }

  
  $('#pwInput').on('input', function () {
    console.log($(this).val());
  });
  
  $('#pwInput').on('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('KKLKLK');
      
      if ($('#pwInput').val() == 'diehandgottes') {
        $('.pwOverlay').hide();
        const audio = new Audio("happy.mp3" );
        audio.play();
        crazyness();
        
        setTimeout(function() {
          
          $('.tennisball').show();
          $('.banner').show();
          tennisballs();
        }, 23000);
        
      }
    }
  });









  $('body').on('click',function(e) {

      if(count >= 83) {
          count = 0;
          $('.imgWrappers').remove();
      }

      var x = e.pageX;
      var y = e.pageY;

      $('body').append(
          `<div id='imgWrapper${count}' class='imgWrappers'></div>`
          );

          var url = `url(images/img${count}.jpeg)`;
          console.log(url);

          $(`#imgWrapper${count}`).css({
              'width': '300px',
              'height': '300px',
              'position': 'absolute',
              'left': x -150,
              'top': y -150,
              'background-image' : url,
              'object-fit': 'contain',
              '-webkit-background-size': 'cover',
              '-moz-background-size': 'cover',
              '-o-background-size': 'cover',
              'background-size': 'cover'

      })

      count = count + 1;

  })
});
