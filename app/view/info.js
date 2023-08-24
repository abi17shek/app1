
Ext.define('MyApp.view.info',{
    extend: 'Ext.form.Panel',
    xtype:'detail',
    requires: [
        'MyApp.view.infoController',
        'MyApp.view.infoModel'
    ],

    controller: 'info',
    viewModel: {
        type: 'info'
    },

    title:'user form',
    layout:'form',
    defaults:{},
    items:[
        {
            xtype:'textfield',
            name:'firstname',
            emptyText:'enter your name',
            fieldLabel:'First Name',
        },
        {
            xtype:'textfield',
            name:'Last name',
            fieldLabel:'last name'
        },
    ]

});
