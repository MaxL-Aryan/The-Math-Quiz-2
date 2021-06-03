function login()
{
    player_1_nme=document.getElementById("player1_nme_inpt").value;
    player_2_nme=document.getElementById("player2_nme_inpt").value;
    
    localStorage.setItem("player1_name",player_1_nme);
    localStorage.setItem("player2_name",player_2_nme);

    player_1_scre=0;
    player_2_scre=0;

    window.location="game_page.html";
}