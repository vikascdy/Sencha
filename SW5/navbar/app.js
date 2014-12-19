Ext.require([
    'Edifecs.Favourites',
    'Edifecs.Notifications',
    'Ext.toolbar.Spacer',
    'Edifecs.DoormatNavigation',
	'Ext.data.JsonStore',
	'Edifecs.DoormatApplicationBar',
	'Ext.layout.container.Border',
	'Ext.layout.container.Fit',
	'Ext.container.Viewport',
	'Ext.layout.container.Card',
	'Ext.layout.container.Table'
]);

Ext.application({
    name: 'navbar',
    extend: 'navbar.Application',
    autoCreateViewport: false
});