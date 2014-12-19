Ext.define('Edifecs.FileUploadControl', {
    extend  : 'Ext.form.field.File',
    alias   : 'widget.fileuploadcontrol',
    // Array of acceptable file extensions
    // overridden when declared with a string
    // of extensions minus the period.
    accept        : ['gif','jpg','png','bmp'],
    listeners     : {
        change : function(me) {


            var indexofPeriod = me.getValue().lastIndexOf("."),
                uploadedExtension = me.getValue().substr(indexofPeriod + 1, me.getValue().length - indexofPeriod);


            if (!Ext.Array.contains(this.accept, uploadedExtension)){

                me.setActiveError('Please upload files with an extension of :  ' + this.accept.join() + ' only!');
                // Let the user know why the field is red and blank!
                Ext.MessageBox.show({
                    title   : 'File Type Error',
                    msg   : 'Please upload files with an extension of :  ' + this.accept.join(' ') + ' only!',
                    buttons : Ext.Msg.OK,
                    icon  : Ext.Msg.ERROR
                });
                // Set the raw value to null so that the extjs form submit
                // isValid() method will stop submission.
                //me.setRawValue(null);
            }
        }
    }
});