(function(){
    const value = document.getElementById('calc');
    const calcConsole = document.getElementById('console');
    // Print numbers to console 
    value.addEventListener('click', (e) => {
        
        if(e.target.value !== undefined && e.target.value !== '=' && e.target.value !== 'AV' && e.target.value !== 'c' && e.target.value !== '÷' && e.target.value !== '×'){
            calcConsole.value += e.target.value;  
        }else if(e.target.value == '÷'){
            calcConsole.value += '/'
        }else if(e.target.value == '×'){
            calcConsole.value += '*'
        }else if(e.target.value == '='){
            calcConsole.value = eval(calcConsole.value)
        }else if(e.target.value == 'c'){
            calcConsole.value = '';
        }
    })

    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-two' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-two' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-two' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-two' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-three' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-three' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-three' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-three' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-four' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-four' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-four' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-four' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-five' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-five' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-five' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-five' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-six' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-six' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-six' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-six' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-seven' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-seven' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-seven' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-seven' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-eight' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-eight' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-eight' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-eight' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseover', function( event ) {
        if( event.target.classList.contains( 'hov-nine' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-nine' ), function( elem ) {
                elem.classList.add( 'hover' );
            });
        }
    });
    
    document.body.addEventListener( 'mouseout', function( event ) {
        if( event.target.classList.contains( 'hov-nine' ) ) {
            [].forEach.call(document.getElementsByClassName( 'hov-nine' ), function( elem ) {
                elem.classList.remove( 'hover' );
            });
        }
    });
}());





















