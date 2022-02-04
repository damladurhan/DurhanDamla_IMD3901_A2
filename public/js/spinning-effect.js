'use strict'

AFRAME.registerComponent('spinning-effect', {
    schema: {
        duration: {type:'number', default:20000}
    },

    init: function() {
        //setup. called once at creation after the aframe scene has loaded

        const CONTEXT_AF = this;
        CONTEXT_AF.walls = document.querySelector('#walls');
        //CONTEXT_AF.sculpture = document.querySelector('#sculpture');
        CONTEXT_AF.isSpinning = false;

        CONTEXT_AF.walls.setAttribute('animation', {property:'position.x', from:-250, to:120, loop:true, dur:6000, easing:'linear', enabled:false});
        const ambientSounds = document.querySelectorAll('.ambient-sound');
        

        CONTEXT_AF.el.addEventListener('click', function(){
            if(CONTEXT_AF.isSpinning===true){
                console.log('stop spinning');
                CONTEXT_AF.walls.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSpinning = false;  

                
              ambientSounds.forEach(function(soundEntity){
                  soundEntity.components['sound'].playSound();
              });
                
            }
            else{
                console.log('start spinning');
                CONTEXT_AF.walls.setAttribute('animation', {enabled:true});

                CONTEXT_AF.isSpinning = true;
            }
        })

    }
    
})
