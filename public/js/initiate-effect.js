'use strict'

AFRAME.registerComponent('initiate-effect', {
    init : function() {
        const CONTEXT_AF = this;

        CONTEXT_AF.sculpture = document.querySelector('#sculpture');

        CONTEXT_AF.sculpture.setAttribute('animation', {property:'position.y', to:1, loop:true, dur:CONTEXT_AF.data.duration, easing:'linear', enabled:false});
          console.log('scene loaded');
          document.querySelector('#sculpture').style.display = 'block';

          
    }

});

