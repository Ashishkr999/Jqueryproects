
  
    
    $(document).ready(function() {
        
        
        
        $('nav').css({
            'background-color': '#333',
            'border-radius': '20px',
            'padding': '5px 0',
            'text-align': 'center'
        });
    
        $('nav ul').css({
            'list-style-type': 'none',
            'padding': ''
        });
    
        $('nav ul li').css({
            'display': 'inline',
            'margin-right': '50px'
        });
    
        $('nav ul li a').css({
            'text-decoration': 'none',
            'color': '#fff',
            'font-weight': 'bold'
        });
    
        $('nav ul li a').hover(function() {
            $(this).css('color', '#ffa500');
        }, function() {
            $(this).css('color', '#fff'); 
        });
    });
    $('.portfolio').css({
        'background': 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
        'color': '#fff',
        'padding': '50px',
        'text-align': 'center',
        'font-family': 'Roboto, sans-serif',
        'border-radius': '20px',
        'box-shadow': '0 0 20px rgba(0, 0, 0, 0.3)'
    });

    $('#wel').css({
        'border-bottom': '2px solid #fff',
        'padding': '20px',
        'font-size': '24px'
    });

    $('#well').css({
        'margin': '20px',
        'font-size': '18px'
    });

    $('.projects').css({
        'display': 'flex',
        'justify-content': 'center',
        'gap': '20px',
        'margin-top': '30px'
    });

    $('.project').css({
        'background': '#fff',
        'border-radius': '10px',
        'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.2)',
        'overflow': 'hidden',
        'transition': 'transform 0.3s ease',
        'width': '300px'
    });

    $('.project').hover(function() {
        $(this).css('transform', 'translateY(-5px)');
    }, function() {
        $(this).css('transform', 'translateY(0)');
    });

    $('.project img').css({
        'max-width': '100%',
        'border-bottom': '1px solid #ddd'
    });

    $('.project h2').css({
        'margin': '20px 0',
        'font-family': 'Roboto, sans-serif',
        'font-size': '20px',
        'color': '#333'
    });

    $('.project p').css({
        'padding': '0 20px 20px',
        'color': '#666'
    });

