contract HorseRacesBet {

	struct Race {
		uint raceId;
		uint stakesSum;
		bool isOver;
		bool areBetsForbidden;
		uint32[] horsesRunningTheRace;
	}

	address public owner = msg.sender;

	uint courseIDGenerator = 0;
	mapping (uint => Race) races;

	modifier ownerOnly()
	{
		if (msg.sender != owner)
		throw;
		_
	}

	event InitRace(uint32[] horsesRunningTheRaceParam);

	function initRace(uint32[] horsesRunningTheRaceParam) ownerOnly returns(uint) {
		InitRace(horsesRunningTheRaceParam);
		races[courseIDGenerator].raceId= courseIDGenerator;
		races[courseIDGenerator].stakesSum=100;
		races[courseIDGenerator].isOver=false;
		races[courseIDGenerator].areBetsForbidden=false;
		
		for(uint x= 0; x< horsesRunningTheRaceParam.length; x++ ){
			races[courseIDGenerator].horsesRunningTheRace.push(horsesRunningTheRaceParam[x]);
		}
		courseIDGenerator++ ;
		return races[courseIDGenerator].raceId;
	}

	event GetRaceInfos(uint raceId);

	function getRaceInfos(uint raceIdParam) public returns(uint, uint, bool, uint32[], bool){
	   GetRaceInfos(raceIdParam);
	   return (races[raceIdParam].raceId, races[raceIdParam].stakesSum, races[raceIdParam].isOver, races[raceIdParam].horsesRunningTheRace , races[raceIdParam].areBetsForbidden);
	 }
}

