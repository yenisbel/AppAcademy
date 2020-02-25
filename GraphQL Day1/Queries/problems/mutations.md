```
mutation {
  addWizard(name:"David W", houseId: 1, patronusId: 2){
  	id,
    name,
    house{
      name
    }
    patronus{
      form
    }
	}
}
mutation {
  addWizard(name:"Dani W", houseId: 1, patronusId: 2){
  	id,
    name,
    house{
      name
    }
    patronus{
      form
    }
	}
}
mutation {
  addWizard(name:"Yeni W", houseId: 1, patronusId: 2){
  	id,
    name,
    house{
      name
    }
    patronus{
      form
    }
	}
}
```

```
mutation {
  updateWizard(id: 22, name:"This is not Dani W"){
  	id,
    name,
    house{
      name
    }
    patronus{
      form
    }
	}
}
```
```
mutation {
  updateWizard(id: 22, houseId: 4, patronusId: 5){
  	id,
    name,
    house{
      name
    }
    patronus{
      form
    }
	}
}
```
```
mutation {
  deleteWizard(id: 20){
    name
  }
}
```