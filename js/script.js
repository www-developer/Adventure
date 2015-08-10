
$(document).ready(function(){

    var name, id, protector=0;
    var index  = {
        'cuba': 0,
        'russia':0,
        'england':0,
        'norway':0,
        'switzerland':0,
        'china':0,
        'germany':0,
        'japan':0,
        'austrlia':0,
        'india':0,
        'finland':0,
        'newzealand':0
    };

    var slctr = '.nav li';
    $(slctr).on('click',function(){
        $(slctr).removeClass('li-active');
        $(this).addClass('li-active');
    });

    $('#logotip').hover(function(){
        $('header').css('background','#22539d');
    },function(){
            $('header').css('background','');
        });


    $("#menu").click(function(){
        $('.menu-sm').slideToggle();
        $('#menu').toggleClass("open");
    });

    function prevSlide(){

        if (protector == 0) {
            protector = 1;
            if (index['' + name + ''] == 0) {
                $('#' + name + '-0').fadeOut(200, "linear", function () {
                    $('#' + name + '-3').fadeIn(400, "linear");
                    index['' + name + ''] = 3;
                    protector=0;
                });
            } else {
                var time =200;

                if(index[''+name+'']==3)
                 time=100;

                $('#' + name + '-' + index['' + name + '']).fadeOut(time, "linear", function () {
                    index['' + name + '']--;
                    $('#' + name + '-' + index['' + name + '']).fadeIn(2*time, "linear");
                    protector=0;
                });
            }
        }

    }
    function nextSlide(){

         if(protector==0){
             protector=1;
             if(index[''+name+'']==3){
                 $('#'+name+'-3').fadeOut(100,"linear",function(){
                     $('#'+name+'-0').fadeIn(200,"linear");
                     index[''+name+'']=0;
                     protector=0
                 });
             }else
             {
                 $('#'+name+'-'+index[''+name+'']).fadeOut(200,"linear",function(){
                     index[''+name+'']++;
                     $('#'+name+'-'+index[''+name+'']).fadeIn(400,"linear");
                     protector=0;
                 });
             }
         }

    }


    $('.forow a').click(function(e){

        e.preventDefault();

        id = e.target.id;

        name = id.substr(0, id.length-5);

        var slide = id.substring(id.length - 4);

        if(slide=='next'){
            nextSlide(e);
        }
        else if(slide=='prev'){
            prevSlide(e);
        }

    });

    $('.close-modal').click(function(e){
        e.preventDefault();
        //stop video
        $('#modal-video').attr('src', $('#modal-video').attr('src'));
        $('.pop-up').hide();
    });

});
