
Ext.define('MyApp.view.GroupList',{
    extend: 'Ext.panel.Panel',
    xtype:'grouplist',

    /*items:[
        {
            xtype:'gridpanel',
            store:'Personnel',
            /*store:{
                fields: [
                    'name', 'email', 'phone'
                ],
                data:[
                    { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
                    { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
                    { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
                    { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
                ]
            },*
            columns: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Age', dataIndex: 'email', flex: 1 },
                { text: 'Address ', dataIndex: 'phone', width: 1 }
            ],
        }
    ], xtype: 'form-login',*/

    title: 'Login',
    frame: true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'user',
        emptyText: 'user id',
        msgTarget: 'under'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }, {
        xtype: 'checkbox',
        fieldLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [
        { text: 'Register' },
        { text: 'Login' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    },


 html:'hello world'
});
