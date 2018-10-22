//load root node


fetch('data.json', {mode: 'no-cors'}).then(function(res) {
  return res.json()
}).then(function(data) {
  
var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
 
  
    boxSelectionEnabled: false,
    autounselectify: true,
 
    layout: {
        name: 'cose-bilkent',
        animate: false
      }, 
    
    style: [
        {
          selector: 'node',
          style: {
            'background-color': 'blue',
            'content': 'data(id)'
          }
        },

        {
          selector: '.sqliFound',
          style: {
            'background-color': 'blue',
            'shape': 'triangle'
          }
        },

        {
          selector: '.xssFound',
          style: {
            'background-color': 'blue',
            'shape': 'diamond'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ad1a66'
          }
        }
      ],
      
  
    
      
    //load subsequent nodes
    elements: data

      
    //change the style of the nodes if necessary

   
    
});
//change formating if necessary.... (wip)
cy.nodes().forEach(function( ele ){
  if (ele.data("sqli") == true){
    //cy.$(ele.data("id")).classes("secondClass");
    ele.classes('sqliFound');
    ele.animate({
      style: {
        'background-color': 'red',
      }
    });
  } else if (ele.data("xss") == true) {
    ele.classes('xssFound');
    ele.animate({
      style: {
        'background-color': 'red',
      }
    });
  }
}); 

});


  
