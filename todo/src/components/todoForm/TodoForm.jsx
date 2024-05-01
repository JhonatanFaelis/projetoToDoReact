import { useState } from 'react'

const TodoForm = ({addTodo}) => {

    //campos que vou capturar no form
    const [text, setText] = useState("")
    const [category, setCategory] = useState("")

    //funcao que vai ser disparado no submit

    const handleSubmit = (e) => {
        e.preventDefault();
        //criar uma validação
        if(!text || !category){
            alert("Preencha todos os campos");
            return;
        } 
        //adicionar todo

        //limpar os campos
        // para isso, o value dos inputs sao vinculados com o a variavel do useState criada
        alert(`Tarefa ${text} adicionada com sucesso!`)
        addTodo(text,category)
        setText("");
        setCategory("");
        console.log(`O texto digitado ${text} e a categoria escolhida ${category}`)
    }



    return (
        <div className='todo-form'>
            <h2>Criar Tarefa :</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Digite o Título' onChange={(e) => setText(e.target.value)} value={text} />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Pessoal'>Pessoal</option>
                    <option value='Estudos'>Estudos</option>
                </select>
                <button type='submit' className='create'>Criar Tarefas</button>
            </form>
        </div>
    )
}

export default TodoForm