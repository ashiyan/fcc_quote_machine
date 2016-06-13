/* global $, document */

// Выполнение скрипта начинается тольк после загрузки всех элементов страницы
$(document).ready(function () {
	
	// К блоку «.phrase» привязываем событие клика мышью
	$(".quote-desk").on("click", function() {
		
		// Метод «ajax()» принимает в качестве параметра пачку настроек и URL, куда стучаться
		$.ajax({
			
			// Локальное событие «beforeSend» возникает до отправки запроса
			// Здесь мы передаем наш Mashape API Ключ для аутентификации
			beforeSend: function(xhr) {
				xhr.setRequestHeader("X-Mashape-Authorization", "Gd5ZAlhLckmshMyrjz6IhAHeH8enp18Dz7Gjsn4ECwhUAJnSgd");
			},
			
			// Указываем URL
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
			
			// Тип загружаемых данных
			dataType: "json",
			
			// Локальное событие «success» возникает по возвращению ответа,
			// когда нет ошибок ни сервера, ни вернувшихся данных
			success: function (data) {		
				$(".phrase").text(data.quote);
				$(".author").text("- " + data.author);
			},
			
			// Локальное событие «error» возникает в случае ошибки при получении данных от сервера
			// В этом случае используем локальный набор цитат с рандомным выбором для отображения
			error: function() {
		
				var quote = [
					["People don't read any more. It's a sad state of affairs. Reading's the only thing that allows you to use your imagination. When you watch films it's someone else's vision, isn't it?", "Lemmy Kilmister"],
					["Movies are like an expensive form of therapy for me.", "Tim Burton"],
					["You know what your problem is, it's that you haven't seen enough movies - all of life's riddles are answered in the movies.", "Steve Martin"],
					["Films might get to you and your subconscious and make a little difference, but when the vigilante drum beats, the mob screams and the conformists go along with it. There have to be people who are non-conformists.", "Oliver Stone"],
					["Give them pleasure. The same pleasure they have when they wake up from a nightmare.", "Alfred Hitchcock"],
					["It's funny how the colors of the real world only seem really real when you watch them on a screen.", "Anthony Burgess"],
					["The book is a film that takes place in the mind of the reader. That's why we go to movies and say, \"Oh, the book is better.\"", "Paulo Coelho"],
					["Cinema is a matter of what's in the frame and what's out.", "Martin Scorsese"],
					["People see so many movies that when they finally see one not so bad as the others, they think it's great. an Academy Award means that you don't stink quite as much as your cousin.", "Charles Bukowski"],
					["I was feeling rational and restless, which is horrible for watching movies.", "Sinclair Lewis"],
					["Starting with a party scene for 600 cast and end up singing on top of a giant elephant...does it get any better than this?", "Ewan McGregor"]
				];

				var randomNum = Math.floor(Math.random()*quote.length);

				$(".phrase").text(quote[randomNum][0]);
				$(".author").text("- " + quote[randomNum][1]);
			}
		});
	});
	
	// Имитация клика мышью для автоматической загрузки первой цитаты
	$(".quote-desk").trigger("click");
	
	// Создание ссылки для твита
	$(".share").on("click", function() {
		$(".link").attr("href", 'https://twitter.com/intent/tweet?text=' + $(".phrase").text() + " -" + $(".author").text() + " @Lex https://codepen.io/exandar/full/Vjvzvj/");
	});
});