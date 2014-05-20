
Ext.define('CRUD.view.Customers', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.customers',
    xtype: 'customers',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Number',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.form.field.HtmlEditor',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    layout: 'fit',

    controller: 'customers',

    viewModel: 'customers',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: 'border',
                    collapsed: false,
                    manageHeight: false,
                    title: 'Customers',
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            region: 'center',
                            split: true,
                            resizable: false,
                            bodyBorder: true,
                            title: '',
                            forceFit: true,
                            bind: {
                                store: '{customers}'
                            },
                            listeners: {
                                select: 'select'
                            },
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'firstName',
                                    text: 'First Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'lastName',
                                    text: 'Last Name'
                                },
                                {
                                    xtype: 'booleancolumn',
                                    dataIndex: 'isPremium',
                                    text: 'Is Premium'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'totalPurchases',
                                    text: 'Total Purchases'
                                },
                                {
                                    xtype: 'templatecolumn',
                                    tpl: [
                                        '<a href="mailto:{email}">{email}</a>'
                                    ],
                                    dataIndex: 'email',
                                    text: 'Email'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'phone',
                                    text: 'Phone'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'signupDate',
                                    text: 'Signup Date'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            region: 'east',
                            split: true,
                            itemId: 'detailsPanel',
                            reference: 'detailsPanel',
                            width: 150,
                            layout: 'card',
                            items: [
                                {
                                    xtype: 'panel',
                                    itemId: 'selectMessage',
                                    reference: 'selectMessage',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            html: '<h1>Please select a record</h1>',
                                            bodyPadding: 40
                                        }
                                    ]
                                },
                                {
                                    xtype: 'form',
                                    itemId: 'display',
                                    reference: 'display',
                                    bodyPadding: 10,
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'First Name',
                                            name: 'firstName'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Last Name',
                                            name: 'lastName'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Is Premium',
                                            name: 'isPremium'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Total Purchases',
                                            name: 'totalPurchases'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Email',
                                            name: 'email'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Phone',
                                            name: 'phone'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Signup Date',
                                            name: 'signupDate'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Street Address',
                                            name: 'streetAddress'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'City',
                                            name: 'city'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'State',
                                            name: 'state'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Zip',
                                            name: 'zip'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Country',
                                            name: 'country'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            fieldLabel: 'Comments',
                                            name: 'comments'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'form',
                                    itemId: 'form',
                                    reference: 'form',
                                    bodyPadding: 10,
                                    title: 'Edit Customer',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'First Name',
                                            name: 'firstName',
                                            fieldStyle: 'text-transform: capitalize',
                                            allowBlank: false,
                                            maxLength: 30,
                                            minLength: 2
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Last Name',
                                            name: 'lastName',
                                            fieldStyle: 'text-transform: capitalize',
                                            allowBlank: false,
                                            maxLength: 30,
                                            minLength: 2
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            fieldLabel: 'Is Premium',
                                            name: 'isPremium'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Email',
                                            name: 'email',
                                            fieldStyle: 'text-transform: lowercase',
                                            allowBlank: false,
                                            emptyText: 'mail@example.com',
                                            maxLength: 50,
                                            minLength: 5,
                                            regex: /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/,
                                            regexText: 'Please provide a valid email'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Phone',
                                            name: 'phone',
                                            allowBlank: false,
                                            emptyText: '(xxx) xxx-xxxx',
                                            regex: /^\(\d{3}\) \d{3}-\d{4}$/,
                                            regexText: 'Please enter a valid phone number (xxx) xxx-xxxx'
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 400,
                                            fieldLabel: 'Street Address',
                                            name: 'streetAddress',
                                            fieldStyle: 'text-transform: capitalize'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'City',
                                            name: 'city',
                                            fieldStyle: 'text-transform: capitalize'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'State',
                                            name: 'state',
                                            fieldStyle: 'text-transform: uppercase'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Zip',
                                            name: 'zip',
                                            emptyText: 'xxxxx-xxxx',
                                            regex: /\d{5}(-\d{4})?/,
                                            regexText: 'Please enter a valid US zip code'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Country',
                                            name: 'country',
                                            fieldStyle: 'text-transform: capitalize'
                                        },
                                        {
                                            xtype: 'htmleditor',
                                            fieldLabel: 'Comments',
                                            name: 'comments'
                                        },
                                        {
                                            xtype: 'container',
                                            padding: 10,
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    formBind: true,
                                                    reference: 'saveButton',
                                                    margin: 5,
                                                    text: 'Save'
                                                },
                                                {
                                                    xtype: 'button',
                                                    reference: 'cancelButton',
                                                    margin: 5,
                                                    text: 'Cancel'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            itemId: 'toolbar',
                            items: [
                                {
                                    xtype: 'button',
                                    reference: 'addButton',
                                    text: 'Add'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    reference: 'editButton',
                                    text: 'Edit',
                                    listeners: {
                                        click: 'edit'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    reference: 'removeButton',
                                    text: 'Remove',
                                    listeners: {
                                        click: 'remove'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});