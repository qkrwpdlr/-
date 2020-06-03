var bestScore = 0
var mainState = {
    preload: function () {
        game.load.image('bird', 'assets/player.png');
        game.load.image('back', 'assets/back.png');
        game.load.image('pipe', 'assets/pipe.png');
        game.load.audio('jump', 'assets/jump.wav');
        game.load.image('boom', 'assets/boom.png');
        game.load.audio('gameOver', 'assets/gameOver.mp3');
        game.load.audio("backgroundMusic", "assets/backMusic.mp3")
    },
    create: function () {
        game.stage.backgroundColor = '#71c5cf';
        //여기서 새를 추가하는것을 알려준다.
        // this.bird = game.add.sprite(100, 245, 'bird');
        this.bird = game.add.sprite(100, 245, 'bird');
        this.bird.width = 50;
        this.bird.height = 50;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this); // 점프작성
        // 여기서 update 하는걸 알려준다 + restartGames
        //여기서 파이프 만드는것에 대해서 알려준다.
        this.pipes = game.add.group();
        this.timer = game.time.events.loop(1000, this.addRowOfPipes, this);
        //여기서 부딧치면 죽는걸 알려줌

        //점수 추가하는 부분
        // 여기 다음에는 언제 추가될지를 써보도록 하면 된다
        // 
        this.score = 0;
        // 소리 나게 하는 부분
        this.jumpSound = game.add.audio('jump');

        this.scoreText = game.add.text(10, 40, "score : 0", { fill: 'white' });
        this.gameSpeed = 1
        this.boom = game.add.sprite(-100, -100, "boom")
        this.boom.width = 100
        this.boom.height = 100;
        this.gameOver = game.add.audio("gameOver")
        this.backgroundMusic = game.add.audio("backgroundMusic")
        this.backgroundMusic.play()
        this.scoreAdd = 1
        this.BestScoreText = game.add.text(10, 10, `Bestscore : ${bestScore}`, { fill: 'white' });

    },
    update: function () {
        if (this.bird.y < 0 || this.bird.y > 490)
            this.restartGame();
        if (this.bird.angle < 10)
            this.bird.angle += 0.5;
        game.physics.arcade.overlap(this.bird, this.pipes, this.restartGameByOverlap, null, this);
        this.scoreText.text = `score : ${this.score}`
        if (this.score > 2) {
            game.stage.backgroundColor = `#ff70ba`
            this.gameSpeed = 1.5
        }
    },
    jump: function () {
        this.bird.body.velocity.y = -500;
        this.jumpSound.play()
        this.bird.angle = -15;

    },
    restartGameByOverlap: function (payload) {
        this.boom.x = payload.position.x
        this.boom.y = payload.position.y
        this.bird.kill()
        this.gameOver.play()
        this.backgroundMusic.stop()
        this.scoreAdd = 0
        setTimeout(() => {
            if (bestScore < this.score) {
                bestScore = this.score
            }
            game.state.restart();
        }, 1000);
    },
    restartGame: function () {
        this.backgroundMusic.stop()
        this.scoreAdd = 0
        if (bestScore < this.score) {
            bestScore = this.score
        }
        game.state.restart();
    },
    addOnePipe: function (x, y) {
        var pipe = game.add.sprite(x, y, 'pipe');
        this.pipes.add(pipe);
        game.physics.arcade.enable(pipe);
        /**
         * 파이프가 다가오도록 하게 하는것
         */
        pipe.body.velocity.x = -1000 * this.gameSpeed;
        /**
         * 보이지 않으면 없어지도록
         */
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    addRowOfPipes: function () {
        /**
         * 계산하는거 알게 해보자
         */
        var hole = Math.floor(Math.random() * 4) + 1;

        // 6 개의 파이프 추가
        // '구멍'과 '구멍 + 1' 위치에 하나의 큰 구멍이있는 상태
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1 && i != hole + 2)
                this.addOnePipe(1000, i * 60 + 10);
        this.score += this.scoreAdd;
    }
}



var game = new Phaser.Game(1000, 490);

game.state.add('main', mainState);

game.state.start('main');