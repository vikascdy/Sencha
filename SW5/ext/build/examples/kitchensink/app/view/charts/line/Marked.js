/**
 * Marked lines are multi-series lines displaying trends across multiple categories.
 * Markers are placed at each point to clearly depict their position on the chart.
 */
Ext.define('KitchenSink.view.charts.line.Marked', {
    extend: 'Ext.Panel',
    xtype: 'line-marked',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',

    layout: {
        type: 'vbox',
        pack: 'center'
    },
    // </example>

    width: 650,

    initComponent: function() {
        var me = this;

        me.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', 'data1', 'data2', 'data3', 'data4' ],
            data: [
                { month: 'Jan', data1: 20, data2: 37, data3: 35, data4: 4 },
                { month: 'Feb', data1: 20, data2: 37, data3: 36, data4: 5 },
                { month: 'Mar', data1: 19, data2: 36, data3: 37, data4: 4 },
                { month: 'Apr', data1: 18, data2: 36, data3: 38, data4: 5 },
                { month: 'May', data1: 18, data2: 35, data3: 39, data4: 4 },
                { month: 'Jun', data1: 17, data2: 34, data3: 42, data4: 4 },
                { month: 'Jul', data1: 16, data2: 34, data3: 43, data4: 4 },
                { month: 'Aug', data1: 16, data2: 33, data3: 44, data4: 4 },
                { month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4 },
                { month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4 },
                { month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4 },
                { month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4 }
            ]
        });
        //<example>
        me.tbar = [
            '->',
            {
                text: 'Preview',
                handler: function() {
                    me.down('cartesian').preview();
                }
            }
        ];
        //</example>

        var markerFx = {
            duration: 200,
            easing: 'backOut'
        };

        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 500,
            legend: {
                docked: 'right'
            },
            store: this.myDataStore,
            insetPadding: 40,
            sprites: [{
                type: 'text',
                text: 'Line Charts - Marked Lines',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }, {
                type: 'text',
                text: 'Data: Browser Stats 2012',
                fontSize: 10,
                x: 12,
                y: 470
            }, {
                type: 'text',
                text: 'Source: http://www.w3schools.com/',
                fontSize: 10,
                x: 12,
                y: 485
            }],
            axes: [{
                type: 'numeric',
                fields: ['data1', 'data2', 'data3', 'data4' ],
                position: 'left',
                grid: true,
                minimum: 0,
                renderer: function (v) {
                    return v.toFixed(v < 10 ? 1: 0) + '%';
                }
            }, {
                type: 'category',
                fields: 'month',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: 'IE',
                xField: 'month',
                yField: 'data1',
                marker: {
                    type: 'square',
                    fx: markerFx
                },
                highlightCfg: {
                    scaling: 2
                },
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    cls:'kitchensink',
                    renderer: function(storeItem, item) {
                        var title = item.series.getTitle();
                        this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: 'Firefox',
                xField: 'month',
                yField: 'data2',
                marker: {
                    type: 'triangle',
                    fx: markerFx
                },
                highlightCfg: {
                    scaling: 2
                },
                tooltip: {
                    trackMouse: true,
                    cls:'kitchensink',
                    style: 'background: #fff',
                    renderer: function(storeItem, item) {
                        var title = item.series.getTitle();
                        this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: 'Chrome',
                xField: 'month',
                yField: 'data3',
                marker: {
                    type: 'arrow',
                    fx: markerFx
                },
                highlightCfg: {
                    scaling: 2
                },
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    cls:'kitchensink',
                    renderer: function(storeItem, item) {
                        var title = item.series.getTitle();
                        this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: 'Safari',
                xField: 'month',
                yField: 'data4',
                marker: {
                    type: 'cross',
                    fx: markerFx
                },
                highlightCfg: {
                    scaling: 2
                },
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    cls:'kitchensink',
                    renderer: function(storeItem, item) {
                        var title = item.series.getTitle();
                        this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                    }
                }
           }]
        //<example>
        }, {
            style: 'margin-top: 10px;',
            xtype: 'gridpanel',
            columns : {
                defaults: {
                    sortable: false,
                    menuDisabled: true,
                    renderer: function (v) { return v + '%'; }
                },
                items: [
                    { text: 'Month', dataIndex: 'month', renderer: function (v) { return v; } },
                    { text: 'IE', dataIndex: 'data1' },
                    { text: 'Firefox', dataIndex: 'data2' },
                    { text: 'Chrome', dataIndex: 'data3' },
                    { text: 'Safari', dataIndex: 'data4' }
                ]
            },
            store: this.myDataStore,
            width: '100%'
        //</example>
        }];

        this.callParent();
    }
});
