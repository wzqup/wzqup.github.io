// 食物
(function (window) {
    
    // 保存食物
    var food;
    // 食物对象构造函数
    function Food (width,height,bgColor,x,y){
        this.width = width || 20;
        this.height = height || 20;
        this.bgColor = bgColor || 'green';
        this.x = x || 0;
        this.y = y || 0;
    }
    Food.prototype.render = function (map){

        // 随机生成食物的位置
        this.x = Math.floor(Math.random()*map.offsetWidth/this.width) * this.width;
        this.y = Math.floor(Math.random()*map.offsetHeight/this.height) * this.height;

        // 随机生成食物颜色
        this.bgColor = getColor();

        // 生成新的食物之前先删除老的食物
        if(food) {
            map.removeChild(food);
        }
        
        // 创建一个div
        var divFood = document.createElement('div');
        divFood.style.position = 'absolute';
        divFood.style.left = this.x + 'px';
        divFood.style.top = this.y + 'px';
        divFood.style.width = this.width + 'px';
        divFood.style.height = this.height + 'px';
        divFood.style.backgroundColor = this.bgColor;

        // 添加到地图上
        map.appendChild(divFood);
        food = divFood;
    }

    function getColor() {
        var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        var str = "#";
        for(var i = 0 ; i < 6 ; i++){
            var num = Math.floor(Math.random()*16);
            str += arr[num];
        }
        return str;
    }
    
    window.Food = Food;
}(window))