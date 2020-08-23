function game()
    {
    function computerplay() // computer choice
        {
            let computerchoice = Math.floor(Math.random() * 3) //return 1, 2, ou 3 randomly
            if (computerchoice === 0)
                return "rock";
            else if (computerchoice === 1 )
                return "paper";
            else 
                return "scissor";
        }
        ///console.log(computerplay())

    // *********************** functions for the game round!!! her is the determination of who is the winner of actual round. 1 for player, 0 for computer, and 2 for tie**************//

    function playround(playerselection, computerselection)// round of game
        {
            //playerselection = playerselection.toLowerCase();
            if (playerselection !== "rock" && playerselection !== "paper" && playerselection !== "scissor")
            { return "sorry your input is not valid, retipe please!!! e.g (rock, paper, or scissor)"; }
            
            if ((playerselection === "rock" && computerselection==="scissors") ||
                (playerselection === "paper" && computerselection ==="rock") ||
                (playerselection === "scissor" && computerselection ==="paper"))
                return 1; // if player is the winner of round
            else if ((playerselection === "rock" && computerselection === "paper")||
                    (playerselection === "paper" && computerselection === "scissor")||
                    (playerselection === "scissor" && computerselection === "rock"))
                    return 0; // if computer is the winner of round
            else
                return 2; // case of an tie round
        }

    function roundwinner( verdict, player, computer = computerplay() ) //round winner
        {

            if (verdict == 0)
                {
                    console.log("You Lose! you can do better next time!!!")
                    return 0;
                }
            else if (verdict == 1)
                {
                    console.log("oh no!!! you beat me... you will not have same chance next time!!!")
                    return 1;
                }
            else
                console.log(" one point for each of us!!! not bad ")
                return 2;    
        }

    function gamewinner( player, computer )// final game winner 
        {
            if (player > computer )
                {
                    console.log(" waouh you are playing like a professional... good job!!! now you can follow me on youtube at << Le Labo de Raphael >> ")
                }
            else if (player > computer )
                {
                    console.log(" sorry for i'm the winner... you can restart if you want to beat me!!! i will always be the best(' 3 ')")
                }
            else 
                console.log("**TIE** I will beat you next time... restart game please!!!")
        }


        let player = 0;
        let computer = 0;
        for( i=0; i < 5; i++) 
            {
                // calling of player and computer selection funtion
                let result = playround(playerselection = prompt ("select between rock, paper, or scissor "), computerselection = computerplay());
                

                //choice of each player
                console.log("Player picked " + playerselection);
                console.log("Computer picked " + computerselection);

                let oneroundwinner = roundwinner(result);//
                if (oneroundwinner == 1)
                    player +=1;
                else if (oneroundwinner == 0)
                    computer +=1;
                else 
                    player +=1;
                    computer +=1;
            }
            playround();
            gamewinner(player, computer);

    }
    game();
