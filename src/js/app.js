/*!
 * by Henrique Arthur <hnrq.art@gmail.com>
 */

 $(document).ready(function() {
 	$.getJSON("projects/list.json", function(data) {
 		var html;

 		$.each(data, function(key, infos) {
 			var frontHtml = (infos.front_end) ? '<div class="ui blue label">Front-end</div>' : '';
 			var backHtml  = (infos.back_end) ? '<div class="ui violet label">Back-end</div>' : '';

 			if(infos.link !== false) {
 				var linkHtml = '<a href="'+infos.link+'" target="_blank">Visitar projeto</a>';
 			} else {
 				var linkHtml = '<small>Este projeto não encontra-se mais online.</small>';
 			}

 			html = '<div class="box-project cf"><div class="project-infos"><div class="project-name cursorPointer">'+infos.name+'</div><div class="project-desc">'+infos.desc+'</div><div class="project-hidden-infos"><div class="text-infos">'+frontHtml+''+backHtml+'<br><br>'+infos.longdesc+'</div><div class="fRight"><small>'+infos.data+'</small><br>'+linkHtml+'</div></div></div><a href="'+infos.imagem+'" data-lightbox="projects" data-title="'+infos.name+'"><div class="project-img" style="background-image: url('+infos.imagem+');" data-inverted data-tooltip="clique para ampliar" data-position="top center"></div></a></div>';

 			$(".projects-list").append(html);
 		});
 	});

 	$(".go-projects").on('click', function() {
 		$("#main.page").removeClass('animated fadeIn');
 		$("#main.page").addClass('animated flipOutY');

 		$('#main.page').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 			$("#main.page").removeClass('animated flipOutY').css('display', 'none');

 			$("#projects.page").css('display', 'block').addClass('animated flipInY');
 			$('#projects.page').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$("#projects.page").removeClass('animated flipInY');
 			});
 		});
 	});

 	$(".go-contact").on('click', function() {
 		$("#main.page").removeClass('animated fadeIn');
 		$("#main.page").addClass('animated flipOutY');

 		$('#main.page').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 			$("#main.page").removeClass('animated flipOutY').css('display', 'none');

 			$("#contact.page").css('display', 'block').addClass('animated flipInY');
 			$('#contact.page').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$("#contact.page").removeClass('animated flipInY');
 			});
 		});
 	});

 	$(".go-main").on('click', function() {
 		var page = $(this).data('page');
 		var sel = $("#"+page+".page");

 		sel.addClass('animated flipOutY');

 		sel.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 			sel.removeClass('animated flipOutY').css('display', 'none');

 			$("#main.page").css('display', 'block').addClass('animated flipInY');
 			$('#main.page').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$("#main.page").removeClass('animated flipInY');
 			});
 		});
 	});

 	$(".projects-list").on('click', '.project-name', function() {
 		var hiddenInfos = $(this).parent().find('.project-hidden-infos');

 		if(hiddenInfos.css('display') == 'none') {
 			hiddenInfos.fadeIn();
 		} else {
 			hiddenInfos.fadeOut();
 		}
 	});

 	lightbox.option({
 		showImageNumberLabel: false,
 		fitImagesInViewport: false,
 		maxWidth: '100%'
 	});

 	$('#contact-form').form({
 		on: 'submit',
 		fields: {
 			name     : 'empty',
 			email   : 'email',
 			message : 'empty',
 		},
 		onSuccess: function(e, fields) {
 			e.preventDefault();

 			$("#contact-form").animate({'opacity': 0.5}, 'fast');

 			$.ajax({
 				url: "https://docs.google.com/forms/d/e/1FAIpQLSc0FMxUpg-wgMf-FoDZ0HePSwg0yD9YTaRIzNoNiP5rpLSnNg/formResponse",
 				data: {"entry.414585514" : fields.name, "entry.1416397509" : fields.email, "entry.1272364480": fields.message},
 				type: "POST",
 				dataType: "xml",
 				statusCode: {
 					0: function (){
 						$("#contact-form").animate({'opacity': 1}, 'fast');
 						$("#contact-form-message").html('<div class="ui positive message small"><i class="close icon"></i><div class="header">Enviado!</div>Sua mensagem já foi enviada. Responderei assim que possível!</div><br>');

 						$("#cf-name, #cf-email, #cf-message").val('');
 					},
 					200: function (){
 						$("#contact-form").animate({'opacity': 1}, 'fast');
 						$("#contact-form-message").html('<div class="ui positive message small"><i class="close icon"></i><div class="header">Enviado!</div>Sua mensagem já foi enviada. Responderei assim que possível!</div><br>');

 						$("#cf-name, #cf-email, #cf-message").val('');
 					}
 				}
 			});
 		}
 	});
 });
