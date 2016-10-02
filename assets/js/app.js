/*!
 * by Henrique Arthur <hnrq.art@gmail.com>
 */
$(document).ready(function(){$.getJSON("projects/list.json",function(a){var n;$.each(a,function(a,i){var e=i.front_end?'<div class="ui blue label">Front-end</div>':"",t=i.back_end?'<div class="ui violet label">Back-end</div>':"";if(i.link!==!1)var o='<a href="'+i.link+'" target="_blank">Visitar projeto</a>';else var o="<small>Este projeto não encontra-se mais online.</small>";n='<div class="box-project cf"><div class="project-infos"><div class="project-name cursorPointer">'+i.name+'</div><div class="project-desc">'+i.desc+'</div><div class="project-hidden-infos"><div class="text-infos">'+e+t+"<br><br>"+i.longdesc+'</div><div class="fRight"><small>'+i.data+"</small><br>"+o+'</div></div></div><a href="'+i.imagem+'" data-lightbox="projects" data-title="'+i.name+'"><div class="project-img" style="background-image: url('+i.imagem+');" data-inverted data-tooltip="clique para ampliar" data-position="top center"></div></a></div>',$(".projects-list").append(n)})}),$(".go-projects").on("click",function(){$("#main.page").removeClass("animated fadeIn"),$("#main.page").addClass("animated flipOutY"),$("#main.page").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#main.page").removeClass("animated flipOutY").css("display","none"),$("#projects.page").css("display","block").addClass("animated flipInY"),$("#projects.page").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#projects.page").removeClass("animated flipInY")})})}),$(".go-contact").on("click",function(){$("#main.page").removeClass("animated fadeIn"),$("#main.page").addClass("animated flipOutY"),$("#main.page").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#main.page").removeClass("animated flipOutY").css("display","none"),$("#contact.page").css("display","block").addClass("animated flipInY"),$("#contact.page").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#contact.page").removeClass("animated flipInY")})})}),$(".go-main").on("click",function(){var a=$(this).data("page"),n=$("#"+a+".page");n.addClass("animated flipOutY"),n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n.removeClass("animated flipOutY").css("display","none"),$("#main.page").css("display","block").addClass("animated flipInY"),$("#main.page").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#main.page").removeClass("animated flipInY")})})}),$(".projects-list").on("click",".project-name",function(){var a=$(this).parent().find(".project-hidden-infos");"none"==a.css("display")?a.fadeIn():a.fadeOut()}),lightbox.option({showImageNumberLabel:!1,fitImagesInViewport:!1,maxWidth:"100%"}),$("#contact-form").form({on:"submit",fields:{name:"empty",email:"email",message:"empty"},onSuccess:function(a,n){a.preventDefault(),$("#contact-form").animate({opacity:.5},"fast"),$.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLSc0FMxUpg-wgMf-FoDZ0HePSwg0yD9YTaRIzNoNiP5rpLSnNg/formResponse",data:{"entry.414585514":n.name,"entry.1416397509":n.email,"entry.1272364480":n.message},type:"POST",dataType:"xml",statusCode:{0:function(){$("#contact-form").animate({opacity:1},"fast"),$("#contact-form-message").html('<div class="ui positive message small"><i class="close icon"></i><div class="header">Enviado!</div>Sua mensagem já foi enviada. Responderei assim que possível!</div><br>'),$("#cf-name, #cf-email, #cf-message").val("")},200:function(){$("#contact-form").animate({opacity:1},"fast"),$("#contact-form-message").html('<div class="ui positive message small"><i class="close icon"></i><div class="header">Enviado!</div>Sua mensagem já foi enviada. Responderei assim que possível!</div><br>'),$("#cf-name, #cf-email, #cf-message").val("")}}})}})});