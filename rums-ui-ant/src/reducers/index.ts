const reducers=(state={},action:{type:String,id:String,text:String})=>{
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default reducers