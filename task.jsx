let homeWork = [
   { numberTask: "1 Задача", nameTask: "Помыть посуду" },
   { numberTask: "2 Задача", nameTask: "Пропылососить" },
   { numberTask: "3 Задача", nameTask: "Вытрать пыль" },
   { numberTask: "4 Задача", nameTask: "Вынусти мусор" },
   { numberTask: "5 Задача", nameTask: "Помыть пол" },
]

class Task extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      let homeWork = this.props.homeWork.map(hw => {
         return (
            <div>
               <div style={styleHomeWork}>
                  <span>{hw.numberTask}:</span>
                  <span style={styleNameTask}>{hw.nameTask}</span>
               </div>
            </div>)
      })
      return homeWork;
   }
}

const styleHomeWork = {
   border: "2px solid black",
   width: "300px",
   fontSize: "24px",
   padding: "10px"
}

const styleNameTask = {
   marginLeft: "10px"
}

ReactDOM.render(
   <Task homeWork={homeWork} />,
   document.getElementById('app')
)