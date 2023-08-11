({
    gameStart : function(component, event, helper) {
        let gameModeCombox = component.find("modes");
        let gameModeSelectedValue = gameModeCombox.get("v.value");
        let compEvent = component.getEvent("SelectedModeEvent");


        component.set("v.gameSelectedMode",gameModeSelectedValue);
        compEvent.setParams({value: gameModeSelectedValue});
        compEvent.fire();
    },


    gameRestart : function(component, event, helper) {
        let gameModeCombox = component.find("modes");
        let gameModeSelectedValue = gameModeCombox.get("v.value");
        let compEvent = component.getEvent("SelectedModeEvent");
        
        component.set("v.gameSelectedMode",gameModeSelectedValue);
        compEvent.setParams({value: gameModeSelectedValue});
        compEvent.fire();
    },


    handleChange: function(component, event, helper) {
        let selectedOptionValue = event.getParam("value");
        let compEvent = component.getEvent("SelectedModeEvent");
        compEvent.setParams({value: selectedOptionValue});
        compEvent.fire();
    }
})
