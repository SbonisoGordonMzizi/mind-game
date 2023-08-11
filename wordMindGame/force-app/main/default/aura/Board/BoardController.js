({
    generateWords: function(component, event, helper) {
       const numberOfWords = component.get("v.numberOfWords");
       const listOfWords = helper.genListOfWords(numberOfWords);
       component.set('v.listOfWords',listOfWords);
    },

    selectWord: function(component, event, helper) {
        let selectedWordValue = event.getSource().get("v.label");
        let compEvent = component.getEvent("SelectedWordEvent");
        compEvent.setParams({value: selectedWordValue});
        compEvent.fire();
    }
   
})
