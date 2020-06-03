var bestScore = 0
var mainState = {
    preload: function () {
        game.load.image("bird", "assets/birdTest.png")
        game.load.audio('jump', 'assets/jump.wav');
        game.load.image('pipe', 'assets/pipe.png');
        game.load.audio("backgroundMusic", "assets/ImagineDragons.mp3")
        game.load.image("boom", "assets/boom.png")
    },
    create: function () {
        game.stage.backgroundColor = '#71c5cf';
        this.bird = game.add.sprite(100, 245, "bird");
        this.bird.width = 50;
        this.bird.height = 50;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);        
        spaceKey.onDown.add(this.jump, this)

        this.jumpSound = game.add.audio('jump');
        this.pipes = game.add.group();
        game.time.events.loop(1000, this.addRowOfPipes, this);
        this.score = 0
        this.backgroundMusic = game.add.audio('backgroundMusic');
        this.backgroundMusic.play()
        this.scoreText = game.add.text(10, 40, "score : 0", { fill: "white" })
        game.add.text(10, 10, "Bestscore : " + bestScore, { fill: "white" })
        this.speedAdd = 1
    },
    update: function () {
        this.scoreText.text = "score : " + this.score
        if (this.bird.y < 0 || this.bird.y > 490) {
            this.restartGame()
        }
        if (this.score > 3) {
            game.stage.backgroundColor = '#ffff00';
            this.speedAdd = 1.5
        }
        else if (this.score > 2) {
            game.stage.backgroundColor = '#ff70ba';
            this.speedAdd = 1.3
        } else if (this.score > 1) {
            game.stage.backgroundColor = '#000000';
            this.speedAdd = 1.2
        }
        this.bird.angle += 0.5
        game.physics.arcade.overlap(this.bird, this.pipes, this.overlapGameRestart, null, this)
    },
    jump: function () {
        this.bird.body.velocity.y = -500;
        this.bird.angle = -20
        this.jumpSound.play()
    },
    restartGame: function () {
        if (bestScore < this.score) {
            bestScore = this.score
        }
        this.backgroundMusic.stop()
        game.state.start('main');
    },
    addOnePipe: function (x, y) {
        var pipe = game.add.sprite(x, y, 'pipe');
        pipe.width = 60
        pipe.height = 60
        this.pipes.add(pipe);
        game.physics.arcade.enable(pipe);
        pipe.body.velocity.x = -1000 * this.speedAdd;
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    addRowOfPipes: function () {
        this.score += 1
        // 1, 2, 3, 4 중에 하나의 숫자가 나온다
        var hole = Math.floor(Math.random() * 4) + 1;
        for (var i = 0; i < 8; i++) {
            if (i != hole && i != (hole + 1) && i != (hole + 2))
                this.addOnePipe(1000, i * 60 + 10)
        }
    },
    overlapGameRestart: function (overlap) {
        if (bestScore < this.score) {
            bestScore = this.score
        }
        var x = overlap.position.x
        var y = overlap.position.y
        var boom = game.add.sprite(x, y, "boom");
        boom.width = 50;
        boom.height = 50;
        this.bird.kill()
        this.backgroundMusic.stop()
        setTimeout(() => {
            game.state.restart();
        }, 3000);
    }
}



var game = new Phaser.Game(1000, 490);

game.state.add('main', mainState);

game.state.start('main');