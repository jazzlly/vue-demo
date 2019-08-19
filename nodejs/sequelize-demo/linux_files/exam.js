
/**
 *  @author Eugene Terentev <eugene@terentev.net>
 */

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var qids = $("input[name='qids[]']")
var forgetCount = qids.length


function progress() {
    forgetCount = qids.length
    for (var i = 0; i < qids.length; i++) {
        var qid = $(qids[i]).val()
        var radio = $(':radio[name="radio' + qid + '"]');
        var checkbox = $(':checkbox[name="checkbox' + qid + '[]"]');
        if(  radio.length == 0 ){
            radio = checkbox;
        }
        var item = $("#item-"+qid) ;
        if (!radio.filter(':checked').length) {
            item.removeClass('has-answer');
            item.addClass('no-answer');
        }else{
            forgetCount--;
            item.removeClass('no-answer');
            item.addClass('has-answer');
        }
    }
    $('.progress-bar').css('width', ( (qids.length -forgetCount)*100 / qids.length )+'%' )
    $('#progress-tip').html( (qids.length -forgetCount) +'/'+ qids.length );

}

progress();
$('.exam-main label').click(progress)

//点击答题卡，直接跳转到对应的题目
$("#sidebar li").click(function () {
    var li = $(this)
    var id = li.attr('id').substr(5);
    var input = $("input[value="+id+"]")
  //  alert( $(input.parent()).html() )
    var item = input.closest('.panel').find('.panel-heading');
    //$("window").animate({scrollTop: panel.offset().top - 30}, 200);
    //input.closest('.panel').removeClass('twinkle');
    $(window).scrollTop(item.offset().top-30);
    //item.siblings().removeClass('twinkle');
    item.addClass('twinkle');
    setTimeout(function(){
        item.removeClass('twinkle')
    },1000)

})

function forget() {
    if( forgetCount > 0 ){
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: '提示',
            message: '<p class="text-center text-warning"> 您还有'+forgetCount+'道题尚未作答，确定要交卷吗？</p>' ,
            buttons: [{
                label: '取消',
                cssClass:'btn btn-default',
                action: function(dialog) {
                    dialog.close();
                }
            }, {
                label: '确认',
                cssClass:'btn btn-success',
                action: function(dialog) {
                    $('#subtn').off('click')
                    $('#examForm').submit();
                }
            }]
        })
    }else{
        $('#subtn').off('click')
        $('#examForm').submit();
    }

}

//$('#subtn').click( debounce( forget, 100) );
$('#subtn').click(  forget );

function onScroll() {
    var scrollTop = $(document).scrollTop();
    if ($(window).width()> 992){
        if (scrollTop > 150) {
            var width = $('#sidebar').width();
            $('#sidebar').addClass('fixed');
            $('#sidebar').css({'width': (width + 2) + 'px'});
        } else {
            $('#sidebar').removeClass('fixed');
            $('#sidebar').css({'width': 'auto'});
        }
    } else {
        $('.right-part').css({'paddingLeft': 0});
    }
}

$(window).scroll( onScroll );
$(window).resize( onScroll );




