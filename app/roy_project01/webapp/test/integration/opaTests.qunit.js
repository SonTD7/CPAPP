sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/royproject01/test/integration/FirstJourney',
		'ns/royproject01/test/integration/pages/RisksList',
		'ns/royproject01/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/royproject01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);