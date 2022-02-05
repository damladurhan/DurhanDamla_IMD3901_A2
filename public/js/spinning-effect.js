'use strict'

AFRAME.registerComponent('spinning-effect', {
    schema: {
        duration: {type:'number', default:20000}
    },

    init: function() {
        //setup. called once at creation after the aframe scene has loaded

        const CONTEXT_AF = this;
        CONTEXT_AF.sun = document.querySelector('#lightSphere');
        CONTEXT_AF.isSpinning = false;

        CONTEXT_AF.sun.setAttribute('animation', {property:'position.x', from:-200, to:220, loop:true, dur:6000, easing:'linear', enabled:false});
        const ambientSounds = document.querySelectorAll('.ambient-sound');
        

        CONTEXT_AF.el.addEventListener('click', function(){
            if(CONTEXT_AF.isSpinning===true){
                console.log('stop spinning');
                CONTEXT_AF.sun.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSpinning = false;  
    
            }
            else{
                console.log('start spinning');
                CONTEXT_AF.sun.setAttribute('animation', {enabled:true});

                CONTEXT_AF.isSpinning = true;

                ambientSounds.forEach(function(soundEntity){
                    soundEntity.components['sound'].playSound();
                });
            }
        })

    }
    
})
