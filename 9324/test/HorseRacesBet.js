contract('HorseRacesBet', function(accounts) {
	it("should keep a Race struct in the storage on initRace call", function() {
		var horseBetContract = HorseRacesBet.deployed();
		var horsesRunningTheRace = [10, 20, 30];

		horseBetContract.allEvents({ fromBlock: 0 }, function(error, result) {
			// This will catch all Transfer events, regardless of how they originated.
			console.log('event log');
			if (error == null) {
				console.log(result.args);
			}
		});
		
		horseBetContract.initRace(horsesRunningTheRace).then(function(transactionId) {
			console.log("transactionId="+transactionId);

			horseBetContract.getRaceInfos.call(0).then(function(raceDatas){

				assert.equal(raceDatas[0], 0, "The raceId returned should be 0");
				
				assert.equal(raceDatas[1].valueOf(), 100, "The sum of all bets should be 100.");
				
				assert.equal(raceDatas[2], false, "The race shouldn't be over");
				
				var horsesRunningTheRaceParam = [];
				for(var i = 0 ; i < raceDatas[3].length; i++){
					horsesRunningTheRaceParam.push(Number(raceDatas[3][i]));
				}
				assert.deepEqual(horsesRunningTheRaceParam, horsesRunningTheRace, "The horses running the race should be the one we initialized the race with.");
				
				assert.equal(raceDatas[4], false, "The bets shouldn't be closed on the race.");
			});

		});
    });
});