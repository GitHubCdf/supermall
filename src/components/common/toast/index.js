import Toast from './Toast' 

const toast = {}

toast.install = function(Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2. 创建组件构造对象
  const obj = new toastConstructor()
  //3.手动挂载组件 
  obj.$mount(document.createElement('div'))


  document.body.appendChild(obj.$el);

  Vue.prototype.$toast = obj
  
}

export default toast