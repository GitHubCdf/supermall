export default function animate(obj, target, callback) {
  
  clearInterval(obj.timer)  //先清除计时器在创建

  obj.timer = setInterval( () => {
    if(obj.$el.offsetLeft == target) {
      clearInterval(obj.timer);
    } else {
      let step = (target - obj.$el.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      obj.$el.style.marginLeft = obj.$el.offsetLeft + step + 'px';
    }
  },15)

} 