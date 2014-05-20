

Ext.define('CRUD.controller.CustomersViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customers',

    requires: [
        'Ext.window.MessageBox',
        'Ext.util.Point'
    ],

    select: function(target, record) {
        // Retain for later access
        this.selectedCustomer = record;

        // Show display
        this.getDetailsPanel().getLayout().setActiveItem('display');

        // Load record into display
        this.getDisplay().getForm().loadRecord(record);

        // Show edit/remove buttons
        this.getEditButton().show();
        this.getRemoveButton().show();
    },

    add: function(target) {
        var form = this.getForm(),
            model = Ext.create('model.customer');

        // Set title
        form.setTitle('Add Customer');

        // Associate model with form
        form.getForm().loadRecord(model);

        // Show form
        this.getDetailsPanel().getLayout().setActiveItem('form');
    },

    edit: function(target) {
        var form = this.getForm(),
            model = Ext.create('model.customer');

        // Set title
        form.setTitle('Edit Customer');

        // Load record model into form
        form.loadRecord(this.selectedCustomer);

        // Show form
        this.getDetailsPanel().getLayout().setActiveItem('form');
    },

    save: function(target) {
        var form = this.getForm().getForm(),
            record = form.getRecord(),
            store = this.getStore('Customers'),
            isNew = !record.get('id');

        // Valid
        if (form.isValid()) {

            // Update associated record with form values
            form.updateRecord();

            // Add to store if new record
            if (isNew) {

                // Assign the record ID
                // Normally, this would be a generated ID
                var id = store.count() + 1;
                record.set("id", id);

                // Add to store
                store.add(record);

            }

            // Commit changes
            store.commitChanges();

            // Display record
            this.select(this, record);

        }
    },

    cancelEdit: function(target) {
        // Show display
        this.getDetailsPanel().getLayout().setActiveItem('display');
    },

    remove: function(target) {
        var me = this;

        // Ask user to confirm this action
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this customer?', function(result) {

            // User confirmed yes
            if (result == 'yes') {

                // Delete record from store
                me.getStore('Customers').remove(me.selectedCustomer);

                // Hide display
                me.getDetailsPanel().getLayout().setActiveItem('selectMessage');

                // Hide edit/remove buttons
                me.getEditButton().hide();
                me.getRemoveButton().hide();

            }

        });
    },


    getDetailsPanel: function() {
        return this.getReference('detailsPanel');
    },

    getForm: function() {
        return this.getReference('form');
    },

    getDisplay: function() {
        return this.getReference('display');
    },

    getEditButton: function() {
        return this.getReference('editButton');
    },

    getRemoveButton: function() {
        return this.getReference('removeButton');
    }

});
