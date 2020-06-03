// 전체 게임을 포함 할 상태 만들기
var level_1 = [
    'xxxxxxxxxxxxxxxxxxxxxx',
    '!                    x',
    '!                    x',
    '!                    x',
    '!                    x',
    '!                    x',
    '!                    x',
    '!                    x',
    '!         o          x',
    '!         o          x',
    '!         o          x',
    'xxxxxxxxxxxxxxxx!!!!!x',
];
var level_2 = [
    'xxxxxxxxxxxxxxxxxxxxxx',
    '!                    x',
    '!   o              o x',
    '!         o          x',
    '!                    x',
    '!    x o x  !  x     x',
    '!         !          x',
    '!                 o xx',
    '!   o     o          x',
    '!                 xx x',
    '!    x o x  !  x!!!! x',
    'xxxxxxxxxxxxxxxx!!!!!x',
];
var levels = [level_1, level_2]
var index = 0
var mainState = {
    preload: function () {
        game.load.image("player", "assets/player.png")
        game.load.image("wall", "assets/wall.jpg")
        game.load.image("coin", "assets/coin.png")
        game.load.image("enemy", "assets/enemy.png")
        game.load.audio("BGM", "assxets/bgm.mp3")
    },
    create: function () {
        // 여기에 게임을 만듭니다.
        game.stage.backgroundColor = '#3598db';
        game.physics.startSystem(Phaser.Physics.ARCADE)
        game.world.enableBody = true;
        this.player = game.add.sprite(100, 100, "player")
        this.player.body.gravity.y = 1000;
        this.player.body.collideWorldBounds = true
        this.cursor = game.input.keyboard.createCursorKeys();
        // 레벨을 디자인하십시오. x = 벽, o = 동전,! = 용암.
        var level = levels[index]
        this.player.width = 20;
        this.player.height = 20;
        this.walls = game.add.group()
        this.coins = game.add.group()
        this.enemys = game.add.group()
        this.coinCount = 0
        for (var y in level) {
            for (var x in level[y]) {
                /**
                 * x 를 만나면:
                 *  x를 x 좌표 20 곱한만큼 y 좌표에 20 곱한만큼 만든다
                 * ! 를 만나면
                 *  !를 x 좌표 20 곱한만큼 y 좌표에 20 곱한만큼 만든다
                 * o 를 만나면
                 *  coin 를 x 좌표 20 곱한만큼 y 좌표에 20 곱한만큼 만든다
                 */
                if (level[y][x] == "x") {
                    var wall = game.add.sprite(80 + x * 20, 80 + y * 20, "wall")
                    this.walls.add(wall)
                    wall.body.immovable = true
                    wall.width = 20;
                    wall.height = 20;
                }
                if (level[y][x] == "!") {
                    var wall = game.add.sprite(80 + x * 20, 80 + y * 20, "enemy")
                    this.enemys.add(wall)
                    wall.width = 20;
                    wall.height = 20;
                }
                if (level[y][x] == "o") {
                    var wall = game.add.sprite(80 + x * 20, 80 + y * 20, "coin")
                    this.coinCount += 1
                    this.coins.add(wall)
                    wall.width = 20;
                    wall.height = 20;
                }
            }
        }

        this.secText = game.add.text(0, 0, "0 sec")
        this.sec = 0
        game.time.events.loop(1000, this.setTime, this)
        this.bgm = game.add.audio("BGM")
        this.bgm.play()
    },

    update: function () {
        game.physics.arcade.collide(this.player, this.walls)
        if (this.cursor.left.isDown == true) {
            this.player.body.velocity.x = -200;
        }
        else if (this.cursor.right.isDown == true) {
            this.player.body.velocity.x = 200;
        }
        else {
            this.player.body.velocity.x = 0
        }
        if (this.cursor.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -350
        }
        game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this)
        game.physics.arcade.overlap(this.player, this.enemys, this.restart, null, this)
    },

    takeCoin: function (player, coin) {
        coin.kill()
        this.coinCount -= 1

        if (this.coinCount == 0) {
            setTimeout(() => {
                this.winGame()
            }, 1000);
        }
    },
    restart: function () {
        game.state.start('main');
    },
    winGame: function () {
        if (index == 1) {
            alert("win")
        } else {
            index = 1
            game.state.start('main');
        }
    },
    setTime: function () {
        this.sec += 1
        this.secText.text = this.sec + " sec"
    }
};

var game = new Phaser.Game(1000, 400);
game.state.add('main', mainState);
game.state.start('main');
