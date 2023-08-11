({
    handleSelectedModeEvent : function(component, event, helper) {
        let selectedModeValue = event.getParam("value");
        component.set("v.wordSize",helper.getWordSize(selectedModeValue));
        component.set("v.showWords","true");
    },

    handleSelectedWordEvent: function(component, event, helper) {
        let selectedModeValue = event.getParam("value");
        console.log("SSSSSSSSSSS : "+selectedModeValue);
    }
})
