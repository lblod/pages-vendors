import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleSnippetBesluitenlijst(){
      this.set('showSnippetBesluitenlijst', !this.showSnippetBesluitenlijst);
    },
    toggleSnippetBesluitenlijstMetStemming(){
      this.set('showSnippetBesluitenlijstMetStemming', !this.showSnippetBesluitenlijstMetStemming);
    },
    toggleSnippetReglement(){
      this.set('showSnippetReglement', !this.showSnippetReglement);
    },
    toggleSnippetBudget(){
      this.set('showSnippetBudget', !this.showSnippetBudget);
    }
  }
});
