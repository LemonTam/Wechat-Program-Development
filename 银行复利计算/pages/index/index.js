//index.js
var start,grow,sum;
Page({
  startNum:function(e){
    start=parseInt(e.detail.value);
  },
  growNum:function(e){
    grow=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=start;
    for(var i=1;i<=5;i++){
      sum=sum*(1+grow);
    }
    this.setData({
      sum:sum
    })
  }
})
