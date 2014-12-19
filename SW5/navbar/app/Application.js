Ext.define('navbar2.Application', {
    extend: 'Ext.app.Application',
    name: 'navbar',
    launch: function () {
		this.buildViewport();
    },
	buildViewport: function () {
        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            border: false,
            items: [
                {
                    layout: 'border',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    border: false,
                    bodyStyle: 'background-color: #ffffff;',
                    items: [                        
                        {
                            xtype			: 	 'DoormatApplicationBar',
                            logoIcon        :    './resources/images/edifecs-logo.png',
							appBarUrl       :    './resources/json/doormat-appBar.json',
							doormatUrl      :    './resources/json/doormat.json',
							notificationUrl :    './resources/json/doormat-notifications.json',
							favouritesUrl   :    './resources/json/doormat-favourites.json',
                            region			:    'north',
                            border			:	 false
                        }
                    ]
                }
            ]
        });
    }
});
