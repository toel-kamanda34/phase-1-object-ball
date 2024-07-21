//gameObject function
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn  Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
                away: {
                    teamName: "Charlottw Hornets",
                    colors:["Turquoise","Purple"],
                    players: {
                        "Jeff Adrien": {
                            number: 4,
                            shoe: 18,
                            points: 10,
                            rebounds: 1,
                            assists: 1,
                            steals: 2,
                            blocks: 7,
                            slamDunks: 2
                        },
                        "DeSagna Diop": {
                            number: 2,
                            shoe: 14,
                            points: 24,
                            rebounds: 12,
                            assists: 12,
                            steals: 4,
                            blocks: 5,
                            slamDunks: 5
                        },
                        "Ben Gordon": {
                            number: 8,
                            shoe: 15,
                            points: 33,
                            rebounds: 3,
                            assists: 2,
                            steals: 1,
                            blocks: 1,
                            slamDunks: 0
                        },
                        "Brendan Haywood": {
                            number: 33,
                            shoe: 15,
                            points: 6,
                            rebounds: 12,
                            assists: 12,
                            steals:22,
                            blocks: 5,
                            slamDunks: 12
                        }
                    }
                }

                
                }
            }
        }
    }



function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = '';

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                playerWithMostPoints = player;
            }
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for (let player in game.home.players) {
        homeTeamPoints +=game.home.players[player].points;
    }
    for (let player in game.away.players) {
        awayTeamPoints += game.away.players[player].points;
      }
    
      return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
    
}
function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }
  
  // Super Bonus
  function doesLongNameStealATon() {
    const game = gameObject();
    const playerWithLongestName = this.playerWithLongestName();
    let maxSteals = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > maxSteals) {
          maxSteals = game[team].players[player].steals;
        }
      }
    }
  
    for (let team in game) {
      if (game[team].players[playerWithLongestName]) {
        return game[team].players[playerWithLongestName].steals === maxSteals;
      }
    }
  
    return false;
  }
  