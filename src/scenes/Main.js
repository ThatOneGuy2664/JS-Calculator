export class Main extends Phaser.Scene {

    constructor() {
        super('Main')
        this.inputString = '';
        this.resultText = null;
    }

    create() {
        const { width, height } = this.scale;

        this.add.rectangle(width / 2, height / 2, width, height, 0x222222);

        this.resultText = this.add.text(width / 2, 50, '', {
            fontSize: '32px',
            color: '#FFFFFF',
            fontFamily: 'Courier'
        }).setOrigin(0.5);

        const buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', 'C', '=', '+'
        ];

        const buttonSize = 60;
        const spacing = 10;
        const startX = width / 2 - (buttonSize * 2 + spacing * 1.5);
        const startY = 120;

        buttons.forEach((label, index) => {
            const x = startX + (index % 4) * (buttonSize + spacing);
            const y = startY + Math.floor(index / 4) * (buttonSize + spacing);

            const button = this.add.rectangle(x, y, buttonSize, buttonSize, 0x444444)
                .setOrigin(0)
                .setInteractive({ useHandCursor: true });

            const text = this.add.text(x + buttonSize / 2, y + buttonSize / 2, label, {
                fontSize: '24px',
                color: '#FFFFFF',
                fontFamily: 'Courier'
            }).setOrigin(0.5);

            button.on('pointerdown', () => this.handleInput(label));
        });
    }

    handleInput(label) {
        if (label === 'C') {
            this.inputString = '';
        } else if (label === '=') {
            try {
                //TODO better handling
                this.inputString = eval(this.inputString).toString();
            } catch (e) {
                this.inputString = 'Error';
            }
        } else {
            this.inputString += label;
        }
        this.resultText.setText(this.inputString);
    }
}