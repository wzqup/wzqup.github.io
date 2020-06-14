// 游戏逻辑代码
(function (window) {
    var that = null,
        time = 300,      // 计时器初始时间 越大蛇移动越慢
        timerId = null,  // 计时器id
        snakeLength = 3; // 蛇身初始长度
    // 控制器构造函数
    function Game(map) {
        // 食物
        this.food = new Food();
        // 蛇
        this.snake = new Snake();
        // 地图(活动区域)
        this.map = map;
        // 给that赋值this
        that = this;
    }

    Game.prototype.start = function () {
        // 渲染食物
        this.food.render(this.map);
        // 渲染蛇
        this.snake.render(this.map);
        // 让蛇移动
        snakeAutoMov();
        // 根据键盘方向键移动
        bindKey();
    }

    // 蛇自动移动
    function snakeAutoMov(c) {
    
        timerId = setInterval(function () {

            // 移动
            this.snake.move(this.food, this.map);

            // 判断是否出界 蛇头坐标小于0 或者大于地图的宽高
            var snakeHeadX = this.snake.body[0].x * this.snake.width,
                snakeHeadY = this.snake.body[0].y * this.snake.height;

            if (snakeHeadX < 0 || snakeHeadY < 0 || snakeHeadX >= this.map.offsetWidth || snakeHeadY >= this.map.offsetHeight) {
                alert('Game Over!');
                clearInterval(timerId);
                return;
            } else if (this.snake.body.length > snakeLength) {
                // 更新蛇的长度
                snakeLength = this.snake.body.length;
                // 吃到食物后加速
                time = 300 - (this.snake.body.length-3)*10  ;
                // 清除原计时器
                clearInterval(timerId);
                // 递归
                snakeAutoMov();
            }

            // 重新渲染
            this.snake.render(this.map);

        }.bind(that), time);
    }

    // 让蛇跟随键盘移动
    function bindKey() {
        document.onkeydown = function (e) {
            e = e || window.event;
            // 左 37 上 38 右 39 下 40
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left';
                    break;
                case 38:
                    this.snake.direction = 'top';
                    break;
                case 39:
                    this.snake.direction = 'right';
                    break;
                case 40:
                    this.snake.direction = 'bootom';
                    break;
            }
        }.bind(that);
    }

    window.Game = Game;

}(window))