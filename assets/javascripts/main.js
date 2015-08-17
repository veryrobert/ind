$('.carousel').carousel();

$(function() {
    $('[data-toggle="tooltip"]').tooltip({
    	html: true
    })
})

$(function() {
    $('[data-toggle="popover"]').popover({
    	html: true
    })
})

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
});

$('nav a.scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 180
    }, 500);
    return false;
});



$('.panel-heading').each(function(){

	$(this).on('click', function(){
		// $('.panel-heading').removelass('open');
		$(this).addClass('open');

	});

});


$(document).ready(function(){    
    $('#accordProfile').on('shown', function () {
       $(".icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-up");
    });

    $('#accordProfile').on('hidden', function () {
       $(".icon-chevron-up").removeClass("icon-chevron-up").addClass("icon-chevron-down");
    });
});





if (document.getElementById('map')) {
    var locations = [
        [53.217925, -6.663689,
            '<h3 class="orange-text">Novi</h3><p class="orange-text">Sycamore House<br>Lime Tree Avenue<br>Millennium Park<br>Naas, Co.Kildare</p>'
        ],
        [51.898209, -8.465730,
            '<h3 class="orange-text">Novi</h3><p class="orange-text">Sixth Floor<br>5 Lapps Quay<br>Cork</p>'
        ],
        [53.277843, -6.213987,
            '<h3 class="orange-text">Novi</h3><p class="orange-text">17 Corrig Road, <br>Sandyford Industrial<br>Estate, Dublin 18'
        ]
    ];
    
    $('.accordion-toggle').click(function() {
        $("html, body").animate({
            scrollTop: $('#accordion').offset().top - 140
        }, 600);
        console.log('boom');
    });

    var icon = 'assets/marker.svg';
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        scrollwheel: false,
        center: new google.maps.LatLng(52.256858, -7.112343),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[
                i][1]),
            map: map,
            icon: icon
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function replaceImgWithBgImg(elementSelector) {
    $(elementSelector).each(function(i, elem) {
        var img = $(elem);
        div = $("<div />").css({
            "background-image": "url(" + img.attr("src") +
                ")",
            "background-repate": "no-repeat",
            "background-size": "cover",
            "height": 640,
            "background-position": "center",
            "width": '100%'
        });
        div.html();
        div.addClass('sliderBg');
        img.replaceWith(div);
    });
}
replaceImgWithBgImg('div.item > img');