export default function crearPersona(){

    const[nombre, setNombre] = useState("");
    const[identificacion, setIdentificacion] = useState("");

    const createPersona= () => {
        return axios.get(urls.createPersona());
    }

    const deletePersona = () => {
        
    }

    const editPersona = () => {
        
    }

    return (
        <>
            <form>
                <h2>Crear Persona</h2>
                <label htmlFor="nombrePersona">Nombre de la Persona</label>
                <input type="text"
                name="nombre"
                value={nombre}
                />
                <label htmlFor="nombrePersona">Nombre de la Persona</label>
                <input type="text"
                name="id"
                value={identificacion}
                />
                <input type="submit" value={createPersona} />
            </form>
            <p>Acá también podrás ver a todas las personas existentes, 
                editarlas y borrarlas de la base de datos</p>
        </>
    )
}