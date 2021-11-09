setInterval(function() {
    var value = parseInt($('.bannerText').css('left')) -2;
    var value2 = parseInt($('.bannerTextBottom').css('left')) +2;



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


  function beer() {
    setInterval(function() {
      $('.ichnusa').toggleClass('wiggle');
    }, 520);
  }


  function changeColor() {

    setInterval(function() {
      var color = "#" + Math.random().toString(16).slice(2, 8);
      $('.seventy').css("color", color);     
    }, 120);

  
    // var c = color.substring(1);      // strip #
    // var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    // var r = (rgb >> 16) & 0xff;  // extract red
    // var g = (rgb >>  8) & 0xff;  // extract green
    // var b = (rgb >>  0) & 0xff;  // extract blue
  
    // var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    // if (luma < 80) {
    //     spans.css('color', 'white');
    // } else {
    //   spans.css('color', 'black');
    // }
  }


  function flags() {
    var sars = [$('#s1'), $('#s2'), $('#s3'), $('#s4'), $('#s5'), $('#s6')];

    // sars.each(function() {
    //   $(this).hide();
    // })
    var sarscount = 0;

    setInterval(function() {
    
          for (let i = 0; i < sars.length; i++) {
            sars[i].hide();
          }

          sars[sarscount].show();

          sarscount == 5 ? sarscount = 0 : sarscount = sarscount +1;

      
    }, 200);
  }

  
  // $('#pwInput').on('input', function () {
  //   console.log($(this).val());
  // });
  

  
  // beer();
  
  $('#pwInput').on('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if ($('#pwInput').val() == 'diehandgottes') {
        $('.pwOverlay').hide();
        const audio = new Audio("happy.mp3" );
        audio.play();
        crazyness();
        
        setTimeout(function() {
          
          $('.tennisball').show();
          $('.ichnusa').show();
          $('.banner').show();
          $('.porcheddu').show();
          $('.seventy').show();
          // $('.sardinia').show();
          tennisballs();
          beer();
          flags();
          changeColor();
        }, 23000);
        
      }
    }
  });

  // $('.tennisball').show();
  // $('.ichnusa').show();
  // $('.banner').show();
  // $('.porcheddu').show();
  // tennisballs();
  // beer();
  // flags();  









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
              'background-size': 'cover',
              'z-index': '98'

      })

      count = count + 1;

  })
});
