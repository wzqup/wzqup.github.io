// 蛇
(function (window) {
    // 声明一个数组 用来保存蛇的身体
    var list = [];

    // 构造蛇的身体
    function Snake(width,height,direction){
        this.width = width || 20 ;
        this.height = height || 20;
        this.direction = direction || 'right';
        this.body = [
            {x:3,y:1,bgColor:'red'},
            {x:2,y:1,bgColor:'green'},
            {x:1,y:1,bgColor:'pink'}
        ];
    }
    // 蛇身渲染
    Snake.prototype.render = function (map) {
        // 渲染新蛇之前删除老蛇
        remove(map);
        // 遍历蛇身数组 创建div
        for(var i = 0 ; i < this.body.length; i++){
            var sdiv = document.createElement('div');
            sdiv.style.position = 'absolute';
            sdiv.style.left = this.body[i].x * this.width + 'px';
            sdiv.style.top = this.body[i].y * this.height + 'px';
            sdiv.style.width = this.width + 'px';
            sdiv.style.height = this.height + 'px';
            sdiv.style.backgroundColor = this.body[i].bgColor;
            map.appendChild(sdiv);
            
            // 保存到数组
            list.push(sdiv);
        }
    }
    // 删除老蛇
    function remove(map){
        for(var i = 0; i < list.length; i++){
            map.removeChild(list[i]);
        }
        // 清空数组
        list.length = 0;
    }
    // 移动
    Snake.prototype.move = function (food,map){
        // 除了蛇头之外,移动之后的坐标是他前一节移动前的坐标
        for(var i = this.body.length - 1; i > 0 ; i --){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        // 蛇头的移动
        switch (this.direction){
            case 'bootom':
                this.body[0].y++;
                break;
            case 'top':
                this.body[0].y--;
                break;
            case 'left':
                this.body[0].x--;
                break;
            case 'right':
                this.body[0].x++;
                break;
        }
        // 判断是否吃到食物 -- 蛇头坐标是否和食物坐标重合
        var snakeHeadX = this.body[0].x * this.width,
            snakeHeadY = this.body[0].y * this.height,
            foodX = food.x,
            foodY = food.y;
        
        if(snakeHeadX == foodX && snakeHeadY == foodY){
            // 当前蛇的尾部
            var lastSnake = this.body[this.body.length-1];
            // 添加身体
             this.body.push({
                 x:lastSnake.x,
                 y:lastSnake.y,
                 bgColor:food.bgColor
             });
             // 产生新食物
             food.render(map);
        }


    }


    window.Snake = Snake;
}(window))