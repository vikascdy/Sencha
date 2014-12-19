Ext.define('Ext.edifecs.toolbar.Toolbar', {
    override: 'Ext.toolbar.Toolbar',
    defaultFieldUI: 'toolbar'
});

Ext.define('ExtThemeEdifecs.form.field.Base', {
    override: 'Ext.form.field.Base',
	labelSeparator: ''    
});

Ext.define('ExtThemeEdifecs.grid.Panel', {
    override		:  'Ext.grid.Panel',
	scrollPane      :  '',
	bodyCls			:  'scrollerPane',
	afterComponentLayout :	function()
	{
		var me = this;
		var gridId = me.getId();
		if (window.jQuery)
		{
		    $(function() {
			var settings = {
				showArrows: true,
				autoReinitialise: true,
				mouseWheelSpeed: 50,
				maintainPosition:true,
				stickToBottom:true
			};

			if (!me.scrollPane) { 
				me.scrollPane = $('#'+gridId+' > div.scrollerPane');
				me.scrollPane.jScrollPane(settings);
			}

			var view = $('#'+gridId+' > div.scrollerPane div.x-grid-view').detach();
			var jspContainer = $('#'+gridId+' > div.scrollerPane .jspContainer').detach();
			$('#'+gridId+' > div.scrollerPane').append(jspContainer);
			$('#'+gridId+' > div.scrollerPane .jspPane').append(view);
			$('#'+gridId+' > div.scrollerPane div.x-grid-view').css('overflow', 'hidden');
			$('#'+gridId+' > div.scrollerPane div.x-grid-view').css('height', 'auto');
		});
		this.callParent(arguments);
        return;
       }
	}
});

Ext.define('ExtThemeEdifecs.tree.Panel', {
    override		:  'Ext.tree.Panel',
	scrollPane      :  "",
	bodyCls			:  'scrollerPane',
	afterComponentLayout :	function()
	{
		var me = this;
		var treeId = me.getId();
		if (window.jQuery && !(Ext.isIE8 || Ext.isIE9))
		{
            $(function() {
                var settings = {
                    showArrows: true,
                    autoReinitialise: true,
                    mouseWheelSpeed: 50,
                    maintainPosition:true,
                    stickToBottom:true
                };

                if (!me.scrollPane) {
                    me.scrollPane = $('#'+treeId+' > div.scrollerPane');
                    me.scrollPane.jScrollPane(settings);
                }

                var view = $('#'+treeId+' > div.scrollerPane div.x-tree-view').detach();
                var jspContainer = $('#'+treeId+' > div.scrollerPane .jspContainer').detach();
                $('#'+treeId+' > div.scrollerPane').append(jspContainer);
                $('#'+treeId+' > div.scrollerPane .jspPane').append(view);
                $('#'+treeId+' > div.scrollerPane div.x-tree-view').css('overflow', 'hidden');
                $('#'+treeId+' > div.scrollerPane div.x-tree-view').css('height', 'auto');
            });
		this.callParent(arguments);
        return;
        }
	}
});

Ext.define('ExtThemeEdifecs.window.Window', {
    override: 'Ext.window.Window',
    shadow: 'sides',
	shadowOffset: 35
});

Ext.define('ExtThemeEdifecs.picker.Date', {
    override:	'Ext.picker.Date',
	shadow	:	'sides', 
	shadowOffset	:	8	
});

Ext.define('Ext.theme.edifecs.grid.column.Widget', {
    override: 'Ext.grid.column.Widget',

    config: {
        /**
         * @cfg defaultCellUI {Object}
         * A map of xtype to {@link Ext.Component#ui} names to use when using Components in this column.
         *
         * Currently {@link Ext.Button Button} and all subclasses of {@link Ext.form.field.Text TextField} default
         * to using `ui: "grid-cell"` when in a WidgetColumn.
         */
        defaultWidgetUI: {
            button: 'grid-cell',
            splitbutton: 'grid-cell',
            cyclebutton: 'grid-cell',
            textfield: 'grid-cell',
            pickerfield: 'grid-cell',
            combobox: 'grid-cell',
            combo: 'grid-cell',
            datefield: 'grid-cell',
            timefield: 'grid-cell',
            filefield: 'grid-cell',
            fileuploadfield: 'grid-cell'
        }
    }
});

Ext.define('ExtThemeEdifecs.menu.Menu', {
    override: 'Ext.menu.Menu',
	shadow: 'sides', 
	shadowOffset: 11,
    showSeparator: false
});

Ext.define('Ext.theme.edifecs.grid.plugin.Editing', {
    override: 'Ext.grid.plugin.Editing',

    defaultFieldUI: 'grid-cell'
});

Ext.define('Ext.theme.edifecs.toolbar.Breadcrumb', {
    override: 'Ext.toolbar.Breadcrumb',
    config: {
        buttonUI: 'default-toolbar'
    }
});

