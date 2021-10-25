let root = document.getElementsByClassName("todo-app__root");

//var left;
//class 
var itemNum = 0;


let input = document.createElement("input");
input.setAttribute("class","todo-app__input");
let sel = document.createElement("selection");
root[0].appendChild(sel);
sel.appendChild(input);

let list = document.createElement("ul");
sel.appendChild(list);
list.setAttribute("class","todo-app__list");

class item
{
    constructor(content)
    {
        this.node = document.createElement("li");
        this.finished = 0;
        this.content = `${content}`;
        this.setItem = function () 
        {
            console.log("this.classname"); 
            this.node.setAttribute("class","todo-app__item"); 
            let detail = document.createTextNode(`${content}`);
            //console.log(detail);
                    //detail.setAttribute("class", "todo-app__item-detail");
            //detail.classname = "todo-app__item-detail";       
            this.node.appendChild(detail); 
            
            

            //console.log(this.node.detail.classname);
            //conNode = document.createElement(this.textContent);
            //this.node.appendChild(conNode);
            //conNode.setAttribute("class", "todo-app__item-detail"); 
        }
        this.setCB = function name() 
        {
            let cbNode = document.createElement("div");
            cbNode.className = "todo-app__checkbox";
            this.node.appendChild(cbNode);
        }
    }
    get iNode() {
        return this.node;
      }
    
    
}






//console.log(input.className);
//left.style.display = "block";
//let 

//let capNode = document.createElement("caption");
//capNode.textContent = `${who}'s Score`;
//tableNode.appendChild(capNode);
  
  // 按 Enter 新增
 input.addEventListener('keypress', function (e) {
    // Enter 對應鍵盤代碼：13
    if (e.which === 13) {
      addTodos();
    }
  });

  function addTodos() 
  {
    //console.log("todo-app__item-detail");
    const inputValue = input.value;
    
   // 檢查輸入欄位是否為空值，trim() 可清除字串前後空白
    if (inputValue.trim().length === 0) return;
    // 新增 todo
    let newTodo;
    newTodo = new item(inputValue);
    newTodo.setItem();
    //detail.classname = "todo-app__item-detail";
    //console.log(inputValue);

    
    list.appendChild(newTodo.iNode);
    
    //console.log(newTodo);

    itemNum++;
    input.value = '';
    console.log("yes");
  }




