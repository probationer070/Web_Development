var Links = {
  SetColor:function(color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
      links[i].style.color= color;
      i=i+1;
    }
  }
}

var Body = {
  setcolor: function (color){
    document.querySelector('body').style.color= color;
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor= color;
  }
}
function nightdayButton(self){
  var target = document.querySelector('body').style;
  if (self.value === 'bright') {
    Body.setBackgroundColor('white');
    Body.setcolor('black');
    self.value = 'dark';

    Links.SetColor('black');

  } else {
    Body.setBackgroundColor('#181818');
    Body.setcolor('white');
    self.value = 'bright';

    Links.SetColor('powderblue');
  }
}
