/**
 * Created by Administrator on 2016/8/30.
 *//*导航栏移动效果*/
    $('.nav li,.nav dd').mouseenter(function(){
        $(this).children('.navDl').hide().slideDown();
    });
$('.nav li,.nav dd').mouseleave(function(){
    $(this).children('.navDl').hide().slideUp();
});

/*图片左右淡入淡出*/
var fadeObj={
    flashNode:$('#flash'),
    lisNode:$("#flash li"),
    spansNode:$("#flash .flash_btn span"),
    leftNode:$('#flash_left'),
    ulNode:$('#flash .flash_img'),
    rightNode:$('#flash_right'),
    spanCurString:'#flash .flash_btn .current',
    spanCurName:"current",
    fadeInOut:function(oldPos,curPos){
        fadeObj.spansNode.eq(oldPos).removeClass();
        fadeObj.spansNode.eq(curPos).addClass(fadeObj.spanCurName);
        fadeObj.lisNode.eq(oldPos).stop(false,true).fadeOut();
        fadeObj.lisNode.eq(curPos).stop(false,true).fadeIn();
    },
    autoDo:null
};
fadeObj.ulNode.hover(
    function(){//移入
        fadeObj.leftNode.show();
        fadeObj.rightNode.show();
        window.clearInterval(fadeObj.autoDo);
    },
    function(){//移出
        fadeObj.leftNode.hide();
        fadeObj.rightNode.hide();
        fadeObj.autoDo=window.setInterval(function(){
            fadeObj.rightNode.click();
        },3000);
    }
);

fadeObj.spansNode.mouseenter(function(){
    if($(this).is("."+fadeObj.spanCurName))
    {
        return;
    }

    var oldPos=$(fadeObj.spanCurString).index();
    var curPos=$(this).index();
    fadeObj.fadeInOut(oldPos,curPos);
});

fadeObj.rightNode.click(function(){
    var oldPos=$(fadeObj.spanCurString).index();
    var lastPos=fadeObj.spansNode.length-1;
    var curPos=oldPos==lastPos?0:oldPos+1;
    fadeObj.fadeInOut(oldPos,curPos);
});
fadeObj.leftNode.click(function(){
    var oldPos=$(fadeObj.spanCurString).index();
    var lastPos=fadeObj.spansNode.length-1;
    var curPos=oldPos==0?lastPos:oldPos-1;
    fadeObj.fadeInOut(oldPos,curPos);
});
fadeObj.autoDo=window.setInterval(function(){
    fadeObj.rightNode.click();
},3000);


/*四个球的滚动效果*/
$('.move-small li').mouseenter(function(){
    if($(this).hasClass('moveCur')){
        return;
    }
    var oldPos=$('.moveCur').index();
    $('.move-small li').eq(oldPos).removeClass('moveCur').animate({width:'167px'},300);
    $(this).addClass('moveCur').animate({width:'502px'},300)
});



/*关于我们图片移动效果*/
$('.about-left').mouseenter(function(){
    $(this).find('img').stop().animate({width:'550px',marginLeft:'-5px 0 0 5px'},500)
    $(this).find('p').stop().animate({top:'0px'},500)
});
$('.about-left').mouseleave(function(){
    $(this).find('img').stop().animate({width:'491px',marginLeft:'0px 0 0 0px'},500)
    $(this).find('p').stop().animate({top:'241px'},500)
});
/*右边内容左右切换*/
$('.btn-left').click(function(){
    var rightLiLast=$('.about-right li:last');
    var rightLiWidth=$('.about-right li:first').width();
    rightLiLast.css({marginLeft:-rightLiWidth+'px'}).prependTo(rightLiLast.parent())
        .show(function(){
        $(this).css('margin-left','0px');});
    window.clearInterval(autoDo);
});
$('.btn-right').click(function(){
    var rightLiFirst=$('.about-right li:first');
    var rightLiWidth=$('.about-right li:first').width();
    rightLiFirst.show(function(){
        $(this).css({marginLeft:-rightLiWidth+'px'})
    }).appendTo(rightLiFirst.parent()).css('margin-left','0px');
        autoDo=window.setInterval(function(){
            $('.btn-right').click();
        },3000);
});
 var autoDo=window.setInterval(function(){
     $('.btn-right').click();
},3000);

/* 合作部分移动效果图*/
$('#client .btn2-left').click(function(){
     var lisWidth=$('#client .img-ul li:first').width();
    $('#client .img-ul li:last').stop().css({marginLeft:-lisWidth+'px'}).prependTo('#client .img-ul').animate({marginLeft:'0px'},300);});

$('#client .btn2-right').click(function(){
    var lisWidth=$('#client .img-ul li:first').width();
    $('#client .img-ul li:first').stop().animate({marginLeft:-lisWidth+'px'},300,function(){
        $(this).css({marginLeft:'0px'}).appendTo('#client .img-ul');
    })

});


/*箭头回到顶部的效果*/
$(window).scroll(function(){
   var windowHeight=$(window).height();
    var scrollTop=$(window).scrollTop();
    if(scrollTop<=windowHeight){
        $('#TOP').hide();
    }
    else{
        $('#TOP').show();
    }
});
$('#TOP').click(function(){
    $('body,html').animate({scrollTop:'0px'},300);
});



/*第二部分*/
$('.listNav li').click(function(){
    $(this).addClass('current').siblings('.current').removeClass('current');
     var className=$(this).attr('data');
    if(className=='*')
        $('#list ul').children(className).stop().slideDown();
    else{
        $('#list ul').children(className).stop().slideDown();
        $('#list ul').children(className).siblings('li:not('+className+')').stop().slideUp();
    }
});




