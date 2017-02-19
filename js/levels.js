var levels = [
    {
        name: 'first',
        instructions: {
            'en': 'some html'
        },
        board: 'g',
        style: {'justify-content': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
    }
];

var levelWin = {
    name: 'win',
    instructions: {
        'en': '<p>You win!<p>'
    },
    board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
    classes: {'#pond, #background': 'wrap'},
    style: {},
    before: "#pond {\n  display: flex;\n",
    after: "}"
};
