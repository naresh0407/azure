({
    doInit : function(component, event, helper) {
        
        helper.callAction( component, 'c.getFieldLabel', {
            'objectName' : component.get('v.objectName'),
            'fieldName'  : component.get('v.fieldName')
        }, function( data ) {
            component.set('v.label', data);
        });
        
        helper.callAction( component, 'c.getPicklistOptions', {
            'objectName' : component.get('v.objectName'),
            'fieldName'  : component.get('v.fieldName')
        }, function( data ) {
            var opt = component.get('v.options');
            for(var a in data)
            {
                opt.push(data[a]);
            }
            component.set('v.options',opt);
       });
        
        var sDefaultValue = component.get('v.value'); 
        //if(sDefaultValue == '' || sDefaultValue == null ){            
            var opt = component.get('v.options');
            var sDefaultValueLabel = component.get('v.defaultValue');                                                                                                                                                                                                                                                                             
            opt.push({value: '', label: sDefaultValueLabel});
            component.set('v.options',opt);
            sDefaultValue = '';
        /*}*/
        
        var sPick1 = component.find('sPick1');
        sPick1.set('v.value', sDefaultValue);                               
    }
    
})