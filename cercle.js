const b = JXG.JSXGraph.initBoard('cercle', {boundingbox: [-5, 5, 5, -5] , axis:true,showCopyright:false,
    showNavigation:false,keepaspectratio:true});
  
const p1 = b.create('point',[0,0], {name:'A',size: 2, face: 'o'});

const p2 = b.create('point',[2,-1], {name:'B',size: 2, face: 'o'});
const ci = b.create('circle',["A","B"], {strokeColor:'black',strokeWidth:2});  

const t_cer = b.create('text',[-4,4,"Cercle"], 
    { 
      cssClass:'myFont', 
      strokeColor:'red',
      highlightCssClass: 'myFontHigh',
      fontSize:20
    }
    );
    t_cer.isDraggable=false;
