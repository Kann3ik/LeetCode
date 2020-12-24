var gameOfLife = function(board) {
    let cnt = 0, die = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[j].length; j++){
            board[i][j] = Math.floor(Math.random() * 2);
        }
    }

    let arr = board.map(function (item) {
	return [...item]
});
    console.log(board);

    for(let i = 0; i < board.length; i++){
        life:
        for(let j = 0; j < board[j].length; j++){
            if(board[i][j] === 1){
                cnt = 0;
                die = 0;
                //up-left
                if(i - 1 != -1 && j - 1 != -1 && board[i-1][j-1] === 1) cnt++;
                else die++;
                //up-right
                if(i - 1 != -1 && j + 1 != 3 && board[i-1][j+1] === 1) cnt++;
                else die++;

                //up
                if(i - 1 != -1 && board[i-1][j] === 1) cnt++;
                else die++;
                //down
                if(i + 1 != 4 && board[i+1][j] === 1) cnt++;
                else die++;

                //down-left
                if(i + 1 != 4 && j - 1 != -1 && board[i+1][j-1] === 1) cnt++;
                else die++;
                //down-right
                if(i + 1 != 4 && j + 1 != 3 && board[i+1][j+1] === 1) cnt++;
                else die++;

                //left
                if(board[i][j-1] === 1) cnt++;
                else die++;
                //right
                if(board[i][j+1] === 1) cnt++;
                else die++;

                
            }
            else if (board[i][j] === 0){
                cnt = 0;
                die = 0;
                //up-left
                if(i - 1 != -1 && j - 1 != -1 && board[i-1][j-1] === 1) cnt++;
                else die++;
                //up-right
                if(i - 1 != -1 && j + 1 != 3 && board[i-1][j+1] === 1) cnt++;
                else die++;

                //up
                if(i - 1 != -1 && board[i-1][j] === 1) cnt++;
                else die++;
                //down
                if(i + 1 != 4 && board[i+1][j] === 1) cnt++;
                else die++;

                //down-left
                if(i + 1 != 4 && j - 1 != -1 && board[i+1][j-1] === 1) cnt++;
                else die++;
                //down-right
                if(i + 1 != 4 && j + 1 != 3 && board[i+1][j+1] === 1) cnt++;
                else die++;

                //left
                if(board[i][j-1] === 1) cnt++;
                else die++;
                //right
                if(board[i][j+1] === 1) cnt++;
                else die++;

                
            }

            console.log('i - ' + i + ' j - ' + j + ' - живых = ' + cnt + ' - мертвых = ' + die);
            
             if(board[i][j] === 1 && (cnt < 2 || cnt > 3)) {
                 arr[i][j] = 0;
             }
            else if(board[i][j] === 1 && (cnt === 2 || cnt === 3)) {
                 arr[i][j] = 1;
             }
            else if(board[i][j] === 0 && cnt === 3) {
                 arr[i][j] = 1;
             }
        }
    }


     console.log(arr);
    // return board;
};

let board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ];

console.log(gameOfLife(board));