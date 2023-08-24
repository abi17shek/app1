Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

   // alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" },
        { name: 'am',       email: "ms.am@enterprise.com",          phone: "555-555-5555" },
        { name:"unni",      email:"ajesh.troll@gmail.com",          phone: "5550000000000"}

    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
    